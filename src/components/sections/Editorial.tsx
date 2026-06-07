import ArtPlaceholder from "@/components/ArtPlaceholder";

export default function Editorial() {
  return (
    <section
      id="editorial"
      className="relative overflow-hidden bg-gradient-to-br from-blossom-50 via-white to-lavender-100 py-24"
    >
      <div className="pointer-events-none absolute top-0 left-0 h-72 w-72 rounded-full bg-blossom-300/25 blur-3xl" />
      <div className="pointer-events-none absolute right-0 bottom-0 h-80 w-80 rounded-full bg-lavender-300/25 blur-3xl" />

      <div className="relative mx-auto max-w-5xl rounded-[2rem] border border-plum-300/20 bg-white/70 px-6 py-12 shadow-2xl shadow-plum-700/10 backdrop-blur-sm sm:px-12 sm:py-16">
        <header className="border-b border-plum-700/15 pb-6 text-center">
          <h2 className="font-display text-4xl font-bold tracking-wide text-plum-700 sm:text-5xl">
            ENCHANTA
          </h2>
          <p className="font-script mt-1 text-xl text-plum-500">the editorial archive</p>
          <div className="mt-4 flex justify-center gap-6 text-xs tracking-[0.25em] text-plum-700/50 uppercase">
            <span>Vol. 01</span>
            <span>Est. 2026</span>
          </div>
        </header>

        <div className="mt-10 grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
          <ArtPlaceholder
            gradient="bg-gradient-to-br from-lavender-300 via-blossom-200 to-white"
            icon="🤍"
            label="lace study, no. 1"
            className="aspect-[4/5] w-full rounded-2xl border-4 border-white shadow-xl"
          />

          <div className="flex flex-col gap-6">
            <ArtPlaceholder
              gradient="bg-gradient-to-br from-sky-300 via-blossom-300 to-lavender-300"
              icon="🌺"
              label="the silk study"
              className="aspect-[5/4] w-full -rotate-2 rounded-xl border-4 border-white shadow-lg"
            />
            <p className="-mt-1 ml-1 text-sm text-plum-700/60 italic">
              The Silk Study — hand-dyed accessories tailored for dreamers.
            </p>

            <ArtPlaceholder
              gradient="bg-gradient-to-br from-sky-500 via-sky-300 to-white"
              icon="🏖️"
              label="seaside, golden hour"
              className="aspect-[4/5] w-full max-w-[14rem] rotate-2 self-end rounded-xl border-4 border-white shadow-lg"
            />
          </div>
        </div>

        <blockquote className="mt-10 border-l-2 border-plum-500/40 pl-6 font-display text-lg text-plum-700/80 italic sm:text-xl">
          &ldquo;In the soft intersection of baby pink sunsets and velvet
          shadows, we found the true essence of Enchanta.&rdquo;
        </blockquote>

        <p className="mt-10 text-center text-xs tracking-[0.3em] text-plum-700/40 uppercase">
          Curated by Ada · The Lace Affair · Spring / Summer
        </p>
      </div>
    </section>
  );
}
