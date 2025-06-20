import React, { useState } from "react";
import FileUpload from "../components/fileUpload";
import TopSellingItems from "../components/topSellingItem.jsx";
import PredictionTable from "../components/predictionTable.jsx";





function UploadData() {
  const [dataUploaded, setDataUploaded] = useState(false);
  return (
    <>
      <div>
      
      <FileUpload onUploadSuccess={() => setDataUploaded(true)} />
      {dataUploaded && <PredictionTable />}
      <TopSellingItems />
      
      
    </div>
    </>
  );
}

export default UploadData;