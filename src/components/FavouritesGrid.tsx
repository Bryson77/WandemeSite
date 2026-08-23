"use client";

import { motion } from "framer-motion";
import { Utensils, Cookie, Cake, Shirt, Heart } from "lucide-react";

export default function FavouritesGrid() {
  const items = [
    {
      icon: <Utensils className="w-6 h-6 text-amber-500" />,
      category: "Favorite Meal",
      title: "Spaghetti & Mince 🍝",
      detail: "Pap runs a close second (Venda pride strong 🇿🇦). Nothing beats a full plate.",
      bgColor: "bg-amber-50 border-amber-200/80",
      badgeColor: "bg-amber-100 text-amber-800",
    },
    {
      icon: <Cookie className="w-6 h-6 text-amber-700" />,
      category: "Go-To Snacks",
      title: "Oreos + Top Deck 🍫",
      detail: "\"Broke but he'll make a plan\" — snack stash is non-negotiable.",
      bgColor: "bg-orange-50 border-orange-200/80",
      badgeColor: "bg-orange-100 text-orange-800",
    },
    {
      icon: <Cake className="w-6 h-6 text-pink-500" />,
      category: "Top Birthday Cakes",
      title: "Checkers Mousse / Woolies Swirl 🍰",
      detail: "Checkers Chocolate Mousse or Woolworths Caramel Swirl — zero competition.",
      bgColor: "bg-pink-50 border-pink-200/80",
      badgeColor: "bg-pink-100 text-pink-800",
    },
    {
      icon: <Shirt className="w-6 h-6 text-indigo-500" />,
      category: "Go-To Brand",
      title: "Old Khaki 👕",
      detail: "Dedicated t-shirt collector. If it's Old Khaki, he's adding it to the wardrobe.",
      bgColor: "bg-indigo-50 border-indigo-200/80",
      badgeColor: "bg-indigo-100 text-indigo-800",
    },
  ];

  return (
    <section className="py-12 px-4 max-w-5xl mx-auto">
      <div className="text-center mb-8">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-100 text-amber-800 text-xs font-semibold mb-2">
          <Heart className="w-4 h-4 text-brand-coral fill-brand-coral" />
          <span>The Essentials</span>
        </div>
        <h3 className="text-3xl sm:text-4xl font-extrabold text-brand-navy font-heading">
          Wandeme&apos;s Favorites ⭐️
        </h3>
        <p className="text-gray-600 text-sm max-w-md mx-auto mt-1">
          A quick guide to his absolute favorite things in life.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {items.map((item, index) => (
          <motion.div
            key={item.category}
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
            whileHover={{ y: -4 }}
            className={`p-6 rounded-3xl border ${item.bgColor} shadow-sm hover:shadow-md transition-all flex flex-col justify-between`}
          >
            <div>
              <div className="flex items-center justify-between mb-4">
                <div className="p-3 bg-white rounded-2xl shadow-sm border border-slate-100">
                  {item.icon}
                </div>
                <span className={`text-[11px] font-bold px-3 py-1 rounded-full ${item.badgeColor}`}>
                  {item.category}
                </span>
              </div>

              <h4 className="text-xl font-bold text-brand-navy font-heading mb-2">
                {item.title}
              </h4>
              <p className="text-sm text-gray-600 leading-relaxed">{item.detail}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
