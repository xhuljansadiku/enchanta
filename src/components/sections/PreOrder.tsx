"use client";

import { useState } from "react";
import ArtPlaceholder from "@/components/ArtPlaceholder";

export default function PreOrder() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setSubmitted(true);
  };

  return (
    <section
      id="preorder"
      className="relative overflow-hidden bg-gradient-to-b from-night-900 via-night-800 to-night-700 py-24 text-white"
    >
      {/* stars */}
      <span className="absolute top-12 left-[18%] h-1 w-1 rounded-full bg-white/70" />
      <span className="absolute top-24 right-[22%] h-1.5 w-1.5 rounded-full bg-white/60" />
      <span className="absolute bottom-32 left-[30%] h-1 w-1 rounded-full bg-white/50" />
      <span className="absolute top-1/2 right-[12%] h-1.5 w-1.5 rounded-full bg-white/60" />
      <span className="animate-float pointer-events-none absolute top-10 right-1/3 text-2xl opacity-60">
        ✦
      </span>
      <span className="animate-float pointer-events-none absolute bottom-16 left-1/4 text-xl opacity-50 [animation-delay:3s]">
        ✧
      </span>

      <div className="relative mx-auto max-w-5xl px-6 text-center">
        <span className="font-script text-2xl text-lavender-300">reserve a piece of magic</span>
        <h2 className="mt-1 bg-gradient-to-r from-white via-lavender-100 to-sky-100 bg-clip-text font-display text-4xl font-bold text-transparent sm:text-5xl">
          Celestial Pre-order
        </h2>

        <div className="mt-12 grid items-center gap-10 sm:grid-cols-[minmax(0,220px)_minmax(0,420px)] sm:justify-center">
          <ArtPlaceholder
            gradient="bg-gradient-to-b from-sky-300 to-lavender-300"
            icon="🌥️"
            className="aspect-[4/5] w-full rounded-2xl border-8 border-white/90 shadow-2xl"
          />

          <form
            onSubmit={handleSubmit}
            className="relative rounded-3xl border border-white/10 bg-white/5 p-7 text-left shadow-2xl backdrop-blur-md"
          >
            <span className="absolute -top-3 left-1/2 h-2 w-2 -translate-x-1/2 rounded-full border border-white/40" />
            <p className="text-center text-xs font-semibold tracking-[0.25em] text-white/60 uppercase">
              Register for early access
            </p>

            <div className="mt-5 flex flex-col gap-3 sm:flex-row">
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                className="w-full rounded-full border border-white/10 bg-white/90 px-5 py-3 text-sm text-plum-700 placeholder:text-plum-700/40 focus:ring-2 focus:ring-lavender-300 focus:outline-none"
              />
              <button
                type="submit"
                className="rounded-full bg-lavender-100 px-6 py-3 text-sm font-semibold text-plum-700 transition hover:bg-white"
              >
                Submit
              </button>
            </div>
            {submitted && (
              <p className="mt-3 text-center text-sm text-blossom-100">
                Thank you — you&rsquo;re on the list! ✨
              </p>
            )}

            <p className="mt-5 text-center text-xs tracking-[0.2em] text-white/40 uppercase">
              or chat with us
            </p>
            <a
              href="https://wa.me/"
              target="_blank"
              rel="noopener noreferrer"
              className="mx-auto mt-3 flex w-fit items-center gap-2 rounded-full bg-emerald-500 px-6 py-2.5 text-sm font-semibold text-white shadow-lg shadow-emerald-900/40 transition hover:-translate-y-0.5 hover:bg-emerald-600"
            >
              <span aria-hidden>💬</span> WhatsApp Ada
            </a>
          </form>
        </div>

        <p className="mt-10 text-sm text-white/40">Preorder Product ex.</p>
      </div>
    </section>
  );
}
