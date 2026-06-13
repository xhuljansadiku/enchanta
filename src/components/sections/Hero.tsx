"use client";

import { useState } from "react";

const SPARKLES = [
  { top: "12%", left: "8%", size: 6, delay: "0s", duration: "3.2s", opacity: 0.9 },
  { top: "22%", left: "85%", size: 4, delay: "0.6s", duration: "2.6s", opacity: 0.7 },
  { top: "68%", left: "12%", size: 5, delay: "1.1s", duration: "3.8s", opacity: 0.8 },
  { top: "78%", left: "90%", size: 4, delay: "1.8s", duration: "3s", opacity: 0.65 },
  { top: "8%", left: "45%", size: 3, delay: "0.3s", duration: "2.4s", opacity: 0.6 },
  { top: "35%", left: "92%", size: 5, delay: "2.2s", duration: "3.5s", opacity: 0.85 },
  { top: "52%", left: "5%", size: 4, delay: "1.4s", duration: "2.9s", opacity: 0.7 },
  { top: "90%", left: "35%", size: 3, delay: "0.9s", duration: "2.7s", opacity: 0.6 },
  { top: "15%", left: "65%", size: 5, delay: "2.6s", duration: "3.3s", opacity: 0.8 },
  { top: "44%", left: "28%", size: 3, delay: "1.6s", duration: "2.5s", opacity: 0.55 },
  { top: "30%", left: "18%", size: 4, delay: "0.4s", duration: "3.1s", opacity: 0.75 },
  { top: "62%", left: "70%", size: 6, delay: "2s", duration: "3.6s", opacity: 0.85 },
  { top: "85%", left: "60%", size: 3, delay: "1.2s", duration: "2.8s", opacity: 0.6 },
  { top: "5%", left: "25%", size: 4, delay: "2.4s", duration: "3.4s", opacity: 0.7 },
  { top: "48%", left: "50%", size: 3, delay: "0.7s", duration: "2.6s", opacity: 0.5 },
  { top: "72%", left: "40%", size: 5, delay: "1.9s", duration: "3.2s", opacity: 0.8 },
];

export default function Hero() {
  const [tilt, setTilt] = useState({ x: 0, y: 0 });

  function handleMouseMove(e: React.MouseEvent<HTMLElement>) {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    setTilt({ x, y });
  }

  return (
    <section
      id="top"
      onMouseMove={handleMouseMove}
      onMouseLeave={() => setTilt({ x: 0, y: 0 })}
      className="relative flex min-h-screen items-center justify-center overflow-hidden bg-gradient-to-b from-sky-100 via-blossom-100 to-lavender-100 pt-28 pb-20"
    >
      {/* slow breathing light, like the meadow inhaling */}
      <div className="animate-breathing-glow pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_40%,rgba(251,220,236,0.7),transparent_60%)]" />

      {/* dreamy sky glows, drifting for a more alive feel */}
      <div className="animate-blob pointer-events-none absolute -top-24 left-1/4 h-72 w-72 rounded-full bg-blossom-300/40 blur-3xl" />
      <div className="animate-blob [animation-delay:-5s] pointer-events-none absolute top-10 right-0 h-80 w-80 rounded-full bg-lavender-300/40 blur-3xl" />
      <div className="animate-blob [animation-delay:-10s] pointer-events-none absolute bottom-0 left-0 h-64 w-64 rounded-full bg-sky-300/40 blur-3xl" />
      <div className="animate-blob [animation-delay:-3s] pointer-events-none absolute right-10 -bottom-16 h-72 w-72 rounded-full bg-plum-300/30 blur-3xl" />

      {/* flowing side gradients */}
      <div className="animate-gradient-flow pointer-events-none absolute top-0 -left-1/3 h-full w-2/3 bg-[length:200%_200%] bg-gradient-to-br from-blossom-300/50 via-lavender-300/40 to-sky-300/50 blur-3xl" />
      <div className="animate-gradient-flow [animation-delay:-8s] pointer-events-none absolute top-0 -right-1/3 h-full w-2/3 bg-[length:200%_200%] bg-gradient-to-bl from-sky-300/50 via-blossom-300/40 to-lavender-300/50 blur-3xl" />

      {/* magical drifting sparkles */}
      <div className="pointer-events-none absolute inset-0">
        {SPARKLES.map((s, i) => (
          <span
            key={i}
            className="sparkle animate-twinkle"
            style={{
              top: s.top,
              left: s.left,
              width: s.size,
              height: s.size,
              animationDelay: s.delay,
              animationDuration: s.duration,
              ["--twinkle-opacity" as string]: s.opacity,
            }}
          />
        ))}
      </div>

      {/* organic floating petals, parallax with the cursor */}
      <div
        className="animate-float pointer-events-none absolute top-[18%] left-[10%] h-20 w-20 rounded-[40%] bg-blossom-300/40 blur-xl transition-transform duration-300 ease-out sm:h-28 sm:w-28"
        style={{ transform: `translate(${tilt.x * -24}px, ${tilt.y * -24}px)` }}
      />
      <div
        className="animate-float [animation-delay:-3s] pointer-events-none absolute top-[12%] right-[8%] h-24 w-24 rounded-[45%] bg-lavender-300/40 blur-xl transition-transform duration-300 ease-out sm:h-32 sm:w-32"
        style={{ transform: `translate(${tilt.x * 30}px, ${tilt.y * 30}px)` }}
      />
      <div
        className="animate-float [animation-delay:-1.5s] pointer-events-none absolute bottom-[14%] left-[6%] h-16 w-16 rounded-[35%] bg-sky-300/40 blur-xl transition-transform duration-300 ease-out sm:h-24 sm:w-24"
        style={{ transform: `translate(${tilt.x * 18}px, ${tilt.y * -18}px)` }}
      />
      <div
        className="animate-float [animation-delay:-4s] pointer-events-none absolute right-[12%] bottom-[10%] h-20 w-20 rounded-[42%] bg-plum-300/30 blur-xl transition-transform duration-300 ease-out sm:h-28 sm:w-28"
        style={{ transform: `translate(${tilt.x * -28}px, ${tilt.y * 22}px)` }}
      />

      <div className="relative mx-auto flex max-w-3xl flex-col items-center px-6 text-center">
        <span className="animate-hero-in [animation-delay:0.1s] font-script text-2xl text-plum-500 sm:text-3xl">
          welcome to a little meadow of magic
        </span>
        <h1 className="animate-title-glow mt-3 flex font-display text-5xl font-semibold tracking-wide text-plum-700 sm:text-6xl md:text-7xl">
          {"ENCHANTA".split("").map((letter, i) => (
            <span
              key={i}
              className="animate-letter-pop inline-block"
              style={{ animationDelay: `${0.35 + i * 0.07}s` }}
            >
              {letter}
            </span>
          ))}
        </h1>
        <p className="animate-hero-in [animation-delay:0.55s] mt-2 font-display text-sm tracking-[0.4em] text-plum-500 uppercase">
          Made by Ada
        </p>

        {/* entrance wrapper so float can run freely after heroIn */}
        <div className="animate-hero-in [animation-delay:0.72s]">
          <div className="animate-float relative mt-12 flex flex-col items-center">
            <div className="glow-ring arch-frame relative w-72 border-[6px] border-plum-700 bg-plum-900 p-3 shadow-2xl shadow-plum-900/40 sm:w-96">
              <video
                src="/videos/hero.mp4"
                autoPlay
                loop
                muted
                playsInline
                className="arch-frame h-44 w-full object-cover sm:h-60"
              />
            </div>
          </div>
        </div>

        <p className="animate-hero-in [animation-delay:1s] mt-10 max-w-xl text-base leading-relaxed text-plum-700/80 sm:text-lg">
          Enchanta weaves hand-crocheted bags, dresses &amp; accessories — each
          piece stitched slowly, dipped in pastel dreams, and made to feel like
          a little piece of folklore you can carry with you.
        </p>

        <a
          href="#about"
          className="btn-shine animate-hero-in [animation-delay:1.2s] mt-8 inline-flex items-center gap-2 rounded-full bg-plum-700 px-7 py-3 text-sm font-semibold tracking-wide text-white shadow-lg shadow-plum-700/30 transition-all duration-400 ease-out hover:-translate-y-1 hover:scale-[1.04] hover:bg-plum-900 hover:shadow-xl hover:shadow-plum-700/40"
        >
          Step into the meadow
          <span aria-hidden>↓</span>
        </a>
      </div>
    </section>
  );
}
