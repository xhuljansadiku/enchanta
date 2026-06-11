export default function Hero() {
  return (
    <section
      id="top"
      className="relative flex min-h-screen items-center justify-center overflow-hidden bg-gradient-to-b from-sky-100 via-blossom-100 to-lavender-100 pt-28 pb-20"
    >
      {/* dreamy sky glows, drifting for a more alive feel */}
      <div className="animate-blob pointer-events-none absolute -top-24 left-1/4 h-72 w-72 rounded-full bg-blossom-300/40 blur-3xl" />
      <div className="animate-blob [animation-delay:-5s] pointer-events-none absolute top-10 right-0 h-80 w-80 rounded-full bg-lavender-300/40 blur-3xl" />
      <div className="animate-blob [animation-delay:-10s] pointer-events-none absolute bottom-0 left-0 h-64 w-64 rounded-full bg-sky-300/40 blur-3xl" />
      <div className="animate-blob [animation-delay:-3s] pointer-events-none absolute right-10 -bottom-16 h-72 w-72 rounded-full bg-plum-300/30 blur-3xl" />

      {/* flowing side gradients */}
      <div className="animate-gradient-flow pointer-events-none absolute top-0 -left-1/3 h-full w-2/3 bg-[length:200%_200%] bg-gradient-to-br from-blossom-300/50 via-lavender-300/40 to-sky-300/50 blur-3xl" />
      <div className="animate-gradient-flow [animation-delay:-8s] pointer-events-none absolute top-0 -right-1/3 h-full w-2/3 bg-[length:200%_200%] bg-gradient-to-bl from-sky-300/50 via-blossom-300/40 to-lavender-300/50 blur-3xl" />

      <div className="relative mx-auto flex max-w-3xl flex-col items-center px-6 text-center">
        <span className="animate-hero-in [animation-delay:0.1s] font-script text-2xl text-plum-500 sm:text-3xl">
          welcome to a little meadow of magic
        </span>
        <h1 className="animate-hero-in [animation-delay:0.35s] mt-3 font-display text-5xl font-semibold tracking-wide text-plum-700 sm:text-6xl md:text-7xl">
          ENCHANTA
        </h1>
        <p className="animate-hero-in [animation-delay:0.55s] mt-2 font-display text-sm tracking-[0.4em] text-plum-500 uppercase">
          Made by Ada
        </p>

        {/* entrance wrapper so float can run freely after heroIn */}
        <div className="animate-hero-in [animation-delay:0.72s]">
          <div className="animate-float relative mt-12 flex flex-col items-center">
            <div className="relative w-72 rounded-2xl border-[6px] border-plum-700 bg-plum-900 p-3 shadow-2xl shadow-plum-900/40 sm:w-96">
              <video
                src="/videos/hero.mp4"
                autoPlay
                loop
                muted
                playsInline
                className="h-44 w-full rounded-lg object-cover sm:h-60"
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
