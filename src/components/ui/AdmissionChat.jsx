import React, { useState, useEffect, useRef } from "react";
import { useChat } from "../../usecontext/ChatContext";

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

const AdmissionChat = () => {
  const { open, setOpen } = useChat();

  const [messages, setMessages] = useState([
    {
      from: "bot",
      text:
        "👋 Hello! Welcome to Admission Enquiry.\n\nYou can ask like:\n• course list\n• digital marketing course\n• online courses\n• duration\n• admission\n• contact number",
    },
  ]);

  const [input, setInput] = useState("");
  const bottomRef = useRef(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

 const getReply = (msg) => {
  const text = msg.toLowerCase().trim();

  // Greeting
  if (
    text === "hi" ||
    text === "hello" ||
    text === "hey" ||
    text === "hii" ||
    text === "hlo"
  ) {
    return "😊 Hello! Please tell me which course information you want.";
  }

  // List all courses
  if (text.includes("course") && !text.includes("details")) {
    return (
      "📘 Available Courses:\n\n" +
      courses.map((c) => `• ${c.name}`).join("\n")
    );
  }

  // Try exact match
  const exactMatch = courses.find(
    (c) => text === c.name.toLowerCase()
  );

  if (exactMatch) {
    return (
      `📘 Course Details:\n\n` +
      `• Name: ${exactMatch.name}\n` +
      `• Duration: ${exactMatch.duration}\n` +
      `• Mode: ${exactMatch.mode}\n\n` +
      `For admission type "admission" or "contact".`
    );
  }

  // Try smarter partial match (multi-word match)
  const words = text.split(" ").filter((w) => w.length > 2);

  const partialMatch = courses.find((course) => {
    const courseWords = course.name.toLowerCase().split(" ").filter((w) => w.length > 2);
    return words.every((w) => courseWords.includes(w));
  });

  if (partialMatch) {
    return (
      `📘 Course Details:\n\n` +
      `• Name: ${partialMatch.name}\n` +
      `• Duration: ${partialMatch.duration}\n` +
      `• Mode: ${partialMatch.mode}\n\n` +
      `For admission type "admission" or "contact".`
    );
  }

  // Online
  if (text.includes("online")) {
    return (
      "💻 Online Courses:\n\n" +
      courses
        .filter((c) => c.mode.toLowerCase().includes("online"))
        .map((c) => `• ${c.name}`)
        .join("\n")
    );
  }

  // Offline
  if (text.includes("offline")) {
    return (
      "🏫 Offline Courses:\n\n" +
      courses
        .filter((c) => c.mode.toLowerCase().includes("offline"))
        .map((c) => `• ${c.name}`)
        .join("\n")
    );
  }

  // Duration
  if (text.includes("duration") || text.match(/\d+ ?months/)) {
    return (
      "⏳ Course Duration Details:\n\n" +
      courses
        .map((c) => `• ${c.name} – ${c.duration}`)
        .join("\n")
    );
  }

  // Admission
  if (text.includes("admission") || text.includes("apply")) {
    return "📝 Admissions are OPEN.\n📞 Contact: 9XXXXXXXX36";
  }

  // Contact
  if (
    text.includes("contact") ||
    text.includes("number") ||
    text.includes("call")
  ) {
    return "📞 Admission Helpline: 9XXXXXXXX36";
  }

  // Default fallback
  return (
    "🙂 I can help you with:\n\n" +
    "• Course details\n" +
    "• Duration\n" +
    "• Online / Offline courses\n" +
    "• Admission process\n" +
    "• Contact number\n\n" +
    "Please type your question."
  );
};

  const sendMessage = () => {
    if (!input.trim()) return;

    setMessages((prev) => [...prev, { from: "user", text: input }]);

    const reply = getReply(input);

    setTimeout(() => {
      setMessages((prev) => [...prev, { from: "bot", text: reply }]);
    }, 500);

    setInput("");
  };

  return (
    <div
      className={`
      fixed z-50 bg-white shadow-2xl
      md:bottom-4 md:right-4 md:w-96 md:rounded-2xl
      bottom-0 right-0 w-full rounded-t-2xl
      transition-all duration-300
      ${open ? "translate-y-0" : "translate-y-full"}
    `}
      style={{ height: "70vh" }}
    >
      {/* Header */}
      <div className="bg-blue-600 text-white p-4 flex justify-between">
        <span>🎓 Admission Assistant</span>
        <button onClick={() => setOpen(false)}>✖</button>
      </div>

      {/* Messages */}
      <div className="p-3 overflow-y-auto h-[calc(100%-120px)] text-sm whitespace-pre-line">
        {messages.map((msg, i) => (
          <div
            key={i}
            className={`mb-2 flex ${
              msg.from === "user" ? "justify-end" : "justify-start"
            }`}
          >
            <div
              className={`px-3 py-2 rounded-xl max-w-[85%] ${
                msg.from === "user"
                  ? "bg-blue-600 text-white"
                  : "bg-gray-200"
              }`}
            >
              {msg.text}
            </div>
          </div>
        ))}
        <div ref={bottomRef} />
      </div>

      {/* Input */}
      <div className="border-t p-2 flex gap-2">
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Type your question..."
          className="flex-1 border rounded-lg px-3 py-2 text-sm outline-none"
          onKeyDown={(e) => e.key === "Enter" && sendMessage()}
        />
        <button
          onClick={sendMessage}
          className="bg-blue-600 text-white px-4 rounded-lg"
        >
          Send
        </button>
      </div>
    </div>
  );
};

export default AdmissionChat;
