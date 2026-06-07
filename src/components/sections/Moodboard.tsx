import ArtPlaceholder from "@/components/ArtPlaceholder";

export default function Moodboard() {
  return (
    <section
      id="moodboard"
      className="relative overflow-hidden bg-gradient-to-br from-blossom-50 via-lavender-100 to-blossom-100 py-24"
    >
      <div className="pointer-events-none absolute top-10 left-10 h-56 w-56 rounded-full bg-blossom-300/30 blur-3xl" />
      <div className="pointer-events-none absolute right-10 bottom-10 h-64 w-64 rounded-full bg-lavender-300/30 blur-3xl" />

      <div className="relative mx-auto grid max-w-6xl gap-14 px-6 lg:grid-cols-2 lg:items-center">
        <div>
          <h2 className="font-display text-4xl leading-tight font-bold sm:text-5xl">
            <span className="text-plum-700">Photo Gallery</span>
            <br />
            <span className="bg-gradient-to-r from-lavender-500 to-blossom-500 bg-clip-text text-transparent">
              To inspire you
            </span>
          </h2>
          <p className="mt-5 max-w-md text-plum-700/70 italic">
            Zgjidh atë që të pëlqen dhe ne do ta krijojmë të personalizuar për ty.
          </p>
          <a
            href="#custom"
            aria-label="Browse the moodboard"
            className="mt-8 inline-flex h-12 w-12 items-center justify-center rounded-full bg-lavender-500/20 text-2xl text-lavender-500 transition hover:translate-x-1.5 hover:bg-lavender-500/30"
          >
            →
          </a>
        </div>

        <div className="relative">
          <ArtPlaceholder
            gradient="bg-gradient-to-br from-lavender-300 via-blossom-200 to-white"
            icon="🤍"
            label="texture & lace study"
            className="aspect-[4/5] w-full max-w-md rounded-[2rem] border-4 border-white shadow-2xl shadow-plum-700/20 sm:ml-auto"
          />
          <button
            type="button"
            className="absolute bottom-6 left-6 inline-flex items-center gap-2 rounded-full bg-white/90 px-4 py-2 text-sm font-semibold text-plum-700 shadow-lg backdrop-blur-sm transition hover:-translate-y-0.5 hover:bg-white"
          >
            <span aria-hidden>✨</span> Open Moodboard
          </button>
        </div>
      </div>
    </section>
  );
}
