import React, { useState, useEffect, useRef } from "react";
import { Bell, X } from "lucide-react";

export default function NotificationBell() {
  const [open, setOpen] = useState(false);
  const popupRef = useRef();

  // Close on outside click
  useEffect(() => {
    function handleClickOutside(e) {
      if (popupRef.current && !popupRef.current.contains(e.target)) {
        setOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Close on ESC key
  useEffect(() => {
    function handleEsc(e) {
      if (e.key === "Escape") {
        setOpen(false);
      }
    }

    document.addEventListener("keydown", handleEsc);
    return () => document.removeEventListener("keydown", handleEsc);
  }, []);

  return (
    <>
      {/* Bell Button */}
      <div className="fixed left-4 bottom-24 z-50">
        <button
          onClick={() => setOpen(!open)}
          className="relative bg-white shadow-lg rounded-full p-3 hover:bg-gray-100 transition"
        >
          <Bell className="text-blue-700" size={24} />

          {/* Notification Dot */}
          <span className="absolute top-1 right-1 w-3 h-3 bg-red-500 rounded-full"></span>
        </button>
      </div>

      {/* Popup */}
      {open && (
        <div
          ref={popupRef}
          className="fixed left-20 bottom-24 z-50 animate-fadeIn"
        >
          <div className="bg-white shadow-xl rounded-xl p-4 w-64 relative">

            {/* Close Button */}
            <button
              onClick={() => setOpen(false)}
              className="absolute right-2 top-2 text-gray-400 hover:text-gray-600"
            >
              <X size={16} />
            </button>

            {/* Arrow */}
            <div className="absolute left-[-10px] top-1/2 -translate-y-1/2 w-0 h-0 border-t-8 border-b-8 border-r-8 border-t-transparent border-b-transparent border-r-white"></div>

            <div className="flex items-start gap-3">
              <div className="bg-gray-100 p-2 rounded-full">
                <Bell className="text-blue-700" size={18} />
              </div>

              <p className="text-sm text-gray-800 font-medium">
                <span className="text-red-600 font-semibold">
                  Get upto 25% early-bird scholarship!
                </span>{" "}
                Valid till 31 March!
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
}