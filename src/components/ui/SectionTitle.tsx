type SectionTitleProps = {
  title: string;
  as?: "h1" | "h2" | "h3";
  variant?: "default" | "light";
};

export default function SectionTitle({
  title,
  as: Tag = "h2",
  variant = "default",
}: SectionTitleProps) {
  const colorClass = variant === "light" ? "text-white" : "text-text-dark";

  return (
    <Tag
      className={`text-[clamp(20px,3vw,28px)] font-normal tracking-[0.12em] leading-[1.5] mb-12 ${colorClass}`}
    >
      {title}
    </Tag>
  );
}
