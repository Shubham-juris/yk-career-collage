import React from "react";
import { Phone } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";

const FloatingChat = () => {
  return (
    <div className="fixed right-0 top-1/2 -translate-y-1/2 z-50 flex flex-col rounded-l-xl overflow-hidden shadow-xl">

      {/* WhatsApp */}
      <a
        href="https://wa.me/(403) 921-4529"
        target="_blank"
        rel="noopener noreferrer"
        className="
          bg-green-500
          hover:bg-green-600
          transition
          w-10 h-10
          sm:w-12 sm:h-12
          md:w-14 md:h-14
          flex items-center justify-center
        "
      >
        <FaWhatsapp className="text-white w-5 h-5 md:w-6 md:h-6" />
      </a>

      {/* Call */}
      <a
        href="tel:+(403) 921-4529"
        className="
          bg-red-600
          hover:bg-red-700
          transition
          w-10 h-10
          sm:w-12 sm:h-12
          md:w-14 md:h-14
          flex items-center justify-center
        "
      >
        <Phone className="text-white w-5 h-5 md:w-6 md:h-6" />
      </a>

    </div>
  );
};

export default FloatingChat;
