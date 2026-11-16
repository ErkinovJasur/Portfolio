export default function SectionIndex({ value }) {
  return (
    <span
      aria-hidden="true"
      className="outline-text pointer-events-none absolute right-2 top-14 hidden select-none font-heading text-[7.5rem] font-bold leading-none opacity-40 lg:block"
    >
      {value}
    </span>
  );
}
