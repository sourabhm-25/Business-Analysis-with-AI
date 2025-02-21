import React from "react";
import { Link } from "react-router-dom";
import { FaFacebook, FaInstagram, FaXTwitter, FaGithub, FaYoutube } from "react-icons/fa6";

function Footer(){
    return (
        <footer className="bg-gray-900 text-gray-400 py-8">
          <div className="container mx-auto text-center">
            <nav className="mb-4 flex justify-center space-x-6">
              <Link to="/about" className="hover:text-white">About</Link>
              <Link to="/blog" className="hover:text-white">Blog</Link>
              <Link to="/jobs" className="hover:text-white">Jobs</Link>
              <Link to="/press" className="hover:text-white">Press</Link>
              <Link to="/accessibility" className="hover:text-white">Accessibility</Link>
              <Link to="/partners" className="hover:text-white">Partners</Link>
            </nav>
            
            <div className="flex justify-center space-x-6 text-xl mb-4">
              <a href="https://facebook.com" className="hover:text-white"><FaFacebook /></a>
              <a href="https://instagram.com" className="hover:text-white"><FaInstagram /></a>
              <a href="https://twitter.com" className="hover:text-white"><FaXTwitter /></a>
              <a href="https://github.com" className="hover:text-white"><FaGithub /></a>
              <a href="https://youtube.com" className="hover:text-white"><FaYoutube /></a>
            </div>
    
            <p className="text-sm">&copy; 2024 Your Company, Inc. All rights reserved.</p>
          </div>
        </footer>
      );
}

export default Footer;
