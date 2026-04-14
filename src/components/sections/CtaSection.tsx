import Button from "@/components/ui/Button";
import { CTA_TEXT, CTA_BUTTON_TEXT } from "@/lib/constants";

export default function CtaSection() {
  return (
    <section className="bg-green-deep py-20 md:py-24">
      <div className="max-w-[1000px] mx-auto px-6 md:px-12 text-center">
        <p className="text-white text-[clamp(18px,2.5vw,24px)] tracking-[0.15em] font-light mb-8">
          {CTA_TEXT}
        </p>
        <Button href="/contact" variant="outline">
          {CTA_BUTTON_TEXT}
        </Button>
      </div>
    </section>
  );
}
