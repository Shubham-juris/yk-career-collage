import React from "react";
import { Link } from "react-router-dom";

const RegistrationForm = () => {

  const courses = [
    "Sign Language Learning",
    "French Level A2",
    "Professional Photography – Beginner",
    "Event Planning – Basics",
    "Guitar Training – Basics",
    "Web Designing – CMS Basics",
    "Real Estate Sales – Beginner",
    "Blog Writing – Basics",
    "Interpreter / Translator – Basics",
    "Sales – Beginner",
    "CICC Exam Preparation",
    "Career Development Course",
    "Digital Marketing – Beginner",
    "Graphics Designing – Beginner",
    "NDAEB Basic Theory Exam Preparation",
    "NDAEB Advance Theory Exam Preparation",
    "NDAEB Clinical Practice Evaluation",
    "ESL – Language Training",
    "Food Handling Certificate Course",
    "Reception Skills",
    "Bartending",
    "Makeup Artistry Training",
    "Freight Brokerage",
    "Safety & Compliance",
    "Basic Bookkeeping",
    "Truck Dispatch Training",
    "Basic Security Training & First Aid",
    "Certificate in Adult Education – I",
    "Certificate in Adult Education – II",
  ];

  return (
    <section className="bg-gray-100 py-16">
      <div className="max-w-4xl mx-auto px-4">

        {/* Heading */}
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold text-gray-800">
            Career College <span className="text-blue-700">Registration Form</span>
          </h2>
          <p className="text-gray-600 mt-2">
            Register now to begin your professional learning journey
          </p>
        </div>

        {/* Form */}
        <form className="bg-white shadow-lg rounded-lg p-8 space-y-6">

          {/* Name */}
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                First Name
              </label>
              <input
                type="text"
                placeholder="Enter first name"
                className="w-full border border-gray-300 rounded px-4 py-2 focus:ring-2 focus:ring-blue-600 outline-none"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Last Name
              </label>
              <input
                type="text"
                placeholder="Enter last name"
                className="w-full border border-gray-300 rounded px-4 py-2 focus:ring-2 focus:ring-blue-600 outline-none"
              />
            </div>
          </div>

          {/* Email & Phone */}
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Email Address
              </label>
              <input
                type="email"
                placeholder="example@email.com"
                className="w-full border border-gray-300 rounded px-4 py-2 focus:ring-2 focus:ring-blue-600 outline-none"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Phone Number
              </label>
              <input
                type="tel"
                placeholder="+1 234 567 890"
                className="w-full border border-gray-300 rounded px-4 py-2 focus:ring-2 focus:ring-blue-600 outline-none"
              />
            </div>
          </div>

          {/* Course Selection */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Select Course
            </label>
            <select
              className="w-full border border-gray-300 rounded px-4 py-2 focus:ring-2 focus:ring-blue-600 outline-none"
            >
              <option value="">-- Select Course --</option>
              {courses.map((course, index) => (
                <option key={index} value={course}>
                  {course}
                </option>
              ))}
            </select>
          </div>

          {/* Address */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Address
            </label>
            <textarea
              rows="3"
              placeholder="Enter your address"
              className="w-full border border-gray-300 rounded px-4 py-2 focus:ring-2 focus:ring-blue-600 outline-none"
            ></textarea>
          </div>

          {/* Submit */}
          <div className="text-center">
            <Link to="/login">
              <button
                type="submit"
                className="bg-blue-700 text-white px-8 py-3 rounded font-semibold hover:bg-blue-800 transition"
              >
                Submit Registration
              </button>
            </Link>
          </div>

        </form>
      </div>
    </section>
  );
};

export default RegistrationForm;
