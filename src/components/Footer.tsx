


import React from "react";
import { FaFacebookF, FaTwitter, FaInstagram, FaYoutube } from "react-icons/fa";

const Footer: React.FC = () => {
  return (
    <footer className="bg-blue-500 text-white py-10">
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Left - Branding */}
        <div>
          <h2 className="text-2xl font-bold">Anti-Doping Initiative</h2>
          <p className="mt-3 text-slate-200">
            Promoting fair play and ethical sportsmanship through education and enforcement.
          </p>
        </div>

        {/* Center - Quick Links */}
        <div>
          <h3 className="text-xl font-semibold">Quick Links</h3>
          <ul className="mt-3 space-y-2">
            <li>
              <a href="#" className="hover:text-gray-400 transition">
                About Us
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-400 transition">
                Doping Regulations
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-400 transition">
                Report a Violation
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-400 transition">
                Contact Us
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-xl font-semibold">Follow Us</h3>
          <div className="mt-3 flex space-x-4">
            <a href="#" className="p-2 rounded-full bg-gray-800 hover:bg-gray-700 transition">
              <FaFacebookF className="text-white" />
            </a>
            <a href="#" className="p-2 rounded-full bg-gray-800 hover:bg-gray-700 transition">
              <FaTwitter className="text-white" />
            </a>
            <a href="#" className="p-2 rounded-full bg-gray-800 hover:bg-gray-700 transition">
              <FaInstagram className="text-white" />
            </a>
            <a href="#" className="p-2 rounded-full bg-gray-800 hover:bg-gray-700 transition">
              <FaYoutube className="text-white" />
            </a>
          </div>
        </div>
      </div>

      <div className="mt-10 text-center text-slate-200">
        © {new Date().getFullYear()} Anti-Doping Initiative. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;

