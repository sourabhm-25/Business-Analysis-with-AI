import React from "react";
import Footer from "./components/Footer";

const App = () => {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Main Content */}
      <div className="flex-grow">
        {/* Your page content here */}
        <h1 className="text-center text-2xl font-bold mt-10">Welcome to My App</h1>
      </div>

      {/* Footer Stays at Bottom */}
      <Footer />
    </div>
  );
};

export default App;
