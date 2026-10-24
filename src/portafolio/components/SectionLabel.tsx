type Props = {
  n: string;
  label: string;
  className?: string;
};

export default function SectionLabel({ n, label, className = 'mb-7' }: Props) {
  return (
    <div data-reveal="0" className={`flex items-center gap-4 font-mono text-[12.5px] ${className}`}>
      <span className="text-acc">{n}</span>
      <span className="text-muted">/ {label}</span>
      <span className="h-px flex-1 bg-line" />
    </div>
  );
}
