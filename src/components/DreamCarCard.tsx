"use client";

import { motion } from "framer-motion";
import { Car, Gauge, Sparkles, Zap } from "lucide-react";
import Image from "next/image";

export default function DreamCarCard() {
  return (
    <section className="py-10 px-4 max-w-5xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
        className="bg-gradient-to-br from-gray-900 via-brand-navy to-slate-900 text-white rounded-3xl p-6 sm:p-10 shadow-2xl relative overflow-hidden border border-gray-800"
      >
        {/* Specular sheen / glowing line overlay */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />

        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center relative z-10">
          {/* Content */}
          <div className="md:col-span-6 space-y-5">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-500/20 text-blue-300 text-xs font-semibold border border-blue-400/30">
              <Car className="w-4 h-4 text-blue-400" />
              <span>Ultimate Dream Ride</span>
            </div>

            <h3 className="text-3xl sm:text-5xl font-extrabold font-heading text-transparent bg-clip-text bg-gradient-to-r from-white via-slate-100 to-amber-300">
              The BMW 340i 🏎️
            </h3>

            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
              Wandeme loves cars in general, but no matter how many supercars exist in the world, he <strong className="text-white">always circles right back</strong> to the legendary BMW 340i. Smooth, inline-6 power, and unmatched class.
            </p>

            <div className="grid grid-cols-2 gap-4 pt-2">
              <div className="p-3.5 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm">
                <div className="flex items-center gap-2 text-amber-400 text-xs font-bold mb-1">
                  <Gauge className="w-4 h-4" /> Engine
                </div>
                <p className="text-xs text-slate-300 font-semibold">B58 Inline 6 Turbo</p>
              </div>

              <div className="p-3.5 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm">
                <div className="flex items-center gap-2 text-blue-400 text-xs font-bold mb-1">
                  <Zap className="w-4 h-4" /> Status
                </div>
                <p className="text-xs text-slate-300 font-semibold">Future Garage Queen 👑</p>
              </div>
            </div>
          </div>

          {/* Car Image */}
          <div className="md:col-span-6">
            <div className="relative w-full h-64 sm:h-80 rounded-2xl overflow-hidden border border-white/15 shadow-xl group">
              <Image
                src="https://images.unsplash.com/photo-1555215695-3004980ad54e?auto=format&fit=crop&w=1000&q=80"
                alt="BMW 340i Placeholder"
                fill
                sizes="(max-width: 768px) 100vw, 500px"
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900/90 via-transparent to-transparent flex items-end justify-between p-4">
                <span className="text-xs font-bold text-amber-300 flex items-center gap-1">
                  <Sparkles className="w-4 h-4 text-amber-400" /> B58 Powerhouse
                </span>
                <span className="text-[10px] bg-white/20 backdrop-blur-sm text-white px-2 py-0.5 rounded font-mono">
                  M Performance
                </span>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
