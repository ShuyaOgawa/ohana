export type CompanyInfo = {
  name: string;
  nameEn: string;
  nameKana: string;
  representative: string;
  representativeEn: string;
  representativeTitle: string;
  postalCode: string;
  address: string;
  fax: string;
  email: string;
  established?: string;
};

export type ProfileInfo = {
  nameJp: string;
  nameEn: string;
  title: string;
  bio: string;
  credentials: string[];
};

export type TargetUser = {
  description: string;
};
