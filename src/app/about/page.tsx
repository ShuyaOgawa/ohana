import type { Metadata } from "next";
import PageHeader from "@/components/sections/PageHeader";
import AboutDetail from "@/components/sections/AboutDetail";
import OfficeInfo from "@/components/sections/OfficeInfo";
import ProfileSection from "@/components/sections/ProfileSection";
import CtaSection from "@/components/sections/CtaSection";
import { SITE_URL } from "@/lib/constants";

export const metadata: Metadata = {
  title: "事業概要",
  description:
    "ソーシャルサポートOhanaは千葉県船橋市を拠点とする独立型社会福祉士事務所です。代表の小川知美が、専門職後見人として権利擁護に取り組んでいます。",
};

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "ホーム", item: SITE_URL },
    { "@type": "ListItem", position: 2, name: "事業概要" },
  ],
};

export default function AboutPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <PageHeader labelEn="About" titleJp="事業概要" />
      <AboutDetail />
      <OfficeInfo />
      <ProfileSection />
      <CtaSection />
    </>
  );
}
