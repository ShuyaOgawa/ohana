import type { CompanyInfo, ProfileInfo, TargetUser } from "@/types/company";
import type { ConsultationOption } from "@/types/contact";

export const COMPANY_INFO: CompanyInfo = {
  name: "ソーシャルサポート Ohana",
  nameEn: "Social Support Ohana",
  nameKana: "ソーシャルサポート おはな",
  representative: "小川 知美",
  representativeEn: "Tomomi Ogawa",
  representativeTitle: "代表・社会福祉士",
  postalCode: "273-0005",
  address: "千葉県船橋市本町2-16-4",
  fax: "047-750-1871",
  email: "beachmemory777@gmail.com",
  businessHours: "9:00〜18:00",
  closedDays: "土日祝日・年末年始",
  established: "",
};

export const PROFILE_INFO: ProfileInfo = {
  nameJp: "小川 知美",
  nameEn: "Tomomi Ogawa",
  title: "代表・社会福祉士",
  bio: "千葉県を拠点に独立型社会福祉士として活動。成年後見制度を中心に、認知症・知的障害・精神障害のある方の権利擁護および生活支援に取り組んでいます。ぱあとなあ千葉（千葉県社会福祉士会成年後見人等養成研修修了者名簿）に登録し、専門性の向上と地域への貢献を続けています。",
  credentials: [
    "社会福祉士（国家資格）",
    "千葉県社会福祉士会 ぱあとなあ千葉 登録",
    "専門職後見人",
    "独立型社会福祉士",
  ],
};

export const TARGET_USERS: TargetUser[] = [
  { description: "認知症のある高齢者の方" },
  { description: "知的障害のある方" },
  { description: "精神障害のある方" },
  { description: "成年後見制度の利用を検討している方・ご家族" },
  { description: "後見人候補者をお探しの専門機関・家庭裁判所" },
];

export const CONSULTATION_OPTIONS: ConsultationOption[] = [
  { value: "guardianship", label: "成年後見に関するご相談" },
  { value: "assistance", label: "保佐・補助に関するご相談" },
  { value: "welfare", label: "福祉相談・支援に関するご相談" },
  { value: "other", label: "その他のお問い合わせ" },
];
