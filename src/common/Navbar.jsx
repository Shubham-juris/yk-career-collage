import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { Menu, X } from "lucide-react";
import TopBar from "./Topbar";

const Navbar = () => {
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);

  const linkClass = ({ isActive }) =>
    isActive
      ? "text-blue-600 font-semibold"
      : "text-gray-700 hover:text-blue-600 transition";

  return (
    <>
      <TopBar />

      <header className="bg-white shadow sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
          {/* Logo */}
          <NavLink to="/" className="flex items-center gap-2">
            <div className="w-10 h-10 bg-blue-600 text-white flex items-center justify-center font-bold rounded">
              YK
            </div>
            <span className="font-bold text-lg text-gray-800">
              Career College
            </span>
          </NavLink>

          {/* Desktop Menu */}
          <nav className="hidden md:flex gap-6 items-center font-medium">
             <NavLink to="/" className={linkClass}>
              Home
            </NavLink>
            <NavLink to="/programs" className={linkClass}>
              Programs
            </NavLink>
            <NavLink to="/courses" className={linkClass}>
              Courses
            </NavLink>
            <NavLink to="/admission" className={linkClass}>
              Admissions
            </NavLink>
            <NavLink to="/support" className={linkClass}>
              Support
            </NavLink>

            <button
              onClick={() => navigate("/login")}
              className="ml-6 bg-blue-600 text-white px-5 py-2 rounded hover:bg-blue-700 transition"
            >
              Student Login
            </button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-gray-700"
            onClick={() => setOpen(!open)}
          >
            {open ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {open && (
          <div className="md:hidden bg-white border-t shadow-lg">
            <nav className="flex flex-col p-4 gap-4 font-medium">
               <NavLink
                to="/"
                className={linkClass}
                onClick={() => setOpen(false)}
              >
                Home
              </NavLink>
              <NavLink
                to="/programs"
                className={linkClass}
                onClick={() => setOpen(false)}
              >
                Programs
              </NavLink>
              <NavLink
                to="/courses"
                className={linkClass}
                onClick={() => setOpen(false)}
              >
                Courses
              </NavLink>
              <NavLink
                to="/admission"
                className={linkClass}
                onClick={() => setOpen(false)}
              >
                Admissions
              </NavLink>
              <NavLink
                to="/support"
                className={linkClass}
                onClick={() => setOpen(false)}
              >
                Support
              </NavLink>

              <button
                onClick={() => {
                  navigate("/login");
                  setOpen(false);
                }}
                className="mt-3 bg-blue-600 text-white py-2 rounded hover:bg-blue-700"
              >
                Student Login
              </button>
            </nav>
          </div>
        )}
      </header>
    </>
  );
};

export default Navbar;
