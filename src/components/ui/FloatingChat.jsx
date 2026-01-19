import React from "react";
import { Phone, MessageCircle } from "lucide-react";
import { useChat } from "../../usecontext/ChatContext";

const FloatingChat = () => {
  const { openChat } = useChat();

  return (
    <div className="fixed right-0 top-1/2 -translate-y-1/2 z-50 flex flex-col rounded-l-xl overflow-hidden shadow-xl">

      {/* WhatsApp */}
      <button
        onClick={openChat}
        className="
          bg-green-500 
          w-10 h-10 
          sm:w-12 sm:h-12 
          md:w-14 md:h-14
          flex items-center justify-center
        "
      >
        <MessageCircle className="text-white w-5 h-5 md:w-6 md:h-6" />
      </button>

      {/* Call */}
      <a
        href="tel:+919999999999"
        className="
          bg-red-600 
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
