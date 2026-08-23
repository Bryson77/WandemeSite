"use client";

import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";

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

  // Repeat items for infinite loop
  const repeated = [...phrases, ...phrases, ...phrases, ...phrases];

  return (
    <div className="py-6 bg-brand-gold/15 border-y border-brand-gold/30 overflow-hidden relative select-none">
      <div className="flex items-center gap-2 mb-2 justify-center text-xs font-bold text-amber-800 uppercase tracking-widest">
        <MessageCircle className="w-3.5 h-3.5 text-brand-gold" />
        <span>Wandeme&apos;s Signature Quotables</span>
      </div>

      <div className="relative w-full overflow-hidden flex">
        <motion.div
          animate={{ x: ["0%", "-50%"] }}
          transition={{ duration: 25, ease: "linear", repeat: Infinity }}
          className="flex whitespace-nowrap gap-6 items-center"
        >
          {repeated.map((phrase, idx) => (
            <span
              key={idx}
              className="inline-flex items-center text-base sm:text-lg font-extrabold text-brand-navy font-heading px-4 py-1.5 rounded-full bg-white/70 shadow-sm border border-amber-200/60"
            >
              {phrase}
            </span>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
