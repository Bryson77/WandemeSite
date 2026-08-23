"use client";

import { motion } from "framer-motion";
import { Car, Gauge, Zap } from "lucide-react";
import Image from "next/image";

export default function DreamCarCard() {
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
              <Car className="w-3.5 h-3.5" />
              <span>Dream Car</span>
            </div>

            <h3 className="text-2xl sm:text-4xl font-extrabold text-white">
              The BMW 340i 🏎️
            </h3>

            <p className="text-slate-300 text-sm leading-relaxed">
              Wandeme loves cars in general, but no matter how many supercars exist in the world, he <strong className="text-white">always circles right back</strong> to the legendary BMW 340i.
            </p>

            <div className="grid grid-cols-2 gap-3 pt-1">
              <div className="p-3 rounded-xl bg-[#090D16] border border-slate-800">
                <div className="flex items-center gap-1.5 text-sky-400 text-xs font-bold mb-0.5">
                  <Gauge className="w-3.5 h-3.5" /> Engine
                </div>
                <p className="text-xs text-slate-300 font-semibold">B58 Inline 6 Turbo</p>
              </div>

              <div className="p-3 rounded-xl bg-[#090D16] border border-slate-800">
                <div className="flex items-center gap-1.5 text-blue-400 text-xs font-bold mb-0.5">
                  <Zap className="w-3.5 h-3.5" /> Status
                </div>
                <p className="text-xs text-slate-300 font-semibold">Future Garage Queen 👑</p>
              </div>
            </div>
          </div>

          {/* Image */}
          <div className="md:col-span-6">
            <div className="relative w-full h-64 rounded-2xl overflow-hidden border border-slate-700 shadow-md">
              <Image
                src="/images/bmw340i.jpg"
                alt="BMW 340i"
                fill
                sizes="(max-width: 768px) 100vw, 500px"
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
