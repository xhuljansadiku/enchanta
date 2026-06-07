export default function Hero() {
  return (
    <section
      id="top"
      className="relative flex min-h-screen items-center justify-center overflow-hidden bg-gradient-to-b from-sky-100 via-blossom-100 to-lavender-100 pt-28 pb-20"
    >
      {/* dreamy sky glows */}
      <div className="pointer-events-none absolute -top-24 left-1/4 h-72 w-72 rounded-full bg-blossom-300/40 blur-3xl" />
      <div className="pointer-events-none absolute top-10 right-0 h-80 w-80 rounded-full bg-lavender-300/40 blur-3xl" />
      <div className="pointer-events-none absolute bottom-0 left-0 h-64 w-64 rounded-full bg-sky-300/40 blur-3xl" />

      {/* drifting petals */}
      <span className="animate-drift pointer-events-none absolute top-1/3 left-[12%] text-2xl opacity-70">
        🌸
      </span>
      <span className="animate-drift pointer-events-none absolute top-1/4 right-[15%] text-xl opacity-60 [animation-delay:4s]">
        🌷
      </span>
      <span className="animate-drift pointer-events-none absolute bottom-1/4 left-[20%] text-lg opacity-50 [animation-delay:9s]">
        ✨
      </span>

      <div className="relative mx-auto flex max-w-3xl flex-col items-center px-6 text-center">
        <span className="font-script text-2xl text-plum-500 sm:text-3xl">
          welcome to a little meadow of magic
        </span>
        <h1 className="mt-3 font-display text-5xl font-semibold tracking-wide text-plum-700 sm:text-6xl md:text-7xl">
          ENCHANTA
        </h1>
        <p className="mt-2 font-display text-sm tracking-[0.4em] text-plum-500 uppercase">
          Made by Ada
        </p>

        {/* the retro tv in the flower field */}
        <div className="animate-float relative mt-12 flex flex-col items-center">
          <div className="absolute -top-3 left-1/2 h-12 w-px -translate-x-1/2 -rotate-12 bg-plum-500/50" />
          <div className="relative w-56 rounded-2xl border-[6px] border-plum-700 bg-plum-900 p-3 shadow-2xl shadow-plum-900/40 sm:w-64">
            <div className="flex h-36 items-center justify-center rounded-lg bg-gradient-to-br from-lavender-300 via-blossom-300 to-plum-300 sm:h-40">
              <div className="flex flex-col items-center gap-1 text-white">
                <span className="text-3xl">🧚</span>
                <span className="font-display text-sm font-semibold tracking-wide">
                  Enchanta
                </span>
                <span className="font-script text-xs">Made by Ada</span>
              </div>
            </div>
            <div className="absolute top-1/2 -right-2.5 flex -translate-y-1/2 flex-col gap-2">
              <span className="h-3 w-3 rounded-full bg-blossom-300" />
              <span className="h-3 w-3 rounded-full bg-lavender-300" />
            </div>
          </div>
          {/* little bunny */}
          <div className="-mt-1 text-3xl">🐇</div>
        </div>

        <p className="mt-10 max-w-xl text-base leading-relaxed text-plum-700/80 sm:text-lg">
          Enchanta weaves hand-crocheted bags, dresses & accessories — each
          piece stitched slowly, dipped in pastel dreams, and made to feel like
          a little piece of folklore you can carry with you.
        </p>

        <a
          href="#about"
          className="mt-8 inline-flex items-center gap-2 rounded-full bg-plum-700 px-7 py-3 text-sm font-semibold tracking-wide text-white shadow-lg shadow-plum-700/30 transition hover:-translate-y-0.5 hover:bg-plum-900"
        >
          Step into the meadow
          <span aria-hidden>↓</span>
        </a>
      </div>
    </section>
  );
}
