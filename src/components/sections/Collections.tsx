"use client";

import { useState } from "react";
import ArtPlaceholder from "@/components/ArtPlaceholder";

type Category = "All Relics" | "Bags" | "Outfits";

const FILTERS: Category[] = ["All Relics", "Bags", "Outfits"];

const RELICS: { name: string; price: string; desc: string; icon: string; category: Category }[] = [
  {
    name: "Forest Moon Bag",
    price: "$180",
    desc: "A lunar-inspired velvet bag.",
    icon: "🌙",
    category: "Bags",
  },
  {
    name: "Willow Wrap Dress",
    price: "$240",
    desc: "Flowing silk dress.",
    icon: "🌿",
    category: "Outfits",
  },
  {
    name: "Pixie Dust Mini",
    price: "$95",
    desc: "Tiny pouch filling.",
    icon: "✨",
    category: "Bags",
  },
  {
    name: "Starlit Cardigan",
    price: "$210",
    desc: "Cloud-soft knit for cool evenings.",
    icon: "⭐",
    category: "Outfits",
    },
  {
    name: "Dewdrop Crossbody",
    price: "$150",
    desc: "Petite, dainty, dipped in pearls.",
    icon: "💧",
    category: "Bags",
  },
  {
    name: "Meadow Slip Dress",
    price: "$260",
    desc: "Hand-finished hem & lace trim.",
    icon: "🌼",
    category: "Outfits",
  },
];

export default function Collections() {
  const [filter, setFilter] = useState<Category>("All Relics");

  const visible =
    filter === "All Relics" ? RELICS : RELICS.filter((r) => r.category === filter);

  return (
    <section id="collections" className="relative">
      {/* Magical Glow banner */}
      <div className="relative flex min-h-[26rem] items-center overflow-hidden bg-gradient-to-br from-sky-100 via-blossom-100 to-blossom-300 px-6 py-20 sm:min-h-[30rem]">
        <div className="pointer-events-none absolute top-10 left-0 text-6xl opacity-50 sm:text-8xl">
          🌸
        </div>
        <div className="pointer-events-none absolute right-6 bottom-6 text-6xl opacity-40 sm:text-8xl">
          🌸
        </div>
        <div className="animate-float pointer-events-none absolute bottom-10 left-1/2 hidden -translate-x-1/2 text-7xl sm:block">
          🛍️
        </div>

        <div className="relative mx-auto flex max-w-3xl flex-col items-center text-center">
          <span className="font-script text-2xl text-plum-500">a softer kind of shine</span>
          <h2 className="mt-2 font-display text-4xl font-bold tracking-wide text-plum-700 sm:text-5xl">
            MAGICAL GLOW
          </h2>
          <a
            href="#preorder"
            className="mt-7 inline-flex items-center justify-center rounded-full bg-plum-700 px-10 py-3.5 text-sm font-semibold tracking-[0.15em] text-white uppercase shadow-lg shadow-plum-900/30 transition hover:-translate-y-0.5 hover:bg-plum-900"
          >
            Order yours now
          </a>
        </div>
      </div>

      {/* Enchanted Collections grid */}
      <div className="relative overflow-hidden bg-gradient-to-b from-plum-500 via-plum-700 to-plum-900 px-6 py-24 text-white">
        <div className="pointer-events-none absolute top-1/4 right-10 h-64 w-64 rounded-full bg-blossom-300/15 blur-3xl" />
        <div className="pointer-events-none absolute bottom-10 left-10 h-72 w-72 rounded-full bg-lavender-300/15 blur-3xl" />

        <div className="relative mx-auto max-w-6xl text-center">
          <h2 className="bg-gradient-to-r from-white via-blossom-100 to-sky-100 bg-clip-text font-display text-4xl font-bold text-transparent sm:text-5xl">
            Enchanted Collections
          </h2>

          <div className="mt-8 inline-flex flex-wrap items-center justify-center gap-3 rounded-full border border-white/15 bg-white/5 p-2 backdrop-blur-sm">
            {FILTERS.map((label) => (
              <button
                key={label}
                type="button"
                onClick={() => setFilter(label)}
                className={`rounded-full px-5 py-2 text-sm font-semibold tracking-wide transition ${
                  filter === label
                    ? "bg-white text-plum-700 shadow-md"
                    : "text-white/70 hover:bg-white/10 hover:text-white"
                }`}
              >
                {label}
              </button>
            ))}
          </div>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {visible.map((relic) => (
              <div
                key={relic.name}
                className="flex flex-col rounded-[1.75rem] border border-white/10 bg-white/5 p-5 text-left backdrop-blur-md transition hover:-translate-y-1 hover:bg-white/10"
              >
                <ArtPlaceholder
                  gradient="bg-gradient-to-br from-plum-300/70 to-plum-700/70"
                  icon={relic.icon}
                  className="aspect-square w-full rounded-2xl"
                />
                <h3 className="mt-5 font-display text-lg font-semibold">{relic.name}</h3>
                <span className="mt-1 font-display text-base font-bold text-blossom-100">
                  {relic.price}
                </span>
                <p className="mt-2 text-sm text-white/65 italic">{relic.desc}</p>
                <button
                  type="button"
                  className="mt-5 rounded-full bg-plum-900/70 py-2.5 text-sm font-semibold tracking-wide text-white transition hover:bg-plum-900"
                >
                  Buy Now
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
