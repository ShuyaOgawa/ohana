type SectionLabelProps = {
  label: string;
  variant?: "default" | "light";
};

export default function SectionLabel({
  label,
  variant = "default",
}: SectionLabelProps) {
  const colorClass = variant === "light" ? "text-green-light" : "text-green-mid";

  return (
    <p
      className={`font-display text-[11px] tracking-[0.4em] uppercase mb-3 ${colorClass}`}
    >
      {label}
    </p>
  );
}
