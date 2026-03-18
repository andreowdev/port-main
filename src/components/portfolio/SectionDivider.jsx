export default function SectionDivider() {
  return (
    <div className="my-12 flex items-center gap-2">
      <div className="hidden h-1 w-1 shrink-0 bg-[var(--line-strong)] sm:block" />
      <div className="hidden h-1 w-1 shrink-0 bg-[var(--line-strong)] md:block" />
      <div className="h-1 w-1 shrink-0 bg-[var(--line-strong)]" />
      <hr className="h-px flex-1 border-0 bg-[var(--line)]" />
      <div className="h-1 w-1 shrink-0 bg-[var(--line-strong)]" />
      <div className="hidden h-1 w-1 shrink-0 bg-[var(--line-strong)] md:block" />
      <div className="hidden h-1 w-1 shrink-0 bg-[var(--line-strong)] sm:block" />
    </div>
  );
}
