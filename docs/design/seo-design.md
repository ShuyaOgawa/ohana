# SEO設計書

**プロジェクト名**: ソーシャルサポートOhana コーポレートサイト
**作成日**: 2026-04-14
**バージョン**: 1.0

---

## 1. メタデータ設計

### 1.1 ルートレイアウト（app/layout.tsx）

```typescript
export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "ソーシャルサポート Ohana｜専門職後見人・独立型社会福祉士",
    template: "%s｜ソーシャルサポート Ohana",
  },
  description:
    "千葉県船橋市の独立型社会福祉士事務所。専門職後見人として、認知症・知的障害・精神障害のある方の生活と権利をサポートします。",
  openGraph: {
    type: "website",
    locale: "ja_JP",
    siteName: "ソーシャルサポート Ohana",
    images: [
      {
        url: "/images/og-image.png",
        width: 1200,
        height: 630,
        alt: "ソーシャルサポート Ohana",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: "/favicon.ico",
  },
};
```

### 1.2 ページ別メタデータ

| ページ | title | description |
|--------|-------|-------------|
| `/` | ソーシャルサポート Ohana｜専門職後見人・独立型社会福祉士 | 千葉県船橋市の独立型社会福祉士事務所。専門職後見人として、認知症・知的障害・精神障害のある方の生活と権利をサポートします。 |
| `/about` | 事業概要 | ソーシャルサポートOhanaは千葉県船橋市を拠点とする独立型社会福祉士事務所です。代表の小川知美が、専門職後見人として権利擁護に取り組んでいます。 |
| `/services` | サービス | 成年後見業務・保佐補助業務・福祉相談支援など、専門職後見人・独立型社会福祉士としてのサービスをご紹介します。 |
| `/contact` | お問い合わせ | ソーシャルサポートOhanaへのお問い合わせ。成年後見・保佐補助・福祉相談についてお気軽にご連絡ください。 |

---

## 2. 構造化データ（JSON-LD）

### 2.1 トップページ：Organization スキーマ

```typescript
const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "ソーシャルサポート Ohana",
  alternateName: "Social Support Ohana",
  url: SITE_URL,
  description:
    "千葉県船橋市の独立型社会福祉士事務所。専門職後見人として、認知症・知的障害・精神障害のある方の生活と権利をサポートします。",
  address: {
    "@type": "PostalAddress",
    postalCode: "273-0005",
    addressRegion: "千葉県",
    addressLocality: "船橋市",
    streetAddress: "本町2-16-4",
    addressCountry: "JP",
  },
  contactPoint: {
    "@type": "ContactPoint",
    contactType: "customer service",
    email: "beachmemory777@gmail.com",
    faxNumber: "047-750-1871",
    availableLanguage: "Japanese",
  },
  founder: {
    "@type": "Person",
    name: "小川 知美",
    jobTitle: "代表・社会福祉士",
  },
};
```

### 2.2 各ページ：BreadcrumbList スキーマ

**事業概要ページ (`/about`):**
```typescript
const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      name: "ホーム",
      item: SITE_URL,
    },
    {
      "@type": "ListItem",
      position: 2,
      name: "事業概要",
    },
  ],
};
```

**サービスページ (`/services`):**
```typescript
const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      name: "ホーム",
      item: SITE_URL,
    },
    {
      "@type": "ListItem",
      position: 2,
      name: "サービス",
    },
  ],
};
```

**お問い合わせページ (`/contact`):**
```typescript
const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      name: "ホーム",
      item: SITE_URL,
    },
    {
      "@type": "ListItem",
      position: 2,
      name: "お問い合わせ",
    },
  ],
};
```

### 2.3 JSON-LDの埋め込み方法

```tsx
// 各ページの先頭に配置
<script
  type="application/ld+json"
  dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
/>
```

---

## 3. サイトマップ（app/sitemap.ts）

```typescript
import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/constants";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: SITE_URL,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
    },
    {
      url: `${SITE_URL}/about`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${SITE_URL}/services`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${SITE_URL}/contact`,
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 0.7,
    },
  ];
}
```

---

## 4. robots.txt（app/robots.ts）

```typescript
import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/constants";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: `${SITE_URL}/sitemap.xml`,
  };
}
```

---

## 5. HTMLセマンティクス

### 5.1 見出し階層

| ページ | h1 | h2 | h3 |
|--------|-----|-----|-----|
| トップ | `Your Life, Your Rights.` | 各セクションタイトル | - |
| 事業概要 | `事業概要` (PageHeader) | ソーシャルサポートOhanaとは / 事務所情報 / 代表者紹介 | - |
| サービス | `サービス` (PageHeader) | 各サービス名（01, 02, 03） | - |
| お問い合わせ | `お問い合わせ` (PageHeader) | - | - |

### 5.2 セマンティックHTML構造

```html
<body>
  <header>                    <!-- 固定ヘッダー -->
    <nav>...</nav>            <!-- メインナビゲーション -->
  </header>
  <main>                      <!-- ページコンテンツ -->
    <section>...</section>    <!-- 各セクション -->
    <section>...</section>
  </main>
  <footer>...</footer>        <!-- フッター -->
</body>
```

### 5.3 aria属性

| 要素 | aria属性 | 値 |
|------|---------|-----|
| ハンバーガーボタン | `aria-label` | `メニューを開く` |
| 閉じるボタン | `aria-label` | `メニューを閉じる` |
| モバイルメニュー | `aria-label` | `メインナビゲーション` |
| メールリンク | `aria-label` | `メールで問い合わせる` |
| フォーム送信ボタン | `aria-label` | - (テキストで十分) |

---

## 6. パフォーマンス最適化（SEO観点）

| 項目 | 対応 |
|------|------|
| Core Web Vitals (LCP) | ヒーロー画像に `priority` 指定 |
| Core Web Vitals (CLS) | 画像に `width`/`height` 指定 |
| Core Web Vitals (INP) | Client Componentを最小限に |
| フォント表示 | `display: "swap"` で FOUT 対応 |
| 画像最適化 | WebP形式 + next/image |

---

## 改訂履歴

| バージョン | 日付 | 内容 |
|-----------|------|------|
| 1.0 | 2026-04-14 | 初版作成 |
