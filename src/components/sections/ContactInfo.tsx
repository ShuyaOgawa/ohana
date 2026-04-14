import { COMPANY_INFO } from "@/data/company";
import { CONTACT_NOTE } from "@/lib/constants";

export default function ContactInfo() {
  const items = [
    { label: "OFFICE NAME", value: COMPANY_INFO.name },
    {
      label: "REPRESENTATIVE",
      value: `代表　${COMPANY_INFO.representative}`,
    },
    {
      label: "ADDRESS",
      value: `〒${COMPANY_INFO.postalCode}\n${COMPANY_INFO.address}`,
    },
    { label: "FAX", value: COMPANY_INFO.fax },
    {
      label: "EMAIL",
      value: COMPANY_INFO.email,
      href: `mailto:${COMPANY_INFO.email}`,
    },
    { label: "NOTE", value: CONTACT_NOTE, isNote: true },
  ];

  return (
    <div className="flex flex-col gap-6">
      {items.map((item) => (
        <div key={item.label}>
          <p className="font-sans text-[10px] tracking-[0.3em] text-green-light font-normal mb-1.5">
            {item.label}
          </p>
          {"isNote" in item && item.isNote ? (
            <p className="font-sans text-xs text-green-pale/60 leading-[1.8] font-light whitespace-pre-line">
              {item.value}
            </p>
          ) : item.href ? (
            <p className="font-sans text-sm text-green-pale tracking-[0.05em] font-light leading-[1.8]">
              <a
                href={item.href}
                className="text-green-pale border-b border-green-mid pb-0.5 transition-colors hover:border-sand hover:text-white"
                aria-label="メールで問い合わせる"
              >
                {item.value}
              </a>
            </p>
          ) : (
            <p className="font-sans text-sm text-green-pale tracking-[0.05em] font-light leading-[1.8] whitespace-pre-line">
              {item.value}
            </p>
          )}
        </div>
      ))}
    </div>
  );
}
