import SectionLabel from "@/components/ui/SectionLabel";
import SectionTitle from "@/components/ui/SectionTitle";
import ScrollFadeIn from "@/components/ui/ScrollFadeIn";
import { COMPANY_INFO } from "@/data/company";

export default function OfficeInfo() {
  const items = [
    { label: "事務所名", value: COMPANY_INFO.name },
    { label: "代表者", value: COMPANY_INFO.representative },
    {
      label: "所在地",
      value: `〒${COMPANY_INFO.postalCode} ${COMPANY_INFO.address}`,
    },
    { label: "FAX", value: COMPANY_INFO.fax },
    {
      label: "メール",
      value: COMPANY_INFO.email,
      href: `mailto:${COMPANY_INFO.email}`,
    },
    ...(COMPANY_INFO.established
      ? [{ label: "設立", value: COMPANY_INFO.established }]
      : []),
  ];

  return (
    <section className="bg-cream py-24 md:py-28">
      <div className="max-w-[1000px] mx-auto px-6 md:px-12">
        <SectionLabel label="Office" />
        <SectionTitle title="事務所情報" />
        <ScrollFadeIn>
          <dl className="grid grid-cols-1 gap-0 max-w-2xl">
            {items.map((item) => (
              <div
                key={item.label}
                className="flex flex-col sm:flex-row border-b border-sand-light py-4 first:border-t"
              >
                <dt className="font-sans text-xs tracking-[0.15em] text-text-light font-normal w-32 shrink-0 mb-1 sm:mb-0">
                  {item.label}
                </dt>
                <dd className="font-sans text-sm text-text-mid font-light">
                  {item.href ? (
                    <a
                      href={item.href}
                      className="text-green-mid hover:text-green-deep transition-colors border-b border-green-mid/30 pb-px"
                    >
                      {item.value}
                    </a>
                  ) : (
                    item.value
                  )}
                </dd>
              </div>
            ))}
          </dl>
        </ScrollFadeIn>
      </div>
    </section>
  );
}
