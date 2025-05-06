import React from "react";
import { FaInstagram, FaGithub, FaLinkedin, FaXTwitter } from "react-icons/fa6";
import { LOGO_URL } from "../utils/constants";

export default function Footer() {
  return (
    <footer className="bg-gray-100 text-gray-800 px-6 py-10">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between gap-10">
        {/* Left Section */}
        <div className="flex flex-col items-center md:items-start">
          <img
            className="w-14 sm:w-20 md:w-24 rounded-lg mb-2"
            src={LOGO_URL}
            alt="Logo"
          />
          <h2 className="text-xl font-semibold mb-3">Foody Hub</h2>
          <div className="flex gap-4 text-2xl">
            <FaInstagram />
            <FaGithub />
            <FaLinkedin />
            <FaXTwitter />
          </div>
        </div>

        {/* Middle Sections */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 text-sm md:text-lg">
          <div>
            <h3 className="font-semibold mb-2">Company</h3>
            <ul className="space-y-1">
              <li>About</li>
              <li>Careers</li>
              <li>Team</li>
              <li>Foody Instamart</li>
              <li>Foody One</li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-2">Contact Us</h3>
            <ul className="space-y-1">
              <li>Help & Support</li>
              <li>Partner with us</li>
              <li>Ride with us</li>
              <li>Privacy Policy</li>
              <li>Cookies</li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-2">We deliver to:</h3>
            <ul className="space-y-1">
              <li>Bangalore</li>
              <li>Pune</li>
              <li>Gurgaon</li>
              <li>Hyderabad</li>
              <li>Delhi</li>
              <li>Mumbai</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="border-t border-gray-700 mt-10 pt-4 text-center text-lg text-gray-400">
        © 2023 All Rights Reserved Shweta Kawar
      </div>
    </footer>
  );
}
