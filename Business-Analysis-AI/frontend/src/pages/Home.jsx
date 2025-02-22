import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, Phone, BarChart3, FileText, Activity } from "lucide-react";


function Home() {
  return (
    <div className="p-6">
      {/* Hero Section */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="bg-blue-600 text-white text-center py-20 rounded-2xl shadow-lg"
      >
        <h1 className="text-4xl font-bold mb-4">Data-Driven Insights for Smarter Decisions</h1>
        <p className="text-lg">Unlock business potential with powerful analytics and reporting.</p>
        <motion.button
          whileHover={{ scale: 1.1 }}
          className="mt-6 px-6 py-3 bg-white text-blue-600 font-semibold rounded-full shadow-md flex items-center gap-2 mx-auto hover:bg-gray-200 transition"
        >
          Get Started <ArrowRight size={20} />
        </motion.button>
      </motion.div>

      {/* Key Features Section */}
      <div className="mt-12">
        <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">Key Features</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            { title: "Interactive Dashboards", icon: <BarChart3 size={32} />, desc: "Visualize business trends and performance." },
            { title: "Report Generation", icon: <FileText size={32} />, desc: "Generate detailed financial & operational reports." },
            { title: "Predictive Analytics", icon: <Activity size={32} />, desc: "Forecast future business outcomes using AI." }
          ].map((feature, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05 }}
              className="p-6 bg-white shadow-md rounded-lg text-center cursor-pointer"
            >
              <div className="flex justify-center mb-3 text-blue-600">{feature.icon}</div>
              <h3 className="text-xl font-semibold text-blue-600">{feature.title}</h3>
              <p className="text-gray-600 mt-2">{feature.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Recent Reports Section */}
      <div className="mt-12">
        <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">Recent Reports</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {["Market Trends Analysis", "Customer Behavior Insights"].map((title, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.03 }}
              className="p-6 bg-gray-100 shadow-md rounded-lg cursor-pointer"
            >
              <h3 className="text-lg font-semibold text-blue-600">{title}</h3>
              <p className="text-gray-700 mt-2">
                {title === "Market Trends Analysis"
                  ? "Latest insights into market dynamics."
                  : "Analyze buying patterns and preferences."}
              </p>
              <motion.button
                whileHover={{ x: 5 }}
                className="mt-4 text-blue-600 flex items-center gap-1 hover:underline"
              >
                Read More <ArrowRight size={16} />
              </motion.button>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Contact Section */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="mt-12 bg-blue-100 p-6 rounded-lg text-center"
      >
        <h2 className="text-2xl font-bold text-gray-800">Get in Touch</h2>
        <p className="text-gray-700 mt-2">Have questions? Reach out to our team.</p>
        <motion.button
          whileHover={{ scale: 1.1 }}
          className="mt-4 px-6 py-3 bg-blue-600 text-white font-semibold rounded-full shadow-md flex items-center gap-2 mx-auto hover:bg-blue-700 transition"
        >
          <Phone size={20} /> Contact Us
        </motion.button>
      </motion.div>
    </div>
  );
}

export default Home;
