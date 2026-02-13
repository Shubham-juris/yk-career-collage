import React, { useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import img1 from "../../assets/home/hero.jpeg";

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

export default function HeroSection() {
  const listRef = useRef(null);

  // Auto scroll course list
  useEffect(() => {
    const el = listRef.current;
    let scroll = 0;

    const interval = setInterval(() => {
      scroll += 1;
      if (scroll >= el.scrollHeight / 2) scroll = 0;
      el.scrollTop = scroll;
    }, 40);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative h-[70vh] flex overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `url(${img1})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />

      <div className="absolute inset-0 bg-black/50" />

      {/* Content */}
      <div className="relative z-10 w-full flex">
        {/* LEFT */}
        <div className="w-[70%] flex flex-col justify-center px-6 md:px-16 text-white">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Start Better Learning Future From Here
          </h1>
          <p className="text-xl mb-6">
            $xx9 – Includes Professional Certification Exam
          </p>

          <Link
            to="/register"
            className="inline-block w-fit bg-blue-600 px-8 py-3 rounded text-lg font-semibold hover:bg-blue-700 transition"
          >
            Register Now
          </Link>
        </div>

        {/* RIGHT */}
        <div className="w-[30%] bg-red-700/70 text-white px-4 py-6 overflow-hidden relative backdrop-blur-sm rounded-l-xl">
          <div className="absolute top-4 left-1/2 -translate-x-1/2 animate-bounce z-20">
            <span className="bg-white text-red-700 px-3 py-2 rounded-full font-bold shadow-lg text-sm">
              🎓 Admission Open
            </span>
          </div>

          <div ref={listRef} className="mt-16 max-h-[70vh] overflow-hidden">
            <ul className="space-y-2 text-sm">
              {[...courses, ...courses].map((c, i) => (
                <li key={i} className="hover:text-yellow-300">
                  • {c}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
