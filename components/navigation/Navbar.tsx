import React from "react";
import { FiArrowRight } from "react-icons/fi";

const Navbar = () => {
  return (
    <nav className="py-3 bg-transparent backdrop-blur-md sm:py-3 ml-0 mr-0 px-16 fixed top-0 left-0 right-0 z-50">
      <div className="px-0 sm:px-0 lg:px-0">
        <div className="flex items-center justify-between">
          <div className="shrink-0">
            <a href="#" title="" className="flex">
              <img className="w-auto h-9" src="/logo.png" alt="Logo" />
            </a>
          </div>

          <nav className="hidden space-x-10 md:flex md:items-center md:justify-center lg:space-x-12">
            <a
              href="#"
              title=""
              className="text-sm flex items-center justify-center font-semibold text-gray-300 transition-all duration-200 hover:text-white group relative"
            >
              Alerts & Events
              <svg
                className="w-auto h-5 transition-transform duration-900 transform group-hover:rotate-180 text-gray-300 stroke-current group-hover:text-white"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#d1d5db"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M8 10L12 14L16 10" />
              </svg>
            </a>

            <a
              href="#"
              title=""
              className="text-sm flex items-center justify-center font-semibold text-gray-300 transition-all duration-200 hover:text-white group relative"
            >
              Space Weather Data
              <svg
                className="w-auto h-5 transition-transform duration-900 transform group-hover:rotate-180 text-gray-300 stroke-current group-hover:text-white"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#d1d5db"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M8 10L12 14L16 10" />
              </svg>
            </a>

            <a
              href="#"
              title=""
              className="text-sm font-semibold text-gray-300 transition-all duration-200 hover:text-white"
            >
              Development Team
            </a>

            <a
              href="#"
              title=""
              className="text-sm font-semibold text-gray-300 transition-all duration-200 hover:text-white"
            >
              About
            </a>
          </nav>

          <div className="relative hidden md:justify-center md:items-center md:inline-flex group">
            <a
              href="#"
              title=""
              className="relative inline-flex items-center justify-center px-6 py-2.5 text-sm font-semibold text-white bg-transparent rounded-full"
              role="button"
            >
              Connect with us{" "}
              <FiArrowRight className="ml-2 transition-transform group-hover:-rotate-45 group-active:-rotate-12" />
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
