import { SITE_NAME_EN, COPYRIGHT } from "@/lib/constants";

export default function Footer() {
  return (
    <footer className="bg-text-dark px-6 md:px-12 py-10 flex flex-col md:flex-row items-center justify-between gap-3">
      <span className="font-display text-lg font-light tracking-[0.1em] text-text-light">
        {SITE_NAME_EN}
      </span>
      <span className="font-sans text-[11px] text-text-light tracking-[0.1em]">
        {COPYRIGHT}
      </span>
    </footer>
  );
}
