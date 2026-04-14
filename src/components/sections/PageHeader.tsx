import SectionLabel from "@/components/ui/SectionLabel";

type PageHeaderProps = {
  labelEn: string;
  titleJp: string;
};

export default function PageHeader({ labelEn, titleJp }: PageHeaderProps) {
  return (
    <section className="bg-green-deep pt-32 pb-16 md:pt-36 md:pb-20">
      <div className="max-w-[1000px] mx-auto px-6 md:px-12">
        <SectionLabel label={labelEn} variant="light" />
        <h1 className="text-[clamp(24px,4vw,32px)] font-normal tracking-[0.12em] leading-[1.5] text-white">
          {titleJp}
        </h1>
      </div>
    </section>
  );
}
