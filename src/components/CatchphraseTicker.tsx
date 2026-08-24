"use client";

import { motion } from "framer-motion";

export default function CatchphraseTicker() {
  const phrases = [
    "😴 \"Ndo neta\"",
    "🍲 \"Ndi na ndala\"",
    "⚽ \"Kha pass'e bola!\"",
    "🍔 Burger & Chips only",
    "💀 *Dying laugh sound*",
    "💤 10+ Sleeping Videos",
    "🏎️ BMW 340i B58",
    "🥁 Drumming in the DNA",
  ];

  const repeated = [...phrases, ...phrases, ...phrases, ...phrases];

  return (
    <div className="py-4 bg-zinc-900 border-y-2 border-zinc-900 overflow-hidden relative select-none text-white font-typewriter">
      <div className="relative w-full overflow-hidden flex">
        <motion.div
          animate={{ x: ["0%", "-50%"] }}
          transition={{ duration: 25, ease: "linear", repeat: Infinity }}
          className="flex whitespace-nowrap gap-3 items-center"
        >
          {repeated.map((phrase, idx) => (
            <span
              key={idx}
              className="inline-flex items-center text-xs sm:text-sm font-bold text-white px-3.5 py-1 bg-zinc-800 border border-zinc-700 uppercase tracking-wide"
            >
              {phrase}
            </span>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
