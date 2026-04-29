import Image from "next/image";
import Button from "@/components/ui/Button";
import { CTA_TEXT, CTA_BUTTON_TEXT } from "@/lib/constants";

export default function CtaSection() {
  return (
    <section className="relative py-20 md:py-24 overflow-hidden">
      {/* 背景画像 */}
      <Image
        src="/images/cta-bg.jpg"
        alt=""
        fill
        className="object-cover"
        sizes="100vw"
      />
      {/* オーバーレイ */}
      <div className="absolute inset-0 bg-green-deep/85" />

      <div className="relative z-10 max-w-[1000px] mx-auto px-6 md:px-12 text-center">
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
