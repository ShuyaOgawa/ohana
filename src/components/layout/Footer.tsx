import { SITE_NAME_EN, COPYRIGHT } from "@/lib/constants";
import { COMPANY_INFO } from "@/data/company";

export default function Footer() {
  return (
    <footer className="bg-text-dark px-6 md:px-12 py-8 md:py-10">
      <p className="text-center font-sans text-[11px] text-text-light/60 tracking-[0.08em] mb-6">
        営業時間 {COMPANY_INFO.businessHours}（平日のみ）／{COMPANY_INFO.closedDays}休み
      </p>
      <div className="flex flex-col md:flex-row items-center justify-between gap-3">
        <span className="font-display text-lg font-light tracking-[0.1em] text-text-light">
          {SITE_NAME_EN}
        </span>
        <span className="font-sans text-[11px] text-text-light tracking-[0.1em]">
          {COPYRIGHT}
        </span>
      </div>
    </footer>
  );
}
