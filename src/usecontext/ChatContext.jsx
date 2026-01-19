import React, { createContext, useContext, useState } from "react";

const ChatContext = createContext();

export const ChatProvider = ({ children }) => {
  const [open, setOpen] = useState(false);

  // 👇 simple helpers
  const openChat = () => setOpen(true);
  const closeChat = () => setOpen(false);
  const toggleChat = () => setOpen(prev => !prev);

  return (
    <ChatContext.Provider
      value={{
        open,
        setOpen,
        openChat,
        closeChat,
        toggleChat,
      }}
    >
      {children}
    </ChatContext.Provider>
  );
};

export const useChat = () => useContext(ChatContext);
