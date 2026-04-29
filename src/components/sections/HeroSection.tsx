import Image from "next/image";
import Badge from "@/components/ui/Badge";
import {
  HERO_TAG,
  HERO_TITLE_EN_LINE1,
  HERO_TITLE_EN_LINE2,
  HERO_TITLE_JP,
  HERO_DESCRIPTION,
  HERO_BADGES,
} from "@/lib/constants";

export default function HeroSection() {
  return (
    <section className="min-h-screen grid grid-cols-1 md:grid-cols-2 relative overflow-hidden">
      {/* 左カラム */}
      <div className="bg-green-deep flex flex-col justify-center px-8 py-24 md:px-20 md:py-20 md:pt-36 relative overflow-hidden">
        {/* 装飾円 */}
        <div className="absolute -bottom-15 -right-15 w-75 h-75 rounded-full bg-green-light/15" />
        <div className="absolute top-20 -left-10 w-45 h-45 rounded-full bg-green-pale/8" />

        <p
          className="font-sans text-[11px] tracking-[0.3em] text-green-light mb-7 animate-fade-up"
          style={{ animationDelay: "0.2s" }}
        >
          {HERO_TAG}
        </p>

        <h1
          className="font-display text-[clamp(38px,5vw,58px)] font-light leading-[1.15] text-white tracking-[0.05em] animate-fade-up"
          style={{ animationDelay: "0.4s" }}
        >
          {HERO_TITLE_EN_LINE1}
          <br />
          <em className="italic text-green-pale">{HERO_TITLE_EN_LINE2}</em>
        </h1>

        <p
          className="text-[clamp(13px,1.5vw,16px)] text-green-pale mt-4 tracking-[0.2em] font-light animate-fade-up"
          style={{ animationDelay: "0.6s" }}
        >
          {HERO_TITLE_JP}
        </p>

        <div
          className="w-12 h-px bg-sand my-8 animate-fade-up"
          style={{ animationDelay: "0.7s" }}
        />

        <p
          className="font-sans text-[13px] leading-[2.2] text-green-pale font-light whitespace-pre-line animate-fade-up"
          style={{ animationDelay: "0.8s" }}
        >
          {HERO_DESCRIPTION}
        </p>
      </div>

      {/* 右カラム */}
      <div className="relative flex flex-col justify-center items-start px-8 py-16 md:px-20 md:py-20 md:pt-36 overflow-hidden">
        {/* 背景画像 */}
        <Image
          src="/images/hero-side-v2.jpg"
          alt=""
          fill
          className="object-cover"
          priority
          sizes="(max-width: 768px) 100vw, 50vw"
        />
        {/* オーバーレイ */}
        <div className="absolute inset-0 bg-cream/10" />

        {/* Ohana 装飾テキスト */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 font-display text-[80px] md:text-[180px] font-light text-sand-light tracking-[0.05em] pointer-events-none whitespace-nowrap opacity-40 select-none">
          Ohana
        </div>

        <div
          className="flex flex-col gap-4 relative z-10 animate-fade-up"
          style={{ animationDelay: "0.9s" }}
        >
          {HERO_BADGES.map((badge) => (
            <Badge key={badge} text={badge} />
          ))}
        </div>
      </div>
    </section>
  );
}
