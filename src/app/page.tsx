import HeroSection from "@/components/sections/HeroSection";
import AboutSection from "@/components/sections/AboutSection";
import ServicesSection from "@/components/sections/ServicesSection";
import CtaSection from "@/components/sections/CtaSection";
import { SITE_DESCRIPTION, SITE_URL } from "@/lib/constants";
import { COMPANY_INFO } from "@/data/company";

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: COMPANY_INFO.name,
  alternateName: COMPANY_INFO.nameEn,
  url: SITE_URL,
  description: SITE_DESCRIPTION,
  address: {
    "@type": "PostalAddress",
    postalCode: COMPANY_INFO.postalCode,
    addressRegion: "千葉県",
    addressLocality: "船橋市",
    streetAddress: "本町2-16-4",
    addressCountry: "JP",
  },
  contactPoint: {
    "@type": "ContactPoint",
    contactType: "customer service",
    email: COMPANY_INFO.email,
    faxNumber: COMPANY_INFO.fax,
    availableLanguage: "Japanese",
  },
  founder: {
    "@type": "Person",
    name: COMPANY_INFO.representative,
    jobTitle: COMPANY_INFO.representativeTitle,
  },
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <CtaSection />
    </>
  );
}
