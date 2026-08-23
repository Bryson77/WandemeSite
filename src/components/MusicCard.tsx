"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Music, Disc } from "lucide-react";
import Image from "next/image";
import confetti from "canvas-confetti";

export default function MusicCard() {
  const [drumRipple, setDrumRipple] = useState(false);

  const handleDrumClick = () => {
    setDrumRipple(true);
    confetti({
      particleCount: 40,
      spread: 60,
      origin: { y: 0.7 },
      colors: ["#2563EB", "#38BDF8", "#FFFFFF"],
    });
    setTimeout(() => setDrumRipple(false), 1000);
  };

  return (
    <section className="py-8 px-4 max-w-5xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="bg-[#121826] rounded-2xl p-6 sm:p-10 border border-slate-800 shadow-xl"
      >
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
          {/* Content */}
          <div className="md:col-span-6 space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 text-blue-400 text-xs font-semibold border border-blue-500/20">
              <Music className="w-3.5 h-3.5" />
              <span>Musical Journey</span>
            </div>

            <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
              Rhythm & Melodies 🥁🎸🎷
            </h3>

            <p className="text-slate-300 text-sm leading-relaxed">
              Drumming runs in Wandeme&apos;s family (his dad plays too). He&apos;s currently learning the <strong className="text-white">bass guitar</strong> and dreams of mastering the <strong className="text-white">saxophone</strong>!
            </p>

            <div className="space-y-2.5 pt-1">
              <div className="p-3 rounded-xl bg-[#090D16] border border-slate-800 flex items-center justify-between text-xs">
                <span className="font-bold text-white">01. Drums (Heritage)</span>
                <span className="text-slate-400">Dad to Son</span>
              </div>
              <div className="p-3 rounded-xl bg-[#090D16] border border-slate-800 flex items-center justify-between text-xs">
                <span className="font-bold text-white">02. Bass Guitar</span>
                <span className="text-blue-400 font-semibold">Learning Now</span>
              </div>
              <div className="p-3 rounded-xl bg-[#090D16] border border-slate-800 flex items-center justify-between text-xs">
                <span className="font-bold text-white">03. Saxophone</span>
                <span className="text-slate-400">Future Goal</span>
              </div>
            </div>
          </div>

          {/* Interactive Drum Kit Image */}
          <div className="md:col-span-6 flex flex-col items-center">
            <div
              onClick={handleDrumClick}
              className="relative w-full max-w-sm h-64 rounded-2xl overflow-hidden cursor-pointer border border-slate-700 group shadow-md"
            >
              <Image
                src="/images/drums.jpg"
                alt="Drums"
                fill
                sizes="(max-width: 768px) 100vw, 400px"
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />

              <AnimatePresence>
                {drumRipple && (
                  <motion.div
                    initial={{ opacity: 1, scale: 0.5 }}
                    animate={{ opacity: 0, scale: 1.4 }}
                    transition={{ duration: 0.7 }}
                    className="absolute inset-0 bg-blue-600/30 pointer-events-none flex items-center justify-center"
                  >
                    <Disc className="w-16 h-16 text-white animate-spin" />
                  </motion.div>
                )}
              </AnimatePresence>

              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent p-3 text-white text-xs flex justify-between items-center">
                <span className="font-medium">Tap image to trigger beat pulse 🥁</span>
                <span className="bg-blue-600 px-2 py-0.5 rounded text-[10px] font-bold">Tap</span>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
