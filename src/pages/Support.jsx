import React from "react";

const Support = () => {
  return (
    <div className="min-h-screen bg-gray-100">

      {/* Hero */}
      <div className="bg-blue-700 text-white py-16 text-center px-4">
        <h1 className="text-3xl md:text-4xl font-bold mb-3">
          Student Support Center
        </h1>
        <p className="text-blue-100 max-w-2xl mx-auto">
          We are here to help you with admissions, courses, payments, and technical issues.
        </p>
      </div>

      {/* Support Options */}
      <div className="max-w-6xl mx-auto py-12 px-4 grid grid-cols-1 md:grid-cols-3 gap-6">

        {/* Card 1 */}
        <div className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition">
          <h3 className="font-semibold text-lg mb-2 text-blue-700">
            Admission Help
          </h3>
          <p className="text-gray-600 text-sm mb-4">
            Get help with online admission, document upload, and eligibility.
          </p>
          <p className="text-sm">
            📧 admission@ykcollege.com  
            <br />
            📞 +1 xxxxxxxx256
          </p>
        </div>

        {/* Card 2 */}
        <div className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition">
          <h3 className="font-semibold text-lg mb-2 text-blue-700">
            Course Support
          </h3>
          <p className="text-gray-600 text-sm mb-4">
            Queries about syllabus, class schedule, and certificates.
          </p>
          <p className="text-sm">
            📧 courses@ykcollege.com  
            <br />
            📞 +1 xxxxxxxx245
          </p>
        </div>

        {/* Card 3 */}
        <div className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition">
          <h3 className="font-semibold text-lg mb-2 text-blue-700">
            Payment & Technical
          </h3>
          <p className="text-gray-600 text-sm mb-4">
            Payment failed, receipt issue, or login problem.
          </p>
          <p className="text-sm">
            📧 support@ykcollege.com  
            <br />
            📞 +1 xxxxxxx295
          </p>
        </div>
      </div>

      {/* Contact Form */}
      <div className="bg-white py-12 px-4">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold text-center mb-6 text-gray-800">
            Send Us a Message
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input className="input" placeholder="Your Name" />
            <input className="input" placeholder="Your Email" />
          </div>

          <input className="input mt-4" placeholder="Subject" />
          <textarea className="input mt-4 h-32" placeholder="Describe your issue"></textarea>

          <button className="btn mt-6 w-full">
            Submit Request
          </button>
        </div>
      </div>

      {/* Styles */}
      <style>{`
        .input {
          width: 100%;
          border: 1px solid #d1d5db;
          padding: 12px;
          border-radius: 6px;
        }
        .btn {
          background: #1e40af;
          color: white;
          padding: 12px;
          border-radius: 6px;
          font-weight: 600;
        }
      `}</style>
    </div>
  );
};

export default Support;
