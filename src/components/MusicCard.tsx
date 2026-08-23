"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Music, Disc, Sparkles } from "lucide-react";
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
      colors: ["#F4A93B", "#3B82F6", "#EC4899"],
    });
    setTimeout(() => setDrumRipple(false), 1200);
  };

  return (
    <section className="py-10 px-4 max-w-5xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
        className="bg-white rounded-3xl p-6 sm:p-10 shadow-xl border border-blue-100 relative overflow-hidden"
      >
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
          {/* Text Content */}
          <div className="md:col-span-6 space-y-5">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 text-blue-700 text-xs font-semibold border border-blue-200">
              <Music className="w-4 h-4 text-blue-600" />
              <span>Musical Journey</span>
            </div>

            <h3 className="text-3xl sm:text-4xl font-extrabold text-brand-navy font-heading">
              Rhythm & Melodies 🥁🎸🎷
            </h3>

            <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
              Music is built into Wandeme&apos;s DNA. Drumming runs right in the family — his dad plays too! 
              Currently, he&apos;s grinding away learning the <strong className="text-brand-navy font-semibold">bass guitar</strong>, 
              and his ultimate dream is to master the <strong className="text-brand-navy font-semibold">saxophone</strong> (just waiting on the right teacher!).
            </p>

            <div className="space-y-3 pt-2">
              <div className="flex items-center gap-3 p-3 rounded-xl bg-slate-50 border border-slate-100">
                <div className="p-2 rounded-lg bg-amber-100 text-amber-700 font-bold text-xs">01</div>
                <div>
                  <h4 className="text-xs font-bold text-brand-navy">Drums (Heritage)</h4>
                  <p className="text-xs text-gray-500">Following in his dad&apos;s footsteps behind the kit</p>
                </div>
              </div>

              <div className="flex items-center gap-3 p-3 rounded-xl bg-slate-50 border border-slate-100">
                <div className="p-2 rounded-lg bg-blue-100 text-blue-700 font-bold text-xs">02</div>
                <div>
                  <h4 className="text-xs font-bold text-brand-navy">Bass Guitar (In Progress)</h4>
                  <p className="text-xs text-gray-500">Holding down the groove one chord at a time</p>
                </div>
              </div>

              <div className="flex items-center gap-3 p-3 rounded-xl bg-slate-50 border border-slate-100">
                <div className="p-2 rounded-lg bg-purple-100 text-purple-700 font-bold text-xs">03</div>
                <div>
                  <h4 className="text-xs font-bold text-brand-navy">Saxophone (Dream Goal)</h4>
                  <p className="text-xs text-gray-500">Looking for a sax teacher — open to recommendations!</p>
                </div>
              </div>
            </div>
          </div>

          {/* Interactive Drum Image */}
          <div className="md:col-span-6 flex flex-col items-center justify-center">
            <div
              onClick={handleDrumClick}
              className="relative w-full max-w-sm h-72 sm:h-80 rounded-2xl overflow-hidden cursor-pointer shadow-md group border-2 border-slate-100 hover:shadow-xl transition-all transform hover:-translate-y-1"
            >
              <Image
                src="https://images.unsplash.com/photo-1519892300165-cb5542fb47c7?auto=format&fit=crop&w=800&q=80"
                alt="Drums Placeholder"
                fill
                sizes="(max-width: 768px) 100vw, 400px"
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />

              {/* Sound Wave Ripple Effect overlay */}
              <AnimatePresence>
                {drumRipple && (
                  <motion.div
                    initial={{ scale: 0.5, opacity: 1 }}
                    animate={{ scale: 1.5, opacity: 0 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.8 }}
                    className="absolute inset-0 bg-brand-gold/30 rounded-2xl pointer-events-none flex items-center justify-center"
                  >
                    <Disc className="w-20 h-20 text-white animate-spin" />
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Click prompt overlay */}
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent p-4 flex items-center justify-between text-white">
                <div className="flex items-center gap-2">
                  <Sparkles className="w-4 h-4 text-brand-gold" />
                  <span className="text-xs font-semibold">Tap to Drop a Beat! 🥁</span>
                </div>
                <span className="text-[10px] bg-white/20 px-2 py-0.5 rounded-md backdrop-blur-sm">
                  Interactive
                </span>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
