import React from "react";
import { useNavigate } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";

const Login = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen w-full bg-gray-100 flex items-center justify-center relative">

      {/* 🔙 Back Button */}
      <button
        onClick={() => navigate(-1)}
        className="absolute top-5 left-5 text-2xl text-gray-700 hover:text-blue-700"
        aria-label="Go back"
      >
        ←
      </button>

      {/* Login Card */}
      <div className="w-full max-w-md px-4">
        <div className="bg-white shadow-xl rounded-lg p-8">

          {/* Heading */}
          <div className="text-center mb-6">
            <h2 className="text-3xl font-bold text-gray-800">
              Career College <span className="text-blue-700">Login</span>
            </h2>
            <p className="text-gray-600 mt-2">
              Login to access your dashboard
            </p>
          </div>

          {/* ✅ Continue with Google */}
          <button
            type="button"
            className="
              w-full border border-gray-300
              flex items-center justify-center gap-3
              py-3 rounded font-semibold
              hover:bg-gray-100 transition
              mb-6
            "
          >
            <FcGoogle className="text-xl" />
            Continue with Google
          </button>

          {/* OR line */}
          <div className="flex items-center gap-3 mb-6">
            <div className="flex-1 h-px bg-gray-300"></div>
            <span className="text-sm text-gray-500">OR</span>
            <div className="flex-1 h-px bg-gray-300"></div>
          </div>

          {/* Login Form */}
          <form className="space-y-6">

            {/* Email */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Email Address
              </label>
              <input
                type="email"
                placeholder="you@example.com"
                className="w-full border border-gray-300 rounded px-4 py-2 focus:ring-2 focus:ring-blue-600 outline-none"
              />
            </div>

            {/* Password */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Password
              </label>
              <input
                type="password"
                placeholder="********"
                className="w-full border border-gray-300 rounded px-4 py-2 focus:ring-2 focus:ring-blue-600 outline-none"
              />
            </div>

            {/* Remember + Forgot */}
            <div className="flex items-center justify-between text-sm">
              <label className="flex items-center gap-2">
                <input type="checkbox" className="accent-blue-600" />
                Remember me
              </label>

              <button
                type="button"
                className="text-blue-700 hover:underline"
              >
                Forgot password?
              </button>
            </div>

            {/* Submit */}
            <button
              type="submit"
              className="w-full bg-blue-700 text-white py-3 rounded font-semibold hover:bg-blue-800 transition"
            >
              Login
            </button>

          </form>

          {/* Register Link */}
          <p className="text-center text-sm text-gray-600 mt-6">
            Don’t have an account?{" "}
            <button
              onClick={() => navigate("/register")}
              className="text-blue-700 font-semibold hover:underline"
            >
              Register Now
            </button>
          </p>

        </div>
      </div>
    </div>
  );
};

export default Login;
