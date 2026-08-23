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
    <div className="py-4 bg-[#0D131F] border-y border-slate-800/80 overflow-hidden relative select-none">
      <div className="relative w-full overflow-hidden flex">
        <motion.div
          animate={{ x: ["0%", "-50%"] }}
          transition={{ duration: 25, ease: "linear", repeat: Infinity }}
          className="flex whitespace-nowrap gap-3 items-center"
        >
          {repeated.map((phrase, idx) => (
            <span
              key={idx}
              className="inline-flex items-center text-xs sm:text-sm font-semibold text-slate-200 px-3.5 py-1 rounded-lg bg-[#121826] border border-slate-800"
            >
              {phrase}
            </span>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
