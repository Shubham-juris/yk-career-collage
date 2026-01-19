import React from "react";
import { useChat } from "../usecontext/ChatContext";

const Footer = () => {

  const { setOpen } = useChat();

  return (
    <>
      {/* ===== Main Footer Bar ===== */}
      <footer className="bg-white border-t">
        <div className="max-w-7xl mx-auto px-6 py-6 flex flex-col md:flex-row items-center justify-between gap-4">
          {/* Left: Logo */}
          <div className="flex items-center gap-3">
            <div className="w-14 h-14 bg-blue-600 text-white flex items-center justify-center font-bold text-xl">
              YK
            </div>
            <div>
              <h3 className="text-xl font-bold text-gray-800">
                Career College
              </h3>
              <p className="text-sm text-gray-600">Learn. Grow. Succeed.</p>
            </div>
          </div>

          {/* Right: Address */}
          <div className="text-sm text-gray-700 text-center md:text-right">
            <p className="font-semibold"> YK Career College</p>
            <p>Address: xyz</p>
            <p>yk (xyz)</p>
          </div>
        </div>
      </footer>

      {/* ===== Copyright Bar ===== */}
      <div className="bg-white border-t text-center py-3 text-sm text-gray-600">
        © {new Date().getFullYear()} Career College. All rights reserved
      </div>

      {/* ===== Admissions Running Bar ===== */}
      <div className="fixed bottom-0 left-0 w-full z-50">
        <div className="bg-blue-200 flex items-center justify-center py-3 text-sm md:text-base font-medium text-blue-900">
          Admissions are open for{" "}
          <span className="mx-1 font-bold">Jan’26 Session</span>. Enroll today!
        </div>

        {/* Right Button */}
        <div className="absolute right-4 bottom-2">
          <button
            onClick={() => setOpen(true)}
            className="bg-blue-600 text-white px-5 py-2 rounded-full shadow-lg"
          >
            Admissions are open – Chat Now
          </button>
        </div>
      </div>
    </>
  );
};

export default Footer;
