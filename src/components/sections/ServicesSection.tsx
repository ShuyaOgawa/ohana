import SectionLabel from "@/components/ui/SectionLabel";
import SectionTitle from "@/components/ui/SectionTitle";
import ServiceCard from "@/components/ui/ServiceCard";
import Button from "@/components/ui/Button";
import ScrollFadeIn from "@/components/ui/ScrollFadeIn";
import { SERVICES } from "@/data/services";

export default function ServicesSection() {
  return (
    <section className="bg-cream py-24 md:py-28">
      <div className="max-w-[1000px] mx-auto px-6 md:px-12">
        <SectionLabel label="Services" />
        <SectionTitle title="主なサービス" />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {SERVICES.map((service, index) => (
            <ScrollFadeIn key={service.number} delay={index * 100}>
              <ServiceCard
                number={service.number}
                title={service.title}
                description={service.description}
              />
            </ScrollFadeIn>
          ))}
        </div>
        <div className="mt-12 text-center">
          <Button href="/services" variant="primary">
            サービスを詳しく見る
          </Button>
        </div>
      </div>
    </section>
  );
}
