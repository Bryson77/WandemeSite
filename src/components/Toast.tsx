"use client";

import { motion, AnimatePresence } from "framer-motion";

interface ToastProps {
  message: string | null;
  onClose: () => void;
}

export default function Toast({ message, onClose }: ToastProps) {
  return (
    <AnimatePresence>
      {message && (
        <motion.div
          initial={{ opacity: 0, y: 20, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 20, scale: 0.95 }}
          transition={{ duration: 0.2 }}
          className="fixed bottom-6 right-6 z-50 bg-[#1A1A1A] text-white border border-[#2A2A2A] px-4 py-3 rounded-lg shadow-2xl flex items-center gap-2 text-xs font-mono select-none"
        >
          <span className="text-blue-500 font-bold">✓</span>
          <span>{message}</span>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
