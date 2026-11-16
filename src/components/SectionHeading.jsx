export default function SectionHeading({ index, label, title, description }) {
  return (
    <div className="text-center">
      <div
        className="inline-flex items-center gap-2 rounded-full px-3.5 py-1 text-[11px] font-mono font-semibold uppercase tracking-widest text-[var(--accent)] border shadow-xs"
        style={{
          background: 'var(--surface-translucent)',
          borderColor: 'var(--line-strong)',
        }}
      >
        <span>{index}</span>
        <span className="opacity-40">/</span>
        <span>{label}</span>
      </div>

      <h2 className="mt-4 font-heading text-[clamp(2.1rem,4.5vw,3.4rem)] font-extrabold leading-[1.1] tracking-[-0.035em] text-main">
        {title}
      </h2>

      {description ? (
        <p className="mx-auto mt-3.5 max-w-2xl text-[15px] sm:text-[17px] leading-relaxed text-dim font-normal">
          {description}
        </p>
      ) : null}
    </div>
  );
}
