import React from "react";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import "./index.css";
import App from "./App.jsx";
import Layout from "./Layout.jsx";
import Home from "./pages/Home.jsx";


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/home' element={<Layout />}>
       <Route path="/home" element={<Home />}/>
       
    </Route>
  )
)

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
);
