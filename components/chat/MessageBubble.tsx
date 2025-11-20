"use client";

import { motion } from "framer-motion";
import { Bot, User } from "lucide-react";
import React from "react";

// Props
interface MessageBubbleProps {
  sender: "bot" | "user";
  children: React.ReactNode;
  isLatest?: boolean;
}

//
// ------------------------------
//   Message Bubble
// ------------------------------
//
export const MessageBubble: React.FC<MessageBubbleProps> = ({
  sender,
  children,
}) => {
  const isBot = sender === "bot";

  return (
    <motion.div
      initial={{ opacity: 0, y: 10, scale: 0.95 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.3 }}
      className={`flex w-full mb-6 ${isBot ? "justify-start" : "justify-end"}`}
    >
      <div
        className={`flex max-w-[85%] md:max-w-[70%] items-end gap-2 ${
          isBot ? "flex-row" : "flex-row-reverse"
        }`}
      >
        {/* Avatar */}
        <div
          className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center shadow-sm ${
            isBot
              ? "bg-[var(--color-navy)] text-white"
              : "bg-[var(--color-gray-light)] text-[var(--color-gray-dark)]"
          }`}
        >
          {isBot ? <Bot size={18} /> : <User size={18} />}
        </div>

        {/* Bubble */}
        <div
          className={`relative p-4 shadow-md text-sm md:text-base leading-relaxed ${
            isBot
              ? "bg-white text-[var(--color-navy)] rounded-2xl rounded-bl-none border border-[var(--color-gray-light)]"
              : "bg-[var(--color-navy-dark)] text-white rounded-2xl rounded-br-none"
          }`}
        >
          {children}
        </div>
      </div>
    </motion.div>
  );
};

//
// ------------------------------
//   Typing Indicator
// ------------------------------
//
export const TypingIndicator: React.FC = () => (
  <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    className="flex w-full mb-4 justify-start"
  >
    <div className="flex items-end gap-2">
      <div className="w-8 h-8 rounded-full bg-[var(--color-navy)] text-white flex items-center justify-center">
        <Bot size={18} />
      </div>

      <div className="bg-white border border-[var(--color-gray-light)] px-4 py-3 rounded-2xl rounded-bl-none shadow-sm flex gap-1">
        <span
          className="w-2 h-2 bg-[var(--color-gray-dark)] rounded-full animate-bounce"
          style={{ animationDelay: "0ms" }}
        />
        <span
          className="w-2 h-2 bg-[var(--color-gray-dark)] rounded-full animate-bounce"
          style={{ animationDelay: "150ms" }}
        />
        <span
          className="w-2 h-2 bg-[var(--color-gray-dark)] rounded-full animate-bounce"
          style={{ animationDelay: "300ms" }}
        />
      </div>
    </div>
  </motion.div>
);
