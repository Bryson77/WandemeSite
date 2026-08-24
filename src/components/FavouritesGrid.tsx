"use client";

import { motion } from "framer-motion";
import { Utensils, Cookie, Cake, Shirt, Star } from "lucide-react";

export default function FavouritesGrid() {
  const items = [
    {
      icon: <Utensils className="w-5 h-5 text-zinc-900" />,
      category: "Favorite Meal",
      title: "Spaghetti & Mince 🍝",
      detail: "Pap runs a close second (Venda pride 🇿🇦). Nothing beats a full plate.",
      rotation: "rotate-[-1deg]",
    },
    {
      icon: <Cookie className="w-5 h-5 text-zinc-900" />,
      category: "Go-To Snacks",
      title: "Oreos + Top Deck 🍫",
      detail: "\"Broke but he'll make a plan\" — snack stash is non-negotiable.",
      rotation: "rotate-[1.5deg]",
    },
    {
      icon: <Cake className="w-5 h-5 text-zinc-900" />,
      category: "Top Cake",
      title: "Checkers Mousse / Woolies Swirl 🍰",
      detail: "Checkers Chocolate Mousse or Woolworths Caramel Swirl — zero competition.",
      rotation: "rotate-[1deg]",
    },
    {
      icon: <Shirt className="w-5 h-5 text-zinc-900" />,
      category: "Go-To Brand",
      title: "Old Khaki 👕",
      detail: "Dedicated t-shirt collector. If it's Old Khaki, he's adding it to the wardrobe.",
      rotation: "rotate-[-1.5deg]",
    },
  ];

  return (
    <section className="py-10 px-4 max-w-5xl mx-auto">
      <div className="text-center mb-8 font-typewriter">
        <div className="inline-flex items-center gap-2 px-3 py-1 bg-zinc-100 text-zinc-900 text-xs font-bold border border-zinc-900 uppercase tracking-widest mb-2">
          <Star className="w-3.5 h-3.5" />
          <span>ESSENTIAL CUTOUTS</span>
        </div>
        <h3 className="text-2xl sm:text-4xl font-extrabold text-zinc-900 font-magazine">
          Wandeme&apos;s Favorites ⭐️
        </h3>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {items.map((item, index) => (
          <motion.div
            key={item.category}
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.3, delay: index * 0.08 }}
            className={`p-6 bg-white border-2 border-zinc-900 flex flex-col justify-between shadow-[5px_5px_0px_0px_rgba(0,0,0,1)] ${item.rotation} hover:rotate-0 transition-transform duration-300 relative`}
          >
            {/* Top Tape Effect */}
            <div className="absolute -top-3 left-4 w-14 h-4 bg-amber-100/90 border border-amber-300/80 rotate-[-2deg] shadow-sm" />

            <div>
              <div className="flex items-center justify-between mb-3">
                <div className="p-2.5 bg-zinc-100 border border-zinc-900">
                  {item.icon}
                </div>
                <span className="text-[11px] font-bold text-zinc-500 uppercase tracking-wider font-mono">
                  {item.category}
                </span>
              </div>

              <h4 className="text-lg font-bold text-zinc-900 mb-1 font-magazine">{item.title}</h4>
              <p className="text-xs text-zinc-700 leading-relaxed font-typewriter">{item.detail}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
