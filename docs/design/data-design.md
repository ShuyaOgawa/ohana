# データ設計書

**プロジェクト名**: ソーシャルサポートOhana コーポレートサイト
**作成日**: 2026-04-14
**バージョン**: 1.0

---

## 1. 型定義

### 1.1 types/navigation.ts

```typescript
export type NavItem = {
  label: string;       // 表示テキスト（例: "事業について"）
  href: string;        // リンク先パス（例: "/about"）
};
```

### 1.2 types/service.ts

```typescript
export type Service = {
  number: string;      // 表示番号（"01", "02", "03"）
  title: string;       // サービス名
  description: string; // 概要説明（トップページ用）
  detail: string;      // 詳細説明（サービスページ用）
};
```

### 1.3 types/company.ts

```typescript
export type CompanyInfo = {
  name: string;              // 事務所名
  nameEn: string;            // 英語名
  nameKana: string;          // ひらがな表記
  representative: string;    // 代表者名
  representativeEn: string;  // 代表者名（英語）
  representativeTitle: string; // 肩書
  postalCode: string;        // 郵便番号
  address: string;           // 住所
  fax: string;               // FAX番号
  email: string;             // メールアドレス
  businessHours: string;     // 営業時間
  closedDays: string;        // 定休日
  established?: string;      // 設立日（後日確認）
};

export type ProfileInfo = {
  nameJp: string;            // 日本語名
  nameEn: string;            // 英語名
  title: string;             // 肩書
  bio: string;               // プロフィール文
  credentials: string[];     // 保有資格リスト
};

export type TargetUser = {
  description: string;       // 対象者の説明
};
```

### 1.4 types/contact.ts

```typescript
export type ConsultationType =
  | "guardianship"     // 成年後見に関するご相談
  | "assistance"       // 保佐・補助に関するご相談
  | "welfare"          // 福祉相談・支援に関するご相談
  | "other";           // その他のお問い合わせ

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
```

---

## 2. 静的データ定義

### 2.1 data/navigation.ts

```typescript
import type { NavItem } from "@/types/navigation";

export const NAV_ITEMS: NavItem[] = [
  { label: "事業について", href: "/about" },
  { label: "サービス", href: "/services" },
  { label: "代表者", href: "/about#profile" },
  { label: "お問い合わせ", href: "/contact" },
];
```

### 2.2 data/services.ts

```typescript
import type { Service } from "@/types/service";

export const SERVICES: Service[] = [
  {
    number: "01",
    title: "成年後見業務",
    description:
      "家庭裁判所から選任された専門職後見人として、財産管理および身上保護を行います。ご本人の意思を尊重しながら、安全・安心な生活を支えます。",
    detail:
      "家庭裁判所から選任された専門職後見人として、財産管理および身上保護を行います。ご本人の意思を尊重しながら、安全・安心な生活を支えます。",
  },
  {
    number: "02",
    title: "保佐・補助業務",
    description:
      "後見よりも支援の程度が軽い保佐人・補助人としても対応いたします。本人の判断能力に応じた適切なサポートを提供します。",
    detail:
      "後見よりも支援の程度が軽い保佐人・補助人としても対応いたします。本人の判断能力に応じた適切なサポートを提供します。",
  },
  {
    number: "03",
    title: "福祉相談・支援",
    description:
      "独立型社会福祉士として、福祉サービスの利用相談や関係機関との連携・調整を行います。お気軽にご相談ください。",
    detail:
      "独立型社会福祉士として、福祉サービスの利用相談や関係機関との連携・調整を行います。お気軽にご相談ください。",
  },
];
```

### 2.3 data/company.ts

```typescript
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
  established: "", // 後日確認
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
```

---

## 3. 定数定義

### 3.1 lib/constants.ts

```typescript
// ── サイト情報 ──
export const SITE_NAME = "ソーシャルサポート Ohana";
export const SITE_NAME_EN = "Social Support Ohana";
export const SITE_DESCRIPTION =
  "千葉県船橋市の独立型社会福祉士事務所。専門職後見人として、認知症・知的障害・精神障害のある方の生活と権利をサポートします。";
export const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://ohana.vercel.app";

// ── ヒーローセクション ──
export const HERO_TAG = "SOCIAL SUPPORT OHANA";
export const HERO_TITLE_EN = "Your Life,";
export const HERO_TITLE_EN_ITALIC = "Your Rights.";
export const HERO_TITLE_JP = "あなたの権利を、共に守ります。";
export const HERO_DESCRIPTION =
  "専門職後見人・独立型社会福祉士として、\n認知症・知的障害・精神障害のある方の\n生活と権利をサポートいたします。";

// ── バッジ ──
export const HERO_BADGES = [
  "千葉県社会福祉士会 ぱあとなあ千葉 登録",
  "専門職後見人",
  "独立型社会福祉士",
  "認知症・知的障害・精神障害 対応",
];

// ── CTAセクション ──
export const CTA_TEXT = "まずはお気軽にご相談ください";
export const CTA_BUTTON_TEXT = "お問い合わせはこちら";

// ── フッター ──
export const COPYRIGHT = "© 2025 ソーシャルサポート Ohana　小川知美";

// ── フォーム ──
export const CONTACT_NOTE =
  "お問い合わせはメールまたはFAXにてお受けしております。内容を確認のうえ、折り返しご連絡いたします。";
```

---

## 4. 環境変数

### 4.1 .env.local

```
NEXT_PUBLIC_SITE_URL=https://ohana.vercel.app
NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY=（後日設定）
NEXT_PUBLIC_GA_MEASUREMENT_ID=（後日設定）
```

### 4.2 環境変数の参照箇所

| 変数名 | 参照箇所 | 用途 |
|--------|---------|------|
| `NEXT_PUBLIC_SITE_URL` | `lib/constants.ts`, `app/sitemap.ts`, `app/layout.tsx` | サイトURL |
| `NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY` | `lib/web3forms.ts` | フォーム送信 |
| `NEXT_PUBLIC_GA_MEASUREMENT_ID` | `app/layout.tsx` | GA4トラッキング |

---

## 5. データフロー

```
data/company.ts ──→ OfficeInfo, ContactInfo, Footer (営業時間含む), ProfileSection
data/services.ts ──→ ServicesSection, ServicesDetail, ServiceCard
data/navigation.ts ──→ Header, MobileMenu
lib/constants.ts ──→ HeroSection, CtaSection, layout.tsx, sitemap.ts, ContactForm
```

---

## 改訂履歴

| バージョン | 日付 | 内容 |
|-----------|------|------|
| 1.0 | 2026-04-14 | 初版作成 |
| 1.1 | 2026-04-29 | CompanyInfo に営業時間・定休日フィールドを追加 |
