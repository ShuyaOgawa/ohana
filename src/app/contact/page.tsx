import type { Metadata } from "next";
import PageHeader from "@/components/sections/PageHeader";
import ContactInfo from "@/components/sections/ContactInfo";
import ContactForm from "@/components/sections/ContactForm";
import { SITE_URL } from "@/lib/constants";

export const metadata: Metadata = {
  title: "お問い合わせ",
  description:
    "ソーシャルサポートOhanaへのお問い合わせ。成年後見・保佐補助・福祉相談についてお気軽にご連絡ください。",
};

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "ホーム", item: SITE_URL },
    { "@type": "ListItem", position: 2, name: "お問い合わせ" },
  ],
};

export default function ContactPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <PageHeader labelEn="Contact" titleJp="お問い合わせ" />
      <section className="bg-green-deep py-16 md:py-24">
        <div className="max-w-[1000px] mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-start">
            <ContactInfo />
            <ContactForm />
          </div>
        </div>
      </section>
    </>
  );
}
