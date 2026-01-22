import React from "react";
import { useChat } from "../usecontext/ChatContext";

const Footer = () => {
  const { setOpen } = useChat();

  return (
    <>
      {/* ===== Main Footer ===== */}
      <footer className="bg-white border-t">
        <div className="max-w-7xl mx-auto px-4 py-6 flex flex-col md:flex-row items-center md:items-start justify-between gap-6">
          
          {/* Logo Section */}
          <div className="flex items-center gap-3 text-center md:text-left">
            <div className="w-12 h-12 bg-blue-600 text-white flex items-center justify-center font-bold text-lg">
              YK
            </div>
            <div>
              <h3 className="text-lg font-bold text-gray-800">
                Career College
              </h3>
              <p className="text-sm text-gray-600">Learn. Grow. Succeed.</p>
            </div>
          </div>

          {/* Address */}
          <div className="text-sm text-gray-700 text-center md:text-right">
            <p className="font-semibold">YK Career College</p>
            <p>Address: xyz</p>
            <p>yk (xyz)</p>
          </div>
        </div>
      </footer>

      {/* ===== Copyright ===== */}
      <div className="bg-white border-t text-center py-3 text-xs md:text-sm text-gray-600">
        © {new Date().getFullYear()} Career College. All rights reserved
      </div>

      {/* ===== Bottom Admission Bar ===== */}
      <div className="fixed bottom-0 left-0 w-full z-50 bg-blue-200 border-t">
        <div className="max-w-7xl mx-auto px-3 py-2 flex flex-col md:flex-row items-center justify-between gap-2">

          {/* Text */}
          <p className="text-xs md:text-base text-blue-900 text-center">
            Admissions are open for{" "}
            <span className="font-bold">Jan’26 Session</span>. Enroll today!
          </p>

          {/* Button */}
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
