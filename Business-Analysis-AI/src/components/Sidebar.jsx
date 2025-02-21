import React from "react";
import { Link } from "react-router-dom";

function Sidebar() {
    return (
        <div className="sidebar">
        <h2>Sidebar</h2>
        
        <div className="w-64 bg-gray-900 text-white flex flex-col p-4 h-screen">
      {/* Logo */}
      <div className="flex items-center mb-8">
        <span className="text-xl font-semibold">🌊 Logo</span>
      </div>

      {/* Navigation Links */}
      <nav className="flex-1">
        <ul>
          <li className="mb-2">
            <Link to="/" className="flex items-center p-2 hover:bg-gray-700 rounded">
              🏠 Dashboard
            </Link>
          </li>
          <li className="mb-2">
            <Link to="/team" className="flex items-center p-2 hover:bg-gray-700 rounded">
              👥 Team
            </Link>
          </li>
          <li className="mb-2">
            <Link to="/projects" className="flex items-center p-2 hover:bg-gray-700 rounded">
              📁 Projects
            </Link>
          </li>
          <li className="mb-2">
            <Link to="/calendar" className="flex items-center p-2 hover:bg-gray-700 rounded">
              📅 Calendar
            </Link>
          </li>
          <li className="mb-2">
            <Link to="/documents" className="flex items-center p-2 hover:bg-gray-700 rounded">
              📄 Documents
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
        </div>
    );}

    export default Sidebar;