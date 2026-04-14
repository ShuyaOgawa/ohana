import SectionLabel from "@/components/ui/SectionLabel";
import SectionTitle from "@/components/ui/SectionTitle";
import ScrollFadeIn from "@/components/ui/ScrollFadeIn";
import { PROFILE_INFO } from "@/data/company";

export default function ProfileSection() {
  return (
    <section id="profile" className="bg-warm-white py-24 md:py-28">
      <div className="max-w-[1000px] mx-auto px-6 md:px-12">
        <SectionLabel label="Profile" />
        <SectionTitle title="代表者紹介" />
        <div className="grid grid-cols-1 md:grid-cols-[1fr_2fr] gap-10 md:gap-20 items-start">
          {/* 名前ブロック */}
          <div className="md:sticky md:top-30">
            <p className="text-[28px] font-normal tracking-[0.2em] text-text-dark">
              {PROFILE_INFO.nameJp}
            </p>
            <p className="font-display text-lg font-light italic text-text-light tracking-[0.1em] mt-2">
              {PROFILE_INFO.nameEn}
            </p>
            <p className="mt-6 font-sans text-[11px] tracking-[0.15em] text-green-mid font-normal">
              {PROFILE_INFO.title}
            </p>
          </div>

          {/* 詳細 */}
          <ScrollFadeIn>
            <div className="flex flex-col gap-8">
              <div>
                <p className="font-sans text-[11px] tracking-[0.3em] text-green-mid font-normal mb-3">
                  PROFILE
                </p>
                <p className="font-sans text-[13px] leading-[2.4] text-text-mid font-light">
                  {PROFILE_INFO.bio}
                </p>
              </div>
              <div>
                <p className="font-sans text-[11px] tracking-[0.3em] text-green-mid font-normal mb-3">
                  CREDENTIALS
                </p>
                <ul className="flex flex-col gap-2.5">
                  {PROFILE_INFO.credentials.map((cred) => (
                    <li
                      key={cred}
                      className="font-sans text-[13px] leading-[1.8] text-text-mid font-light flex gap-3 items-start"
                    >
                      <span className="block w-5 h-px bg-sand shrink-0 mt-2.5" />
                      {cred}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </ScrollFadeIn>
        </div>
      </div>
    </section>
  );
}
