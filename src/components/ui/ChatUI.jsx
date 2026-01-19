import { useChat } from "../../usecontext/ChatContext";

const ChatUI = () => {
  const { open, closeChat } = useChat();

  if (!open) return null;

  return (
    <div className="fixed bottom-24 right-6 w-80 bg-white rounded-xl shadow-2xl z-50">

      <div className="bg-green-500 text-white p-3 flex justify-between">
        <span>Support</span>
        <button onClick={closeChat}>✕</button>
      </div>

      <div className="p-4 text-sm">
        👋 WhatsApp par baat karein?
      </div>

    </div>
  );
};

export default ChatUI;
