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
          className="fixed bottom-6 right-6 z-50 bg-black text-white border-2 border-black px-4 py-3 shadow-[4px_4px_0px_0px_rgba(0,0,0,0.3)] flex items-center gap-2 text-xs font-typewriter select-none uppercase tracking-wider"
        >
          <span className="text-white font-bold">✓</span>
          <span>{message}</span>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
