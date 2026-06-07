const SOCIALS = [
  { label: "Instagram", href: "https://instagram.com/", icon: "📷" },
  { label: "TikTok", href: "https://tiktok.com/", icon: "🎵" },
  { label: "WhatsApp", href: "https://wa.me/", icon: "💬" },
];

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-gradient-to-b from-lavender-100 via-blossom-100 to-blossom-300 pt-24 pb-10 text-center">
      <div className="pointer-events-none absolute top-1/4 left-1/5 h-56 w-56 rounded-full bg-blossom-300/30 blur-3xl" />
      <div className="pointer-events-none absolute right-1/5 bottom-1/4 h-64 w-64 rounded-full bg-lavender-300/30 blur-3xl" />
      <span className="animate-drift pointer-events-none absolute top-12 left-[18%] text-2xl opacity-60">
        🌸
      </span>
      <span className="animate-drift pointer-events-none absolute right-[18%] bottom-24 text-xl opacity-50 [animation-delay:6s]">
        🌷
      </span>

      <div className="relative mx-auto flex max-w-2xl flex-col items-center px-6">
        <h2 className="font-display text-4xl font-semibold tracking-[0.3em] text-plum-300 uppercase sm:text-5xl">
          Enchanted
        </h2>
        <span className="font-script -mt-2 text-4xl text-white sm:text-5xl">Wonders</span>

        {/* the retro tv, again, smaller — closing the loop */}
        <div className="animate-float relative mt-10 flex flex-col items-center">
          <div className="absolute -top-3 left-1/2 h-10 w-px -translate-x-1/2 -rotate-12 bg-plum-700/40" />
          <div className="w-44 rounded-2xl border-[5px] border-plum-700 bg-plum-900 p-2.5 shadow-xl shadow-plum-900/30">
            <div className="flex h-28 items-center justify-center rounded-lg bg-gradient-to-br from-lavender-300 via-blossom-300 to-plum-300">
              <div className="flex flex-col items-center gap-0.5 text-white">
                <span className="text-2xl">🧚</span>
                <span className="font-display text-xs font-semibold tracking-wide">Enchanta</span>
              </div>
            </div>
          </div>
          <div className="-mt-1 text-2xl">🐇</div>
        </div>

        <a
          href="https://instagram.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="mt-12 inline-flex items-center gap-2 rounded-full bg-blossom-500 px-9 py-3.5 text-sm font-bold tracking-[0.2em] text-white uppercase shadow-lg shadow-plum-700/30 transition hover:-translate-y-0.5 hover:bg-blossom-700"
        >
          <span aria-hidden>📷</span> Instagram
        </a>

        <div className="mt-10 flex items-center gap-6 text-sm font-semibold text-plum-700/70">
          {SOCIALS.map((social) => (
            <a
              key={social.label}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 transition hover:text-plum-700"
            >
              <span aria-hidden>{social.icon}</span> {social.label}
            </a>
          ))}
        </div>

        <p className="mt-10 font-display text-xs tracking-[0.3em] text-plum-700/50 uppercase">
          Enchanta · Made by Ada · © {new Date().getFullYear()}
        </p>
      </div>
    </footer>
  );
}
