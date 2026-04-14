export type ConsultationType =
  | "guardianship"
  | "assistance"
  | "welfare"
  | "other";

export type ContactFormData = {
  name: string;
  email: string;
  consultationType: ConsultationType;
  subject?: string;
  message: string;
};

export type ConsultationOption = {
  value: ConsultationType;
  label: string;
};
