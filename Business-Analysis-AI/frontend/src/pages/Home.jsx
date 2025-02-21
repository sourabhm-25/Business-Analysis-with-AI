import React from "react";

function Home(){
    return (
        <div className="p-6">
          {/* Hero Section */}
          <div className="bg-blue-600 text-white text-center py-20 rounded-2xl shadow-lg">
            <h1 className="text-4xl font-bold mb-4">Data-Driven Insights for Smarter Decisions</h1>
            <p className="text-lg">Unlock business potential with powerful analytics and reporting.</p>
            <button className="mt-6 px-6 py-3 bg-white text-blue-600 font-semibold rounded-full shadow-md hover:bg-gray-200 transition">
              Get Start
            </button>
          </div>
    
          {/* Key Features Section */}
          <div className="mt-12">
            <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">Key Features</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                { title: "Interactive Dashboards", desc: "Visualize business trends and performance." },
                { title: "Report Generation", desc: "Generate detailed financial & operational reports." },
                { title: "Predictive Analytics", desc: "Forecast future business outcomes using AI." },
              ].map((feature, index) => (
                <div key={index} className="p-6 bg-white shadow-md rounded-lg text-center">
                  <h3 className="text-xl font-semibold text-blue-600">{feature.title}</h3>
                  <p className="text-gray-600 mt-2">{feature.desc}</p>
                </div>
              ))}
            </div>
          </div>
    
          {/* Recent Reports Section */}
          <div className="mt-12">
            <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">Recent Reports</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                { title: "Market Trends Analysis", desc: "Latest insights into market dynamics." },
                { title: "Customer Behavior Insights", desc: "Analyze buying patterns and preferences." },
              ].map((report, index) => (
                <div key={index} className="p-6 bg-gray-100 shadow-md rounded-lg">
                  <h3 className="text-lg font-semibold text-blue-600">{report.title}</h3>
                  <p className="text-gray-700 mt-2">{report.desc}</p>
                  <button className="mt-4 text-blue-600 hover:underline">Read More</button>
                </div>
              ))}
            </div>
          </div>
    
          {/* Contact Section */}
          <div className="mt-12 bg-blue-100 p-6 rounded-lg text-center">
            <h2 className="text-2xl font-bold text-gray-800">Get in Touch</h2>
            <p className="text-gray-700 mt-2">Have questions? Reach out to our team.</p>
            <button className="mt-4 px-6 py-3 bg-blue-600 text-white font-semibold rounded-full shadow-md hover:bg-blue-700 transition">
              Contact Us
            </button>
          </div>
        </div>
      );
}

export default Home