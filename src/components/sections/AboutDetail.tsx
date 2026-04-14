import SectionLabel from "@/components/ui/SectionLabel";
import SectionTitle from "@/components/ui/SectionTitle";
import ScrollFadeIn from "@/components/ui/ScrollFadeIn";
import { TARGET_USERS } from "@/data/company";

export default function AboutDetail() {
  return (
    <section className="bg-warm-white py-24 md:py-28">
      <div className="max-w-[1000px] mx-auto px-6 md:px-12">
        <SectionLabel label="About" />
        <SectionTitle title="ソーシャルサポートOhanaとは" />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-start">
          <div className="font-sans text-sm leading-[2.4] text-text-mid font-light">
            <p>
              ソーシャルサポートOhanaは、船橋市を拠点とする独立型社会福祉士事務所です。認知症・知的障害・精神障害のある方が、その人らしく安心して暮らし続けられるよう、専門的な立場から支援いたします。
            </p>
            <p className="mt-5">
              「Ohana（オハナ）」とはハワイ語で「家族」を意味します。ご本人とその周囲の方々を家族のように温かく、そして専門的に支える事務所でありたいという思いを込めています。
            </p>
            <p className="mt-5">
              後見業務においては、財産管理のみならず、医療・福祉・生活全般にわたる身上保護を大切にし、ご本人の意思と尊厳を最大限に尊重した支援を行います。
            </p>
          </div>

          <ScrollFadeIn>
            <div className="bg-green-deep text-white p-10 md:p-12 rounded-sm">
              <p className="font-display text-lg font-light tracking-[0.1em] text-green-pale mb-6">
                対象となる方
              </p>
              <ul className="flex flex-col gap-3.5">
                {TARGET_USERS.map((user) => (
                  <li
                    key={user.description}
                    className="flex items-start gap-2.5 font-sans text-[13px] leading-[1.8] font-light text-green-pale"
                  >
                    <span className="text-sand shrink-0 mt-0.5">—</span>
                    {user.description}
                  </li>
                ))}
              </ul>
            </div>
          </ScrollFadeIn>
        </div>
      </div>
    </section>
  );
}
