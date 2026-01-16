import React from "react";
import { Link } from "react-router-dom";

const courses = [
  "Sign Language Learning",
  "French Level A2",
  "ESL – Language Training",
  "Interpreter / Translator – Basics",
  "Professional Photography – Beginner",
  "Event Planning – Basics",
  "Guitar Training – Basics",
  "Web Designing – CMS Basics",
  "Graphics Designing – Beginner",
  "Digital Marketing – Beginner",
  "Blog Writing – Basics",
  "Career Development Course",
  "Sales – Beginner",
  "Reception Skills",
  "Makeup Artistry Training",
  "Bartending",
  "Food Handling Certificate Course",
  "Real Estate Sales – Beginner",
  "Freight Brokerage",
  "Truck Dispatch Training",
  "Safety & Compliance",
  "Basic Bookkeeping",
  "Basic Security Training & First Aid",
  "CICC Exam Preparation",
  "NDAEB Basic Theory Exam Preparation",
  "NDAEB Advance Theory Exam Preparation",
  "NDAEB Clinical Practice Evaluation",
  "Certificate in Adult Education – I",
  "Certificate in Adult Education – II",
];

const Admission = () => {
  return (
    <section className="bg-gray-50 min-h-screen">
      {/* ===== HERO ===== */}
      <div className="bg-gradient-to-r from-blue-700 to-blue-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Admissions Open – Canada 🇨🇦
          </h1>
          <p className="text-lg md:text-xl max-w-3xl mx-auto">
            Join YK College Canada and gain career-focused certifications designed
            for Canadian job markets, skill development, and professional growth.
          </p>

          <Link
            to="/admissionform"
            className="inline-block mt-8 bg-white text-blue-700 px-8 py-3 rounded-full font-semibold shadow hover:bg-gray-100 transition"
          >
            Apply Now
          </Link>
        </div>
      </div>

      {/* ===== WHY YK COLLEGE ===== */}
      <div className="max-w-7xl mx-auto px-6 py-16">
        <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">
          Why Choose YK College Canada?
        </h2>

        <div className="grid md:grid-cols-4 gap-6">
          {[
            "Canada-Focused Curriculum",
            "Industry-Relevant Certifications",
            "Affordable Fees",
            "Career & Exam Preparation Support",
          ].map((item, i) => (
            <div
              key={i}
              className="bg-white rounded-lg shadow p-6 text-center font-semibold text-gray-700"
            >
              {item}
            </div>
          ))}
        </div>
      </div>

      {/* ===== COURSES ===== */}
      <div className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">
            Available Courses
          </h2>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {courses.map((course, index) => (
              <div
                key={index}
                className="border rounded-lg p-5 hover:shadow-lg transition bg-white"
              >
                <h3 className="font-semibold text-gray-800">{course}</h3>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ===== ADMISSION PROCESS ===== */}
      <div className="bg-gray-100 py-16">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-gray-800 mb-10 text-center">
            Admission Process
          </h2>

          <div className="grid md:grid-cols-5 gap-6 text-center">
            {[
              "Online Application",
              "Counselling Call",
              "Document Verification",
              "Fee Payment",
              "Enrollment Confirmation",
            ].map((step, i) => (
              <div
                key={i}
                className="bg-white rounded-lg shadow p-6 font-semibold text-gray-700"
              >
                Step {i + 1}
                <div className="mt-2 text-sm font-normal">{step}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ===== ELIGIBILITY & DOCUMENTS ===== */}
      <div className="max-w-7xl mx-auto px-6 py-16 grid md:grid-cols-2 gap-10">
        <div>
          <h3 className="text-2xl font-bold mb-4 text-gray-800">
            Eligibility Criteria
          </h3>
          <ul className="list-disc pl-5 text-gray-700 space-y-2">
            <li>Minimum high school qualification</li>
            <li>Basic English proficiency (for language courses)</li>
            <li>No age restriction for most programs</li>
          </ul>
        </div>

        <div>
          <h3 className="text-2xl font-bold mb-4 text-gray-800">
            Documents Requiblue
          </h3>
          <ul className="list-disc pl-5 text-gray-700 space-y-2">
            <li>Government ID Proof</li>
            <li>Educational Certificates</li>
            <li>Passport-size Photograph</li>
          </ul>
        </div>
      </div>

      {/* ===== CTA ===== */}
      <div className="bg-blue-700 text-white py-16 text-center">
        <h2 className="text-3xl font-bold mb-4">
          Start Your Career Journey in Canada
        </h2>
        <p className="mb-6">
          Limited seats available. Admissions are filling fast.
        </p>

        <Link
          to="/admissionform"
          className="inline-block bg-white text-blue-700 px-10 py-3 rounded-full font-semibold shadow hover:bg-gray-100 transition"
        >
          Apply for Admission
        </Link>
      </div>
    </section>
  );
};

export default Admission;
