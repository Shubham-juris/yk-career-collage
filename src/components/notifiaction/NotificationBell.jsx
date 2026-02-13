import React, { useState } from "react";
import { Bell } from "lucide-react"; 

export default function NotificationBell() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <div className="fixed left-4 bottom-24 z-50">
        <button
          onClick={() => setOpen(!open)}
          className="bg-white shadow-lg rounded-full p-3 hover:bg-gray-100 transition"
        >
          <Bell className="text-blue-700" size={24} />
        </button>
      </div>

      {/* Popup */}
      {open && (
        <div className="fixed left-20 bottom-24 z-50">
          <div className="bg-white shadow-xl rounded-xl p-4 w-64 relative">
            {/* Arrow */}
            <div className="absolute left-[-10px] top-1/2 -translate-y-1/2 w-0 h-0 border-t-8 border-b-8 border-r-8 border-t-transparent border-b-transparent border-r-white"></div>

            <div className="flex items-start gap-3">
              <div className="bg-white p-2 rounded-full">
                <Bell className="text-blue-700" size={18} />
              </div>
              <p className="text-sm text-gray-800 font-medium">
                <span className="text-red-600 font-semibold">
                  Get upto 25% early-bird scholarship!
                </span>{" "}
                Valid till 27th Feb!
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
