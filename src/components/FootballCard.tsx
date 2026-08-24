"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Trophy, MessageSquareQuote, Shield } from "lucide-react";
import Image from "next/image";
import confetti from "canvas-confetti";

export default function FootballCard() {
  const [goalCelebration, setGoalCelebration] = useState(false);

  const handleGoalClick = () => {
    setGoalCelebration(true);
    confetti({
      particleCount: 60,
      angle: 90,
      spread: 80,
      origin: { y: 0.6 },
      colors: ["#000000", "#3F3F46", "#FFFFFF"],
    });
    setTimeout(() => setGoalCelebration(false), 2000);
  };

  return (
    <section className="py-8 px-4 max-w-5xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="bg-white p-6 sm:p-10 border-2 border-zinc-900 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]"
      >
        {/* Header Tag */}
        <div className="flex items-center justify-between border-b-2 border-zinc-900 pb-4 mb-8 font-typewriter">
          <span className="text-xs font-mono font-bold tracking-widest text-zinc-500 uppercase">
            ARTICLE 03 // SPORTS & MATCHDAY
          </span>
          <span className="text-xs font-mono font-bold bg-zinc-900 text-white px-2 py-0.5 uppercase">
            FOOTBALL SPECIAL
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
          {/* Magazine Cut-Out Photo Opening */}
          <div className="md:col-span-5 flex flex-col items-center">
            <div className="relative rotate-[-1.5deg] hover:rotate-0 transition-transform duration-300 bg-white p-3 border-2 border-zinc-900 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] w-full max-w-xs">
              {/* Tape Effect */}
              <div className="absolute -top-3 left-6 w-20 h-5 bg-amber-100/90 border border-amber-300/80 rotate-[3deg] shadow-sm z-10" />

              <div
                onClick={handleGoalClick}
                className="relative w-full aspect-square border border-zinc-900 overflow-hidden bg-zinc-100 cursor-pointer group"
              >
                <Image
                  src="/images/soccer.jpg"
                  alt="Soccer Ball"
                  fill
                  sizes="(max-width: 768px) 100vw, 300px"
                  className={`object-cover transition-transform duration-500 ${
                    goalCelebration ? "scale-110 rotate-6" : "group-hover:scale-105"
                  }`}
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-transparent flex items-end justify-between p-3 text-white text-xs font-typewriter">
                  <span>⚽ Tap for GOAL celebration!</span>
                  <span className="bg-white text-zinc-900 px-2 py-0.5 font-bold uppercase text-[10px]">Tap</span>
                </div>

                <AnimatePresence>
                  {goalCelebration && (
                    <motion.div
                      initial={{ scale: 0, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      exit={{ scale: 0, opacity: 0 }}
                      className="absolute inset-0 bg-black/90 flex flex-col items-center justify-center text-white p-4 text-center font-typewriter z-20"
                    >
                      <Trophy className="w-10 h-10 text-white animate-bounce mb-1" />
                      <h4 className="text-xl font-extrabold uppercase font-magazine">GOAAAL! ⚽</h4>
                      <p className="text-xs text-zinc-300 mt-1">Kha pass&apos;e bola!</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              <div className="pt-3 text-center font-typewriter">
                <p className="text-xs font-bold text-zinc-900 uppercase tracking-wide">
                  [ FIG. 03 — MATCHDAY PASSION ]
                </p>
              </div>
            </div>
          </div>

          {/* Text Content */}
          <div className="md:col-span-7 space-y-4 font-typewriter">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-zinc-100 text-zinc-900 text-xs font-bold border border-zinc-900 uppercase tracking-wider">
              <Shield className="w-3.5 h-3.5" />
              <span>Football Fanatic</span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-extrabold font-magazine text-zinc-900">
              The Beautiful Game ⚽
            </h2>

            <div className="flex flex-wrap items-center gap-2 pt-1">
              <span className="px-3 py-1 bg-black text-white text-xs font-bold border border-black uppercase font-mono">
                ☠️ Orlando Pirates
              </span>
              <span className="px-3 py-1 bg-zinc-200 text-zinc-900 text-xs font-bold border border-zinc-900 uppercase font-mono">
                🩵 Manchester City
              </span>
              <span className="px-3 py-1 bg-zinc-900 text-white text-xs font-bold border border-zinc-900 uppercase font-mono">
                👑 Lionel Messi (GOAT)
              </span>
            </div>

            <p className="text-zinc-700 text-sm leading-relaxed">
              Lionel Messi reigns supreme as his undisputed favorite player of all time. But when it comes to Orlando Pirates... he has <em className="italic text-zinc-900 font-bold">no favorite player</em>—because he spends the entire 90 minutes yelling at every single one of them!
            </p>

            <div className="bg-zinc-50 border-2 border-zinc-900 p-4 shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] relative rotate-[0.5deg]">
              <div className="flex items-start gap-3">
                <MessageSquareQuote className="w-6 h-6 text-zinc-900 shrink-0 mt-0.5" />
                <div>
                  <p className="text-sm font-bold text-zinc-900 italic font-magazine">
                    &quot;kha pass&apos;e bola, thoho ya mianu!&quot;
                  </p>
                  <p className="text-[11px] text-zinc-600 mt-1 font-typewriter font-semibold uppercase">
                    — Wandeme, every single time Pirates loses possession
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
