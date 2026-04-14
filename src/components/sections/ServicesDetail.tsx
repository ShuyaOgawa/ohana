import ScrollFadeIn from "@/components/ui/ScrollFadeIn";
import { SERVICES } from "@/data/services";

export default function ServicesDetail() {
  return (
    <section className="bg-cream py-24 md:py-28">
      <div className="max-w-[1000px] mx-auto px-6 md:px-12">
        <div className="flex flex-col gap-6">
          {SERVICES.map((service, index) => (
            <ScrollFadeIn key={service.number} delay={index * 100}>
              <div className="bg-warm-white px-8 py-10 md:px-12 md:py-14 border-t-2 border-green-mid">
                <p className="font-display text-4xl font-light text-green-pale mb-4">
                  {service.number}
                </p>
                <h2 className="font-serif text-lg tracking-[0.1em] text-green-deep font-medium mb-4">
                  {service.title}
                </h2>
                <p className="font-sans text-sm leading-[2.2] text-text-mid font-light max-w-2xl">
                  {service.detail}
                </p>
              </div>
            </ScrollFadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
