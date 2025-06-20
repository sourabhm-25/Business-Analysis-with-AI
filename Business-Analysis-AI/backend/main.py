from fastapi import FastAPI, File, UploadFile, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from fastapi.responses import JSONResponse
import pandas as pd
import io
import numpy as np
from joblib import load

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:5173"],  # Adjust if frontend runs elsewhere
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Globals for dataset and model
df = None
sales_model = load("sales_model.joblib")  # Load your trained model
label_encoders = load("label_encoders.joblib")  # Load your label encoders

@app.post("/upload-dataset/")
async def upload_dataset(file: UploadFile = File(...)):
    global df
    if not file.filename.endswith(".csv"):
        raise HTTPException(status_code=400, detail="Only CSV files allowed")
    try:
        content = await file.read()
        df = pd.read_csv(io.StringIO(content.decode("utf-8")))
    except Exception as e:
        raise HTTPException(status_code=400, detail=f"Error reading CSV file: {str(e)}")

    if "Item Purchased" not in df.columns:
        df = None
        raise HTTPException(status_code=400, detail="'Item Purchased' column not found in dataset")

    return {"message": "Dataset uploaded successfully", "filename": file.filename}


@app.get("/dataset-status")
async def dataset_status():
    return {"dataset_loaded": df is not None}

@app.get("/predict-all")
async def predict_all():
    global df
    if df is None:
        raise HTTPException(status_code=400, detail="No dataset uploaded")

    try:
        important_features = ["Category", "Location", "Season", "Previous Purchases", "Frequency of Purchases", "Purchase Amount (USD)"]
        input_df = df[important_features].copy()

        # Explicitly cast known numeric columns to float
        numeric_columns = ["Previous Purchases", "Frequency of Purchases","Purchase Amount (USD)"]
        for col in numeric_columns:
            input_df[col] = pd.to_numeric(input_df[col], errors="coerce")

        # Label encode categorical columns
        for col in input_df.select_dtypes(include=["object"]).columns:
            if col in label_encoders:
                le = label_encoders[col]
                known_classes = set(le.classes_)
                current_classes = set(input_df[col].unique())
                if not current_classes.issubset(known_classes):
                    input_df[col] = input_df[col].apply(lambda x: x if x in known_classes else "__unknown__")
                    if "__unknown__" not in le.classes_:
                        le.classes_ = np.append(le.classes_, "__unknown__")
                input_df[col] = le.transform(input_df[col])
            else:
                raise HTTPException(status_code=400, detail=f"Missing label encoder for {col}")

        # Convert to numpy array for prediction
        input_array = input_df.values if hasattr(input_df, "values") else np.array(input_df)

        predictions = sales_model.predict(input_array)
        df["Predicted Amount"] = predictions

        result = df[important_features + ["Predicted Amount"]].to_dict(orient="records")
        return JSONResponse(content=result)

    except Exception as e:
        raise HTTPException(status_code=500, detail=f"Prediction error: {str(e)}")


# Group by Category
@app.get("/predicted-sales-by-category")
async def predicted_by_category():
    global df
    if df is None or "Predicted Amount" not in df.columns:
        raise HTTPException(status_code=400, detail="Predictions not available")
    grouped = df.groupby("Category")["Predicted Amount"].sum().sort_values(ascending=False)
    return {"predicted_by_category": grouped.to_dict()}

#Group by Location (Region)
@app.get("/predicted-sales-by-location")
async def predicted_by_location():
    global df
    if df is None or "Predicted Amount" not in df.columns:
        raise HTTPException(status_code=400, detail="Predictions not available")
    grouped = df.groupby("Location")["Predicted Amount"].sum().sort_values(ascending=False)
    return {"predicted_by_location": grouped.to_dict()}

# Group by Season
@app.get("/predicted-sales-by-season")
async def predicted_by_season():
    global df
    if df is None or "Predicted Amount" not in df.columns:
        raise HTTPException(status_code=400, detail="Predictions not available")
    grouped = df.groupby("Season")["Predicted Amount"].sum().sort_values(ascending=False)
    return {"predicted_by_season": grouped.to_dict()}



@app.get("/top-selling-items")
async def top_selling_items():
    global df
    if df is None or "Item Purchased" not in df.columns:
        raise HTTPException(status_code=400, detail="Dataset not available")
    top_items = df["Item Purchased"].value_counts().head(10)
    return {"top_selling_items": top_items.to_dict()}

@app.get("/predicted-sales-by-category")
async def predicted_by_category():
    global df
    if df is None or "Predicted Amount" not in df.columns:
        raise HTTPException(status_code=400, detail="Predictions not available")
    grouped = df.groupby("Category")["Predicted Amount"].sum().sort_values(ascending=False)
    return {"predicted_by_category": grouped.to_dict()}

@app.get("/predicted-sales-by-location")
async def predicted_by_location():
    global df
    if df is None or "Predicted Amount" not in df.columns:
        raise HTTPException(status_code=400, detail="Predictions not available")
    grouped = df.groupby("Location")["Predicted Amount"].sum().sort_values(ascending=False)
    return {"predicted_by_location": grouped.to_dict()}

@app.get("/predicted-sales-by-season")
async def predicted_by_season():
    global df
    if df is None or "Predicted Amount" not in df.columns:
        raise HTTPException(status_code=400, detail="Predictions not available")
    grouped = df.groupby("Season")["Predicted Amount"].sum().sort_values(ascending=False)
    return {"predicted_by_season": grouped.to_dict()}

@app.get("/predicted-sales-by-frequency")
async def predicted_by_frequency():
    global df
    if df is None or "Predicted Amount" not in df.columns:
        raise HTTPException(status_code=400, detail="Predictions not available")
    grouped = df.groupby("Frequency of Purchases")["Predicted Amount"].sum().sort_values(ascending=False)
    return {"predicted_by_frequency": grouped.to_dict()}

@app.get("/sales-summary")
async def sales_summary():
    global df
    if df is None or "Predicted Amount" not in df.columns:
        raise HTTPException(status_code=400, detail="Predictions not available")

    total_sales = df["Predicted Amount"].sum()
    top_item = df["Item Purchased"].value_counts().idxmax()
    top_region = df.groupby("Location")["Predicted Amount"].sum().idxmax()
    best_season = df.groupby("Season")["Predicted Amount"].sum().idxmax()

    return {
        "total_predicted_sales": round(total_sales, 2),
        "top_item": top_item,
        "top_region": top_region,
        "best_season": best_season
    }
