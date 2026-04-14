type BadgeProps = {
  text: string;
};

export default function Badge({ text }: BadgeProps) {
  return (
    <div className="inline-flex items-center gap-2.5 px-5 py-3 border border-sand bg-white/70 rounded-sm">
      <span className="w-1.5 h-1.5 rounded-full bg-green-mid shrink-0" />
      <span className="font-sans text-xs tracking-[0.1em] text-text-mid">
        {text}
      </span>
    </div>
  );
}
