import { SITE_NAME } from "./constants";
import type { ContactFormData } from "@/types/contact";
import { CONSULTATION_OPTIONS } from "@/data/company";

export const sendContactForm = async (data: ContactFormData) => {
  const consultationLabel =
    CONSULTATION_OPTIONS.find((opt) => opt.value === data.consultationType)
      ?.label ?? data.consultationType;

  const response = await fetch("https://api.web3forms.com/submit", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      access_key: process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY,
      subject: `【${SITE_NAME}】お問い合わせ: ${data.name}様`,
      from_name: data.name,
      name: data.name,
      email: data.email,
      "相談種別": consultationLabel,
      "件名": data.subject || "（未入力）",
      message: data.message,
    }),
  });

  return response.json();
};
