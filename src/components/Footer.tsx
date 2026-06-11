import Image from "next/image";

const SOCIALS = [
  { label: "Instagram", href: "https://instagram.com/", icon: "📷" },
  { label: "TikTok", href: "https://tiktok.com/", icon: "🎵" },
  { label: "WhatsApp", href: "https://wa.me/", icon: "💬" },
];

const SHOP_LINKS = [
  { label: "Summer", href: "#summer" },
  { label: "Collections", href: "#collections" },
  { label: "Moodboard", href: "#moodboard" },
  { label: "Pre-order", href: "#preorder" },
  { label: "Rising Moon", href: "#moon" },
];

const STUDIO_LINKS = [
  { label: "About", href: "#about" },
  { label: "Editorial", href: "#editorial" },
  { label: "Custom Made", href: "#custom" },
];

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-gradient-to-b from-plum-900 via-plum-900 to-plum-700 pt-20 pb-8 text-white">
      <div className="pointer-events-none absolute top-0 left-1/4 h-64 w-64 rounded-full bg-blossom-500/10 blur-3xl" />
      <div className="pointer-events-none absolute right-1/5 bottom-0 h-72 w-72 rounded-full bg-lavender-500/10 blur-3xl" />
      <span className="animate-drift pointer-events-none absolute top-10 left-[12%] text-2xl opacity-40">
        🌸
      </span>
      <span className="animate-drift pointer-events-none absolute right-[10%] bottom-32 text-xl opacity-30 [animation-delay:6s]">
        🌷
      </span>

      <div className="relative mx-auto max-w-6xl px-6">
        <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr_1.2fr]">
          {/* brand */}
          <div className="flex flex-col items-start">
            <Image
              src="/images/logo-enchanta.png"
              alt="Enchanta"
              width={677}
              height={606}
              className="h-16 w-auto object-contain"
            />
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-white/60">
              Hand-crocheted pieces made with love in small batches —
              wearable daydreams from Ada&rsquo;s little atelier.
            </p>
            <div className="mt-6 flex items-center gap-4 text-lg">
              {SOCIALS.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-white/15 bg-white/5 transition hover:-translate-y-0.5 hover:border-white/30 hover:bg-white/10"
                >
                  <span aria-hidden>{social.icon}</span>
                </a>
              ))}
            </div>
          </div>

          {/* shop links */}
          <div>
            <h3 className="font-display text-sm font-semibold tracking-[0.25em] text-blossom-100 uppercase">
              Shop
            </h3>
            <ul className="mt-5 flex flex-col gap-3 text-sm text-white/70">
              {SHOP_LINKS.map((link) => (
                <li key={link.href}>
                  <a href={link.href} className="transition hover:text-white">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* studio links */}
          <div>
            <h3 className="font-display text-sm font-semibold tracking-[0.25em] text-blossom-100 uppercase">
              Studio
            </h3>
            <ul className="mt-5 flex flex-col gap-3 text-sm text-white/70">
              {STUDIO_LINKS.map((link) => (
                <li key={link.href}>
                  <a href={link.href} className="transition hover:text-white">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* contact / newsletter */}
          <div>
            <h3 className="font-display text-sm font-semibold tracking-[0.25em] text-blossom-100 uppercase">
              Stay in touch
            </h3>
            <p className="mt-5 text-sm leading-relaxed text-white/60">
              Get notified about new drops, restocks &amp; behind-the-scenes
              moodboards.
            </p>
            <form className="mt-4 flex items-center gap-2">
              <input
                type="email"
                placeholder="Your email"
                className="w-full rounded-full border border-white/15 bg-white/5 px-4 py-2.5 text-sm text-white placeholder:text-white/40 focus:border-blossom-300/50 focus:outline-none"
              />
              <button
                type="submit"
                className="btn-shine shrink-0 rounded-full bg-blossom-500 px-5 py-2.5 text-sm font-semibold tracking-wide text-white transition hover:-translate-y-0.5 hover:bg-blossom-700"
              >
                Join
              </button>
            </form>
            <a
              href="mailto:hello@enchanta.com"
              className="mt-4 inline-block text-sm text-white/60 transition hover:text-white"
            >
              hello@enchanta.com
            </a>
          </div>
        </div>

        {/* bottom bar */}
        <div className="mt-16 flex flex-col items-center gap-4 border-t border-white/10 pt-6 text-center sm:flex-row sm:justify-between sm:text-left">
          <p className="font-display text-xs tracking-[0.3em] text-white/50 uppercase">
            Enchanta · Made by Ada · © {new Date().getFullYear()}
          </p>
          <div className="flex items-center gap-2 text-2xl">
            <span className="animate-float">🐇</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
