import React from "react";
import { useNavigate } from "react-router-dom";

const Programs = () => {
  const navigate = useNavigate();

  const programs = [
    {
      title: "Language & Communication Programs",
      desc: "Language and communication skill development programs for global opportunities.",
      courses: [
        "Sign Language Learning",
        "French Level A2",
        "Interpreter / Translator – Basics",
        "ESL – Language Training",
      ],
    },
    {
      title: "Creative & Skill Development Programs",
      desc: "Hands-on creative and professional skill-based training programs.",
      courses: [
        "Professional Photography – Beginner",
        "Event Planning – Basics",
        "Guitar Training – Basics",
        "Blog Writing – Basics",
        "Makeup Artistry Training",
      ],
    },
    {
      title: "IT & Digital Programs",
      desc: "Technology and digital career-oriented professional programs.",
      courses: [
        "Web Designing – CMS Basics",
        "Digital Marketing – Beginner",
        "Graphics Designing – Beginner",
      ],
    },
    {
      title: "Business & Sales Programs",
      desc: "Business, sales and corporate skill enhancement programs.",
      courses: [
        "Real Estate Sales – Beginner",
        "Sales – Beginner",
        "Career Development Course",
        "Basic Bookkeeping",
        "Safety & Compliance",
      ],
    },
    {
      title: "Hospitality & Service Programs",
      desc: "Hospitality, service industry and customer handling programs.",
      courses: [
        "Reception Skills",
        "Bartending",
        "Food Handling Certificate Course",
        "Basic Security Training & First Aid",
      ],
    },
    {
      title: "Logistics & Trade Programs",
      desc: "Trade, logistics and transport industry focused programs.",
      courses: [
        "Freight Brokerage",
        "Truck Dispatch Training",
      ],
    },
    {
      title: "Exam Preparation Programs",
      desc: "Professional certification and exam preparation programs.",
      courses: [
        "CICC Exam Preparation",
        "NDAEB Basic Theory Exam Preparation",
        "NDAEB Advance Theory Exam Preparation",
        "NDAEB Clinical Practice Evaluation",
      ],
    },
    {
      title: "Adult Education Programs",
      desc: "Certified adult education and training programs.",
      courses: [
        "Certificate in Adult Education – I",
        "Certificate in Adult Education – II",
      ],
    },
  ];

  return (
    <section className="min-h-screen bg-gradient-to-br from-gray-100 to-gray-200 py-20">
      <div className="max-w-7xl mx-auto px-4">
        {/* Heading */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-800">
            Our <span className="text-blue-600">Programs</span>
          </h1>
          <p className="text-gray-600 mt-3 max-w-2xl mx-auto">
            Career-focused professional programs designed to build skills,
            confidence, and real-world expertise.
          </p>
        </div>

        {/* Programs Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {programs.map((program, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100 flex flex-col overflow-hidden"
            >
              {/* Card Header */}
              <div className="bg-gradient-to-r from-blue-600 to-blue-800 p-5 text-white">
                <h3 className="text-xl font-semibold">{program.title}</h3>
                <p className="text-sm text-blue-100 mt-1">
                  Certified Career Program
                </p>
              </div>

              {/* Card Body */}
              <div className="p-6 flex flex-col flex-grow">
                <p className="text-gray-600 text-sm mb-4">
                  {program.desc}
                </p>

                <h4 className="text-gray-800 font-semibold mb-2 text-sm">
                  Available Courses
                </h4>

                <ul className="text-sm text-gray-700 space-y-1 mb-6 list-disc pl-5 flex-grow">
                  {program.courses.map((course, idx) => (
                    <li key={idx}>{course}</li>
                  ))}
                </ul>

                <button
                  onClick={() => navigate("/courses")}
                  className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition"
                >
                  View Program Details
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Programs;
