import SectionLabel from "@/components/ui/SectionLabel";
import SectionTitle from "@/components/ui/SectionTitle";
import Button from "@/components/ui/Button";
import ScrollFadeIn from "@/components/ui/ScrollFadeIn";

export default function AboutSection() {
  return (
    <section className="bg-warm-white py-24 md:py-28">
      <div className="max-w-[1000px] mx-auto px-6 md:px-12">
        <ScrollFadeIn>
          <SectionLabel label="About" />
          <SectionTitle title="ソーシャルサポートOhanaとは" />
          <p className="font-sans text-sm leading-[2.4] text-text-mid font-light max-w-2xl">
            ソーシャルサポートOhanaは、船橋市を拠点とする独立型社会福祉士事務所です。認知症・知的障害・精神障害のある方が、その人らしく安心して暮らし続けられるよう、専門的な立場から支援いたします。
          </p>
          <p className="font-sans text-sm leading-[2.4] text-text-mid font-light max-w-2xl mt-5">
            「Ohana（オハナ）」とはハワイ語で「家族」を意味します。ご本人とその周囲の方々を家族のように温かく、そして専門的に支える事務所でありたいという思いを込めています。
          </p>
          <div className="mt-10">
            <Button href="/about" variant="primary">
              事業について詳しく見る
            </Button>
          </div>
        </ScrollFadeIn>
      </div>
    </section>
  );
}
