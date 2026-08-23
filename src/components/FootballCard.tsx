"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Trophy, Flame, MessageSquareQuote, Shield } from "lucide-react";
import Image from "next/image";
import confetti from "canvas-confetti";

export default function FootballCard() {
  const [goalCelebration, setGoalCelebration] = useState(false);

  const handleGoalClick = () => {
    setGoalCelebration(true);

    // Goal celebration burst
    confetti({
      particleCount: 70,
      angle: 90,
      spread: 80,
      origin: { y: 0.6 },
      colors: ["#000000", "#60A5FA", "#F59E0B", "#EF4444"],
    });

    setTimeout(() => setGoalCelebration(false), 2500);
  };

  return (
    <section className="py-10 px-4 max-w-5xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
        className="bg-white rounded-3xl p-6 sm:p-10 shadow-xl border border-emerald-100 relative overflow-hidden"
      >
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
          {/* Soccer Ball Image & Click Trigger */}
          <div className="md:col-span-5 flex flex-col items-center justify-center order-2 md:order-1">
            <div
              onClick={handleGoalClick}
              className="relative w-64 h-64 sm:w-72 sm:h-72 rounded-2xl overflow-hidden cursor-pointer shadow-md border-2 border-emerald-100 group hover:shadow-xl transition-all transform hover:scale-102"
            >
              <Image
                src="https://images.unsplash.com/photo-1614632537197-38a17061c2bd?auto=format&fit=crop&w=800&q=80"
                alt="Soccer Ball Placeholder"
                fill
                sizes="(max-width: 768px) 100vw, 350px"
                className={`object-cover transition-transform duration-700 ${
                  goalCelebration ? "scale-110 rotate-12" : "group-hover:scale-105"
                }`}
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex items-end justify-between p-4 text-white">
                <span className="text-xs font-semibold flex items-center gap-1.5">
                  ⚽ Click for GOAL celebration!
                </span>
                <span className="text-[10px] bg-emerald-500/80 backdrop-blur-sm px-2 py-0.5 rounded font-bold">
                  Tap
                </span>
              </div>

              {/* Goal Popup Text */}
              <AnimatePresence>
                {goalCelebration && (
                  <motion.div
                    initial={{ scale: 0, opacity: 0 }}
                    animate={{ scale: 1.2, opacity: 1 }}
                    exit={{ scale: 0, opacity: 0 }}
                    className="absolute inset-0 bg-emerald-600/90 backdrop-blur-sm flex flex-col items-center justify-center text-white p-4 text-center"
                  >
                    <Trophy className="w-12 h-12 text-yellow-300 animate-bounce mb-2" />
                    <h4 className="text-2xl font-extrabold uppercase tracking-widest font-heading">
                      GOAAAL! ⚽🔥
                    </h4>
                    <p className="text-xs font-medium text-emerald-100 mt-1">
                      Kha pass&apos;e bola! Pure football passion!
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>

          {/* Text Content */}
          <div className="md:col-span-7 space-y-5 order-1 md:order-2">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-50 text-emerald-700 text-xs font-semibold border border-emerald-200">
              <Shield className="w-4 h-4 text-emerald-600" />
              <span>Football Fanatic</span>
            </div>

            <h3 className="text-3xl sm:text-4xl font-extrabold text-brand-navy font-heading">
              The Beautiful Game ⚽
            </h3>

            {/* Team Badges */}
            <div className="flex flex-wrap items-center gap-3">
              <div className="px-4 py-2 rounded-xl bg-black text-white text-xs font-bold flex items-center gap-2 shadow-sm">
                <span>☠️ Orlando Pirates</span>
              </div>
              <div className="px-4 py-2 rounded-xl bg-sky-500 text-white text-xs font-bold flex items-center gap-2 shadow-sm">
                <span>🩵 Manchester City</span>
              </div>
              <div className="px-4 py-2 rounded-xl bg-amber-400 text-brand-navy text-xs font-bold flex items-center gap-2 shadow-sm">
                <span>👑 Lionel Messi (GOAT)</span>
              </div>
            </div>

            <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
              When matchday comes around, you&apos;ll find Wandeme locked in. Lionel Messi takes top spot as his overall favorite player, 
              but when it comes to Orlando Pirates... he has <em className="italic">no favorite player</em> because he literally yells at all of them!
            </p>

            {/* Quote Bubble */}
            <div className="relative bg-amber-50 border-2 border-brand-gold/40 rounded-2xl p-4 shadow-sm">
              <div className="flex items-start gap-3">
                <MessageSquareQuote className="w-6 h-6 text-brand-gold shrink-0 mt-0.5" />
                <div>
                  <p className="text-sm font-extrabold text-brand-navy italic">
                    &quot;kha pass&apos;e bola, thoho ya mianu&quot;
                  </p>
                  <p className="text-xs text-gray-500 mt-1">
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
