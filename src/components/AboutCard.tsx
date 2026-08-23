"use client";

import { motion } from "framer-motion";
import { Moon, Smile, ShieldAlert, UtensilsCrossed } from "lucide-react";
import Image from "next/image";

export default function AboutCard() {
  const traits = [
    {
      icon: <Moon className="w-5 h-5 text-amber-500" />,
      title: "Sleep Enthusiast 😴",
      desc: "There are literally 10+ videos of him sleeping. Napping is not a hobby, it's a full-time profession.",
    },
    {
      icon: <Smile className="w-5 h-5 text-red-500" />,
      title: "The Dying Laugh 💀",
      desc: "Can't laugh quietly to save his life. When something's funny, he sounds like he's gasping for air.",
    },
    {
      icon: <ShieldAlert className="w-5 h-5 text-orange-500" />,
      title: "Rule #1: Do Not Wake Him 🚫",
      desc: "Waking him up is a dangerous move. Proceed only at your own risk.",
    },
    {
      icon: <UtensilsCrossed className="w-5 h-5 text-emerald-500" />,
      title: "No Disappointments 🍔",
      desc: "Hates restaurant disappointment with a passion. If in doubt, burger and chips it is.",
    },
  ];

  return (
    <section className="py-16 px-4 max-w-5xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
        className="bg-white rounded-3xl p-6 sm:p-10 shadow-xl border border-amber-100/80 relative overflow-hidden"
      >
        {/* Background accent blobs */}
        <div className="absolute -top-10 -right-10 w-40 h-40 bg-amber-100 rounded-full blur-2xl opacity-60 pointer-events-none" />
        <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-orange-100 rounded-full blur-2xl opacity-60 pointer-events-none" />

        <div className="relative z-10 grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
          {/* Avatar / Photo Placeholder */}
          <div className="md:col-span-5 flex flex-col items-center justify-center text-center">
            <div className="relative w-48 h-48 sm:w-56 sm:h-56 rounded-full overflow-hidden border-4 border-brand-gold shadow-lg group">
              <Image
                src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=600&q=80"
                alt="Wandeme Portrait Placeholder"
                fill
                sizes="(max-width: 768px) 100vw, 300px"
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-navy/60 via-transparent to-transparent flex items-end justify-center p-4">
                <span className="text-white text-xs font-semibold uppercase tracking-wider bg-brand-gold/80 backdrop-blur-sm px-3 py-1 rounded-full">
                  The Man of the Hour
                </span>
              </div>
            </div>
            <h2 className="mt-4 text-2xl font-bold text-brand-navy font-heading">
              Wandeme Ipfi Mamatsharaga
            </h2>
            <p className="text-sm text-gray-500 font-medium">Venda Pride • Nap Master • Car Guy</p>
          </div>

          {/* Bio & Quirks List */}
          <div className="md:col-span-7 space-y-6">
            <div>
              <h3 className="text-sm font-bold uppercase tracking-widest text-brand-gold">
                Personality & Quirks
              </h3>
              <h4 className="text-3xl font-extrabold text-brand-navy font-heading mt-1">
                Who is Wandeme?
              </h4>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {traits.map((trait, index) => (
                <motion.div
                  key={trait.title}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.4 }}
                  className="bg-brand-cream/60 p-4 rounded-2xl border border-amber-100/60 hover:shadow-md transition-shadow"
                >
                  <div className="flex items-center gap-2 mb-1">
                    {trait.icon}
                    <h5 className="font-bold text-brand-navy text-sm">{trait.title}</h5>
                  </div>
                  <p className="text-xs text-gray-600 leading-relaxed">{trait.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
