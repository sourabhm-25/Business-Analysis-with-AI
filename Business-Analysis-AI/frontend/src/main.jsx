import React from "react";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider, Navigate } from 'react-router-dom';
import "./index.css";
import Layout from "./Layout.jsx";
import Home from "./pages/Home.jsx";
import Dashboard from "./pages/DashBoard.jsx";
import UploadData from "./pages/UploadData.jsx";
import Prediction from "./pages/Prediction.jsx";


function initializeApp() {
  console.log("App is initializing..."); // You can replace this with any function
}

initializeApp(); // ✅ Call function in main.jsx

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout />}>
      {/* Redirect '/' to '/home' */}
      <Route index element={<Navigate to="/home" replace />} />
      <Route path='home' element={<Home />} />
      <Route path='upload-data' element={<UploadData />} /> {/* Add the UploadData route */}
      <Route path='dashboard' element={<Dashboard />} />
      <Route path='predictions' element={<Prediction />} />
      {/* Lazy load the Prediction component */}
    </Route>
  )
);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
