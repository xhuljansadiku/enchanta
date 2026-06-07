type ArtPlaceholderProps = {
  gradient: string;
  icon?: string;
  label?: string;
  className?: string;
};

export default function ArtPlaceholder({
  gradient,
  icon,
  label,
  className = "",
}: ArtPlaceholderProps) {
  return (
    <div
      className={`relative flex flex-col items-center justify-center gap-3 overflow-hidden ${gradient} ${className}`}
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_30%_25%,rgba(255,255,255,0.35),transparent_55%)]" />
      {icon && (
        <span className="relative text-4xl drop-shadow-sm sm:text-5xl">{icon}</span>
      )}
      {label && (
        <span className="relative font-display text-xs tracking-[0.2em] text-white/80 uppercase">
          {label}
        </span>
      )}
    </div>
  );
}
