"use client"; // Add this at the top for client-side rendering
import React, { use } from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";
import { Search } from "lucide-react";
import { MdLocationPin, MdLocalPhone } from "react-icons/md";
import { IoIosMail } from "react-icons/io";

const Footer = () => {
  return (
    <footer className="bg-gray-50 py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          {/* Left Section: Logo and Address */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <img
                src="https://curelogics.org/wp-content/uploads/2024/08/Full-Logo-2-1.svg"
                alt=""
              />
            </div>
            <p className="text-sm text-gray-600 mb-4">
              Stay connected with Upward for the latest updates and
              innovations in digital solutions.
            </p>
            <p className="text-sm text-gray-600 flex gap-2">
              <MdLocationPin size={25} /> South Africa
            </p>
            <p className="text-sm text-gray-600 flex gap-2">
              <MdLocalPhone /> +27 79 669 9507
            </p>
            <p className="text-sm text-gray-600 flex gap-2">
              <IoIosMail /> hr@upward.org
            </p>
            <div className="flex space-x-4 mt-4">
              <div className="w-10 h-10 hover:w-[38px] hover:h-[38px] rounded-full bg-[#2C5194] hover:bg-[#2c50946c] flex items-center justify-center transition-all divide-purple-200 ">
                <a href="#" className="text-white ">
                  <FaFacebookF />
                </a>
              </div>
              <div className="w-10 h-10 hover:w-[38px] hover:h-[38px] rounded-full bg-[#2C5194] hover:bg-[#2c50946c] flex items-center justify-center transition-all divide-purple-200 ">
                <a href="#" className="text-white ">
                  <FaTwitter />
                </a>
              </div>
              <div className="w-10 h-10 hover:w-[38px] hover:h-[38px] rounded-full bg-[#2C5194] hover:bg-[#2c50946c] flex items-center justify-center transition-all divide-purple-200 ">
                <a href="#" className="text-white ">
                  <FaInstagram />
                </a>
              </div>
              <div className="w-10 h-10 hover:w-[38px] hover:h-[38px] rounded-full bg-[#2C5194] hover:bg-[#2c50946c] flex items-center justify-center transition-all divide-purple-200 ">
                <a href="#" className="text-white ">
                  <FaLinkedinIn />
                </a>
              </div>
            </div>
          </div>

          {/* Explore Links */}
          <div className="hidden md:block">
            <h3 className="text-lg font-semibold text-gray-800 mb-4">
              Explore
            </h3>
            <ul className="space-y-2 text-sm text-gray-600">
              <li>
                <a href="#" className="hover:underline">
                  Home
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  About
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Services
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Projects
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Careers
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Testimonials
                </a>
              </li>
            </ul>
          </div>

          {/* Services Links */}
          <div className="hidden md:block">
            <h3 className="text-lg font-semibold text-gray-800 mb-4">
              Services
            </h3>
            <ul className="space-y-2 text-sm text-gray-600">
              <li>
                <a href="#" className="hover:underline">
                  Software Development
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Digital Marketing
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Graphic Designing
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  UX/UI Designing
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  App Development
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Website Development
                </a>
              </li>
            </ul>
          </div>

          {/* Subscribe Section */}
          <div>
            <h3 className="text-lg font-semibold text-gray-800 mb-4">
              Subscribe
            </h3>
            <p className="text-sm text-gray-600 mb-4">
              Subscribe to get the latest digital updates from us.
            </p>
            <form className="space-y-4">
              <div className="relative bg-gradient-to-r to-red-500 from-blue-500 rounded-full p-[1px]">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full p-2 border-2 border-gray-200 rounded-full bg-white outline-none "
                />
                <Search
                  className="absolute right-3 top-1/2 transform  -translate-y-1/2 text-gray-500 cursor-pointer"
                  size={20}
                />
              </div>
            </form>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="border-t border-gray-200 mt-10 pt-6 text-center">
          <p className="text-sm text-gray-600">
            &copy; {new Date().getFullYear()} Upward. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
