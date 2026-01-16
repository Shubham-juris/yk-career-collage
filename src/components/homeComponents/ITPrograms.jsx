import React from "react";
import img from "../../assets/home/home.avif";
import { Link } from "react-router-dom";
import NotificationBell from "../notifiaction/NotificationBell";

const ITPrograms = () => {
  const courses = [
    { name: "Sign Language Learning", duration: "6 Months", mode: "Online + Offline" },
    { name: "French Level A2", duration: "6 Months", mode: "Online + Offline" },
    { name: "Professional Photography – Beginner", duration: "4 Months", mode: "Offline" },
    { name: "Event Planning – Basics", duration: "3 Months", mode: "Offline" },
    { name: "Guitar Training – Basics", duration: "3 Months", mode: "Offline" },
    { name: "Web Designing – CMS Basics", duration: "6 Months", mode: "Online + Offline" },
    { name: "Real Estate Sales – Beginner", duration: "3 Months", mode: "Offline" },
    { name: "Blog Writing – Basics", duration: "3 Months", mode: "Online" },
    { name: "Interpreter / Translator – Basics", duration: "6 Months", mode: "Online + Offline" },
    { name: "Sales – Beginner", duration: "3 Months", mode: "Offline" },
    { name: "CICC Exam Preparation", duration: "4 Months", mode: "Online" },
    { name: "Career Development Course", duration: "3 Months", mode: "Online + Offline" },
    { name: "Digital Marketing – Beginner", duration: "6 Months", mode: "Online + Offline" },
    { name: "Graphics Designing – Beginner", duration: "6 Months", mode: "Offline" },
    { name: "NDAEB Basic Theory Exam Preparation", duration: "4 Months", mode: "Online" },
    { name: "NDAEB Advance Theory Exam Preparation", duration: "4 Months", mode: "Online" },
    { name: "NDAEB Clinical Practice Evaluation", duration: "2 Months", mode: "Offline" },
    { name: "ESL – Language Training", duration: "6 Months", mode: "Online + Offline" },
    { name: "Food Handling Certificate Course", duration: "2 Months", mode: "Offline" },
    { name: "Reception Skills", duration: "2 Months", mode: "Offline" },
    { name: "Bartending", duration: "2 Months", mode: "Offline" },
    { name: "Makeup Artistry Training", duration: "3 Months", mode: "Offline" },
    { name: "Freight Brokerage", duration: "4 Months", mode: "Online" },
    { name: "Safety & Compliance", duration: "3 Months", mode: "Online" },
    { name: "Basic Bookkeeping", duration: "3 Months", mode: "Online" },
    { name: "Truck Dispatch Training", duration: "6 Months", mode: "Online" },
    { name: "Basic Security Training & First Aid", duration: "2 Months", mode: "Offline" },
    { name: "Certificate in Adult Education – I", duration: "6 Months", mode: "Online + Offline" },
    { name: "Certificate in Adult Education – II", duration: "6 Months", mode: "Online + Offline" },
  ];

  return (
    <section
      className="relative py-20 text-white"
      style={{
        backgroundImage: `url(${img})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
               <NotificationBell />

      <div className="absolute inset-0 bg-black/80"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4">
        <div className="text-center mb-14">
          <h2 className="text-4xl font-bold">
            Career College <span className="text-blue-500">Certificate Programs</span>
          </h2>
          <p className="text-gray-300 mt-3 max-w-2xl mx-auto">
            Professional job-oriented certificate programs designed to build
            skills and career growth.
          </p>
        </div>

        <div className="grid lg:grid-cols-4 gap-8">
          <div className="lg:col-span-1 flex justify-center">
            <img
              src={img}
              alt="Students"
              className="rounded-xl shadow-lg object-cover h-full"
            />
          </div>

          <div className="lg:col-span-3 grid sm:grid-cols-2 xl:grid-cols-3 gap-8">
            {courses.map((course, index) => (
              <div
                key={index}
                className="bg-white text-black rounded-xl shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col"
              >
                <div className="bg-gradient-to-r from-blue-600 to-blue-800 text-white p-4 rounded-t-xl">
                  <h3 className="text-lg font-semibold">{course.name}</h3>
                  <p className="text-sm text-blue-100">
                    Career College Certification
                  </p>
                </div>

                <div className="p-5 flex flex-col flex-grow">
                  <div className="text-sm text-gray-700 space-y-2 mb-4">
                    <p><strong>Duration:</strong> {course.duration}</p>
                    <p><strong>Mode:</strong> {course.mode}</p>
                    <p><strong>Eligibility:</strong> 10th Pass & Above</p>
                    <p><strong>Certificate:</strong> Yes</p>
                  </div>

                  <div className="mt-auto">
                    <Link to="/admissionform">
                      <button className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition">
                        Apply Now
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      
    </section>
  );
};

export default ITPrograms;
