type ServiceCardProps = {
  number: string;
  title: string;
  description: string;
};

export default function ServiceCard({
  number,
  title,
  description,
}: ServiceCardProps) {
  return (
    <div className="bg-warm-white px-8 py-10 border-t-2 border-green-mid transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_12px_32px_rgba(45,74,62,0.1)]">
      <p className="font-display text-4xl font-light text-green-pale mb-4">
        {number}
      </p>
      <p className="font-serif text-[15px] tracking-[0.1em] text-green-deep font-medium mb-3">
        {title}
      </p>
      <p className="font-sans text-xs leading-[2.0] text-text-mid font-light">
        {description}
      </p>
    </div>
  );
}
