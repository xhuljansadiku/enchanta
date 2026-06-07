import ArtPlaceholder from "@/components/ArtPlaceholder";

const VALUES = [
  {
    icon: "🧶",
    title: "Hand-crocheted",
    text: "Every stitch made by hand, slowly, with cotton & silk-blend yarns.",
  },
  {
    icon: "🌙",
    title: "Small batches",
    text: "Limited drops so each piece keeps its one-of-a-kind charm.",
  },
  {
    icon: "💌",
    title: "Made to order",
    text: "Custom colours & sizing — Ada crafts each piece just for you.",
  },
];

export default function About() {
  return (
    <section
      id="about"
      className="relative overflow-hidden bg-gradient-to-br from-plum-900 via-plum-700 to-plum-500 py-24 text-white"
    >
      <div className="pointer-events-none absolute -top-32 -right-20 h-80 w-80 rounded-full bg-blossom-300/20 blur-3xl" />
      <div className="pointer-events-none absolute bottom-0 left-0 h-72 w-72 rounded-full bg-lavender-300/20 blur-3xl" />

      <div className="relative mx-auto grid max-w-6xl gap-14 px-6 lg:grid-cols-2 lg:items-center">
        <div>
          <span className="font-script text-2xl text-blossom-100">
            the story behind the stitches
          </span>
          <h2 className="mt-2 font-display text-4xl font-semibold sm:text-5xl">
            About Enchanta
          </h2>
          <p className="mt-6 max-w-lg leading-relaxed text-white/85">
            Enchanta began as Ada&rsquo;s quiet hobby — a hook, a ball of yarn,
            and a love for fairy-tale colour palettes. It grew into a tiny
            atelier devoted to crochet pieces that feel like wearable
            daydreams: soft, textured, and just a little whimsical.
          </p>
          <p className="mt-4 max-w-lg leading-relaxed text-white/70">
            From sun-soaked summer totes to moonlit evening bags, every
            Enchanta piece is designed to carry a bit of wonder into your
            everyday.
          </p>

          <div className="mt-10 grid gap-5 sm:grid-cols-3">
            {VALUES.map((value) => (
              <div
                key={value.title}
                className="rounded-2xl border border-white/15 bg-white/5 p-5 backdrop-blur-sm"
              >
                <span className="text-2xl">{value.icon}</span>
                <h3 className="mt-3 font-display text-base font-semibold">
                  {value.title}
                </h3>
                <p className="mt-1.5 text-sm leading-relaxed text-white/70">
                  {value.text}
                </p>
              </div>
            ))}
          </div>
        </div>

        <ArtPlaceholder
          gradient="bg-gradient-to-br from-blossom-300 via-lavender-300 to-plum-300"
          icon="🪡"
          label="Ada at her hook"
          className="aspect-[4/5] w-full rounded-[2.5rem] border-4 border-white/20 shadow-2xl shadow-plum-900/40"
        />
      </div>
    </section>
  );
}
