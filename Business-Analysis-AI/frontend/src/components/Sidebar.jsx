import React from "react";
import { Link } from "react-router-dom";

function Sidebar() {
  return (
    <div className="w-64 h-screen fixed top-0 left-0 bg-gray-900 text-white flex flex-col p-4">
      {/* Logo */}
      <div className="flex items-center mb-8">
        <span className="text-xl font-semibold">🌊 Logo</span>
      </div>

      {/* Navigation Links */}
      <nav className="flex-1">
        <ul>
          <li className="mb-2">
            <Link to="/home" className="flex items-center p-2 hover:bg-gray-700 rounded">
              🏠 Home                            
            </Link>
          </li>
          <li className="mb-2">
            <Link to="/dashboard" className="flex items-center p-2 hover:bg-gray-700 rounded">
              👥 DashBoard
            </Link>
          </li>
          <li className="mb-2">
            <Link to="/uploaddata" className="flex items-center p-2 hover:bg-gray-700 rounded">
              📁 UploadData
            </Link>
          </li>
          <li className="mb-2">
            <Link to="/Predictions" className="flex items-center p-2 hover:bg-gray-700 rounded">
              📅 Predictions
            </Link>
          </li>
          <li className="mb-2">
            <Link to="/aboutus" className="flex items-center p-2 hover:bg-gray-700 rounded">
              📄 AboutUs
            </Link>
          </li>
          <li className="mb-2">
            <Link to="/reports" className="flex items-center p-2 hover:bg-gray-700 rounded">
              📊 Reports
            </Link>
          </li>
        </ul>
      </nav>

      {/* Teams Section */}
      <div className="mt-auto">
        <p className="text-sm text-gray-400">Your Teams</p>
        <ul className="mt-2">
          <li className="text-gray-300 p-2 hover:bg-gray-700 rounded">🏆 Heroicons</li>
          <li className="text-gray-300 p-2 hover:bg-gray-700 rounded">🌀 Tailwind Labs</li>
          <li className="text-gray-300 p-2 hover:bg-gray-700 rounded">🌍 Workcation</li>
        </ul>
        <div className="mt-4">
          <Link to="/settings" className="text-gray-400 hover:text-white">
            ⚙️ Settings
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
