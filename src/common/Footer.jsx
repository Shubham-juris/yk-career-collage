
import React from "react";
import { useChat } from "../usecontext/ChatContext";
import logo from "../assets/logo/logo.png";

const Footer = () => {
  const { setOpen } = useChat();

  return (
    <>
      <footer className="bg-white border-t">
        <div className="max-w-7xl mx-auto px-4 py-6 flex flex-col md:flex-row items-center md:items-start justify-between gap-6">
          
          {/* Logo + Social */}
          <div className="flex flex-col items-center md:items-start gap-3 text-center md:text-left">
            
            <div className="flex items-center gap-3">
              <img
                src={logo}
                alt="Career College Logo"
                className="w-12 h-12 rounded"
              />

              <div>
                <h3 className="text-lg font-bold text-gray-800">
                 YK Career College
                </h3>
                <p className="text-sm text-gray-600">Learn. Grow. Succeed.</p>
              </div>
            </div>

            {/* Social Icons */}
            <div className="flex gap-4 mt-2">

              {/* Facebook */}
              <a
                href="https://www.facebook.com/theykcareereducationsociety"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-blue-600 transition transform hover:scale-110"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M22 12a10 10 0 1 0-11.5 9.9v-7h-2.8V12h2.8V9.8c0-2.8 1.7-4.3 4.2-4.3 1.2 0 2.4.2 2.4.2v2.7h-1.4c-1.4 0-1.8.9-1.8 1.7V12h3l-.5 2.9h-2.5v7A10 10 0 0 0 22 12z"/>
                </svg>
              </a>

              {/* Instagram */}
              <a
                href="https://www.instagram.com/theykcareercollege/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-pink-600 transition transform hover:scale-110"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M7 2C4.2 2 2 4.2 2 7v10c0 2.8 2.2 5 5 5h10c2.8 
                  0 5-2.2 5-5V7c0-2.8-2.2-5-5-5H7zm10 2c1.7 
                  0 3 1.3 3 3v10c0 1.7-1.3 3-3 
                  3H7c-1.7 0-3-1.3-3-3V7c0-1.7 
                  1.3-3 3-3h10zm-5 3.5A4.5 4.5 0 1 
                  0 16.5 12 4.5 4.5 0 0 0 12 
                  7.5zm0 7.2A2.7 2.7 0 1 1 
                  14.7 12 2.7 2.7 0 0 1 12 
                  14.7zM17.8 6.2a1.1 1.1 0 1 
                  0 1.1 1.1 1.1 1.1 0 0 
                  0-1.1-1.1z"/>
                </svg>
              </a>

              {/* Twitter X */}
              <a
                href="https://x.com/ykcollege"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-black transition transform hover:scale-110"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M18.9 2H21l-6.6 7.5L22 22h-6.9l-5.4-7.1L3.8 
                  22H1.7l7.1-8.1L2 2h7l4.9 
                  6.5L18.9 2zm-2.4 18h1.9L7.6 
                  4H5.6l10.9 16z"/>
                </svg>
              </a>

            </div>
          </div>

          {/* Address */}
          <div className="text-sm text-gray-700 text-center md:text-right">
            <p className="font-semibold">YK Career College</p>
            <p>215-213 Main Street, Slave Lake AB, T0G 2A2</p>
            <p>311 32 WESTWINDS CRES NE, #110, CALGARY, Alberta, T3J5L3</p>
          </div>
        </div>
      </footer>

      <div className="bg-white border-t text-center py-3 text-xs md:text-sm text-gray-600">
        © {new Date().getFullYear()} Career College. All rights reserved
      </div>

      {/* Bottom Admission Bar */}
      <div className="fixed bottom-0 left-0 w-full z-50 bg-blue-200 border-t">
        <div className="max-w-7xl mx-auto px-3 py-2 flex flex-col md:flex-row items-center justify-between gap-2">
          <p className="text-xs md:text-base text-blue-900 text-center">
            Admissions are open for <span className="font-bold">26 Session</span>. Enroll today!
          </p>

          <button
            onClick={() => setOpen(true)}
            className="bg-blue-600 text-white px-4 py-2 text-xs md:text-sm rounded-full shadow-lg w-full md:w-auto"
          >
            Chat Now
          </button>
        </div>
      </div>
    </>
  );
};

export default Footer;
