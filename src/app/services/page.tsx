import type { Metadata } from "next";
import PageHeader from "@/components/sections/PageHeader";
import ServicesDetail from "@/components/sections/ServicesDetail";
import CtaSection from "@/components/sections/CtaSection";
import { SITE_URL } from "@/lib/constants";

export const metadata: Metadata = {
  title: "サービス",
  description:
    "成年後見業務・保佐補助業務・福祉相談支援など、専門職後見人・独立型社会福祉士としてのサービスをご紹介します。",
};

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "ホーム", item: SITE_URL },
    { "@type": "ListItem", position: 2, name: "サービス" },
  ],
};

export default function ServicesPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <PageHeader labelEn="Services" titleJp="サービス" />
      <ServicesDetail />
      <CtaSection />
    </>
  );
}
