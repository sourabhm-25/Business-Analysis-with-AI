import React from "react";
import { Outlet, useLocation } from "react-router-dom";
import Footer from "./components/Footer";
import Sidebar from "./components/Sidebar";

const Layout = () => {
  const location = useLocation();
  const showFooter = location.pathname === "/"; // Show footer only on the home page

  return (
    <div className="flex">
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content Wrapper */}
      <div className="flex flex-col flex-1 ml-64 min-h-screen">
        <main className="flex-1 p-4">
          <Outlet />
        </main>

        {/* Footer (Only on Home Page) */}
        {showFooter && (
          <div className="mt-auto">
            <Footer />
          </div>
        )}
      </div>
    </div>
  );
};


export default Layout;
