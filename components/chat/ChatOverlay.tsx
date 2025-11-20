"use client";

import ChatInterface from "@/components/chat/ChatInterface";
import { AnimatePresence, motion } from "framer-motion";

interface Props {
  isOpen: boolean;
  onClose: () => void;
}

export default function ChatOverlay({ isOpen, onClose }: Props) {
  return (
    <AnimatePresence mode="wait">
      {isOpen && (
        <motion.div
          key="chat-overlay"
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 100 }}
          transition={{ type: "spring", damping: 25, stiffness: 200 }}
          className="
            fixed inset-0 z-50 bg-[rgba(0,0,0,0.02)]
            overflow-hidden

            [--color-navy:#0a2463]
            [--color-navy-dark:#051633]
            [--color-gray-light:#dfe3e8]
            [--color-gray:#f8f9fa]
            [--color-gray-dark:#9aa0a6]
          "
        >
          <ChatInterface onBackToHome={onClose} />
        </motion.div>
      )}
    </AnimatePresence>
  );
}
