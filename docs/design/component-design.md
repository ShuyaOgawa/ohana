# コンポーネント設計書

**プロジェクト名**: ソーシャルサポートOhana コーポレートサイト
**作成日**: 2026-04-14
**バージョン**: 1.0

---

## 1. コンポーネントツリー

```
src/
├── app/
│   ├── layout.tsx                 ← RootLayout (Server Component)
│   │   ├── Header                 ← "use client"
│   │   │   └── MobileMenu         ← "use client"
│   │   ├── {children}             ← ページコンテンツ
│   │   └── Footer                 ← Server Component
│   │
│   ├── page.tsx                   ← トップページ (Server Component)
│   │   ├── HeroSection
│   │   ├── AboutSection
│   │   ├── ServicesSection
│   │   └── CtaSection
│   │
│   ├── about/page.tsx             ← 事業概要ページ (Server Component)
│   │   ├── PageHeader
│   │   ├── AboutDetail
│   │   ├── OfficeInfo
│   │   ├── ProfileSection
│   │   └── CtaSection
│   │
│   ├── services/page.tsx          ← サービスページ (Server Component)
│   │   ├── PageHeader
│   │   ├── ServicesDetail
│   │   └── CtaSection
│   │
│   ├── contact/page.tsx           ← お問い合わせページ (Server Component)
│   │   ├── PageHeader
│   │   ├── ContactInfo
│   │   └── ContactForm            ← "use client"
│   │
│   └── not-found.tsx              ← 404ページ (Server Component)
│
├── components/
│   ├── layout/
│   │   ├── Header.tsx
│   │   ├── MobileMenu.tsx
│   │   └── Footer.tsx
│   │
│   ├── sections/
│   │   ├── HeroSection.tsx
│   │   ├── AboutSection.tsx
│   │   ├── AboutDetail.tsx
│   │   ├── OfficeInfo.tsx
│   │   ├── ProfileSection.tsx
│   │   ├── ServicesSection.tsx
│   │   ├── ServicesDetail.tsx
│   │   ├── CtaSection.tsx
│   │   ├── ContactForm.tsx
│   │   ├── ContactInfo.tsx
│   │   └── PageHeader.tsx
│   │
│   └── ui/
│       ├── Button.tsx
│       ├── SectionLabel.tsx
│       ├── SectionTitle.tsx
│       ├── ServiceCard.tsx
│       ├── Badge.tsx
│       └── ScrollFadeIn.tsx
│
├── data/
│   ├── company.ts
│   ├── services.ts
│   └── navigation.ts
│
├── lib/
│   ├── constants.ts
│   └── web3forms.ts
│
└── types/
    ├── company.ts
    ├── service.ts
    ├── contact.ts
    └── navigation.ts
```

---

## 2. レイアウトコンポーネント

### 2.1 Header

| 項目 | 内容 |
|------|------|
| ファイル | `components/layout/Header.tsx` |
| ディレクティブ | `"use client"` |
| 状態管理 | `isMobileMenuOpen: boolean`, `isScrolled: boolean` |

```typescript
// Props: なし（データは constants/navigation から取得）

// 内部ロジック:
// - usePathname() で現在のパスを取得し、アクティブリンクを判定
// - useEffect + scroll イベントで isScrolled を管理
// - isScrolled === true の場合、box-shadow を付与

// レンダリング:
// <header>
//   <Logo /> (リンク → /)
//   <nav> (デスクトップ: 表示 / モバイル: 非表示)
//   <HamburgerButton /> (デスクトップ: 非表示 / モバイル: 表示)
//   <MobileMenu isOpen={isMobileMenuOpen} onClose={...} />
// </header>
```

### 2.2 MobileMenu

| 項目 | 内容 |
|------|------|
| ファイル | `components/layout/MobileMenu.tsx` |
| ディレクティブ | `"use client"` |

```typescript
type MobileMenuProps = {
  isOpen: boolean;
  onClose: () => void;
};

// 内部ロジック:
// - isOpen 変更時に body の overflow を制御
// - usePathname() の変更を監視し、ページ遷移時に自動クローズ
// - ESCキーでメニューを閉じる

// レンダリング:
// <div> (オーバーレイ背景)
//   <nav> (スライドパネル)
//     <CloseButton />
//     <NavLink /> × 4
//   </nav>
// </div>
```

### 2.3 Footer

| 項目 | 内容 |
|------|------|
| ファイル | `components/layout/Footer.tsx` |
| ディレクティブ | なし（Server Component） |

```typescript
// Props: なし（データは data/company.ts + lib/constants.ts から取得）

// レンダリング:
// <footer>
//   <div> (上段: 営業時間)
//     <p> 営業時間 9:00〜18:00（平日のみ／土日祝日・年末年始休み）
//   <div> (下段: ロゴ + コピーライト)
//     <span> Social Support Ohana (テキストロゴ)
//     <span> © 2025 ソーシャルサポート Ohana 小川知美
// </footer>
```

---

## 3. セクションコンポーネント

### 3.1 HeroSection

| 項目 | 内容 |
|------|------|
| ファイル | `components/sections/HeroSection.tsx` |
| ディレクティブ | なし（Server Component） |
| 使用ページ | トップページ |

```typescript
// Props: なし（テキストは直接記述 or constants から取得）

// レンダリング:
// <section class="hero">
//   <div class="hero-left">
//     背景画像 (next/image fill) + オーバーレイ
//     タグライン / メインコピー / サブコピー / 区切り線 / 説明文
//     各要素に fadeUp アニメーション (CSS animation)
//   </div>
//   <div class="hero-right">
//     "Ohana" 大文字装飾 (CSS ::before)
//     Badge × 4
//   </div>
// </section>
```

### 3.2 AboutSection（トップページ用要約）

| 項目 | 内容 |
|------|------|
| ファイル | `components/sections/AboutSection.tsx` |
| ディレクティブ | なし（Server Component） |
| 使用ページ | トップページ |

```typescript
// Props: なし

// レンダリング:
// <section>
//   <SectionLabel label="About" />
//   <SectionTitle title="ソーシャルサポートOhanaとは" />
//   <p> 事業概要の要約文
//   <Button href="/about"> 事業について詳しく見る
// </section>
```

### 3.3 AboutDetail（事業概要ページ用詳細）

| 項目 | 内容 |
|------|------|
| ファイル | `components/sections/AboutDetail.tsx` |
| ディレクティブ | なし（Server Component） |
| 使用ページ | 事業概要ページ |

```typescript
// Props: なし

// レンダリング:
// <section>
//   <SectionLabel label="About" />
//   <SectionTitle title="ソーシャルサポートOhanaとは" />
//   <div class="about-grid">
//     <div> 説明文（3段落）
//     <div class="about-card"> 対象となる方リスト
//   </div>
// </section>
```

### 3.4 OfficeInfo

| 項目 | 内容 |
|------|------|
| ファイル | `components/sections/OfficeInfo.tsx` |
| ディレクティブ | なし（Server Component） |
| 使用ページ | 事業概要ページ |

```typescript
// Props: なし（データは data/company.ts から取得）

// レンダリング:
// <section>
//   <SectionLabel label="Office" />
//   <SectionTitle title="事務所情報" />
//   <table> or <dl>
//     事務所名 / 代表者 / 所在地 / FAX / メール / 営業時間 / 定休日 / 設立
//   </table>
// </section>
```

### 3.5 ProfileSection

| 項目 | 内容 |
|------|------|
| ファイル | `components/sections/ProfileSection.tsx` |
| ディレクティブ | なし（Server Component） |
| 使用ページ | 事業概要ページ |

```typescript
// Props: なし（データは data/company.ts から取得）

// レンダリング:
// <section id="profile">
//   <SectionLabel label="Profile" />
//   <SectionTitle title="代表者紹介" />
//   <div class="profile-inner">
//     <div class="profile-name-block"> (sticky)
//       名前(日) / 名前(英) / 肩書
//     </div>
//     <div class="profile-details">
//       プロフィール文 / 資格リスト
//     </div>
//   </div>
// </section>
```

### 3.6 ServicesSection（トップページ用要約）

| 項目 | 内容 |
|------|------|
| ファイル | `components/sections/ServicesSection.tsx` |
| ディレクティブ | なし（Server Component） |
| 使用ページ | トップページ |

```typescript
// Props: なし（データは data/services.ts から取得）

// レンダリング:
// <section>
//   <SectionLabel label="Services" />
//   <SectionTitle title="主なサービス" />
//   <div class="services-grid"> (3カラム)
//     <ServiceCard /> × 3
//   </div>
//   <Button href="/services"> サービスを詳しく見る
// </section>
```

### 3.7 ServicesDetail（サービスページ用詳細）

| 項目 | 内容 |
|------|------|
| ファイル | `components/sections/ServicesDetail.tsx` |
| ディレクティブ | なし（Server Component） |
| 使用ページ | サービスページ |

```typescript
// Props: なし（データは data/services.ts から取得）

// レンダリング:
// <section>
//   サービスカード × 3（フルワイド、詳細説明付き）
// </section>
```

### 3.8 CtaSection

| 項目 | 内容 |
|------|------|
| ファイル | `components/sections/CtaSection.tsx` |
| ディレクティブ | なし（Server Component） |
| 使用ページ | トップ、事業概要、サービス |

```typescript
// Props: なし

// レンダリング:
// <section class="cta"> (green-deep 背景)
//   <p> まずはお気軽にご相談ください
//   <Button href="/contact" variant="outline"> お問い合わせはこちら
// </section>
```

### 3.9 ContactForm

| 項目 | 内容 |
|------|------|
| ファイル | `components/sections/ContactForm.tsx` |
| ディレクティブ | `"use client"` |
| 使用ページ | お問い合わせページ |

```typescript
// Props: なし

// 内部状態:
// - React Hook Form による form 管理
// - submitStatus: "idle" | "loading" | "success" | "error"

// フォームフィールド:
// 1. お名前 (text, required)
// 2. メールアドレス (email, required)
// 3. 相談種別 (select, required)
// 4. 件名 (text, optional)
// 5. お問い合わせ内容 (textarea, required, minLength: 10)

// 送信処理:
// - Web3Forms API へ POST
// - 成功時: サクセスメッセージ表示 + フォームリセット
// - 失敗時: エラーメッセージ表示
```

### 3.10 ContactInfo

| 項目 | 内容 |
|------|------|
| ファイル | `components/sections/ContactInfo.tsx` |
| ディレクティブ | なし（Server Component） |
| 使用ページ | お問い合わせページ |

```typescript
// Props: なし（データは data/company.ts から取得）

// レンダリング:
// 事務所名 / 代表者 / 所在地 / FAX / メール / 営業時間 / 備考
```

### 3.11 PageHeader

| 項目 | 内容 |
|------|------|
| ファイル | `components/sections/PageHeader.tsx` |
| ディレクティブ | なし（Server Component） |
| 使用ページ | 事業概要、サービス、お問い合わせ |

```typescript
type PageHeaderProps = {
  labelEn: string;    // "About", "Services", "Contact"
  titleJp: string;    // "事業概要", "サービス", "お問い合わせ"
};

// レンダリング:
// <section> (green-deep 背景, padding-top でヘッダー分を確保)
//   <SectionLabel label={labelEn} />
//   <h1> {titleJp}
// </section>
```

---

## 4. UIコンポーネント

### 4.1 Button

| 項目 | 内容 |
|------|------|
| ファイル | `components/ui/Button.tsx` |
| ディレクティブ | なし（Server Component） |

```typescript
type ButtonProps = {
  children: React.ReactNode;
  variant?: "primary" | "outline";
  href?: string;
  type?: "button" | "submit";
  disabled?: boolean;
  loading?: boolean;
  className?: string;
  onClick?: () => void;
};

// variant別スタイル:
// primary: sand ボーダー + ホバーで sand 背景
// outline: transparent 背景 + sand ボーダー + ホバーで sand 背景

// href指定時: <Link> としてレンダリング
// href未指定時: <button> としてレンダリング
```

### 4.2 SectionLabel

| 項目 | 内容 |
|------|------|
| ファイル | `components/ui/SectionLabel.tsx` |
| ディレクティブ | なし（Server Component） |

```typescript
type SectionLabelProps = {
  label: string;        // "About", "Services", etc.
  variant?: "default" | "light";  // light: 暗い背景用
};

// レンダリング:
// <p> Cormorant Garamond, 11px, letter-spacing: 0.4em, uppercase
// default: color: --green-mid
// light: color: --green-light
```

### 4.3 SectionTitle

| 項目 | 内容 |
|------|------|
| ファイル | `components/ui/SectionTitle.tsx` |
| ディレクティブ | なし（Server Component） |

```typescript
type SectionTitleProps = {
  title: string;
  as?: "h1" | "h2" | "h3";  // デフォルト: "h2"
  variant?: "default" | "light";  // light: 暗い背景用
};

// レンダリング:
// <h2> Noto Serif JP, clamp(20px, 3vw, 28px), letter-spacing: 0.12em
```

### 4.4 ServiceCard

| 項目 | 内容 |
|------|------|
| ファイル | `components/ui/ServiceCard.tsx` |
| ディレクティブ | なし（Server Component） |

```typescript
type ServiceCardProps = {
  number: string;       // "01", "02", "03"
  title: string;
  description: string;
};

// レンダリング:
// <div> 上部ボーダー(green-mid) + warm-white背景
//   <p class="service-num"> Cormorant Garamond, 36px
//   <p class="service-title"> Noto Serif JP, 15px
//   <p class="service-desc"> Noto Sans JP, 12px
// ホバー: translateY(-4px) + box-shadow
```

### 4.5 Badge

| 項目 | 内容 |
|------|------|
| ファイル | `components/ui/Badge.tsx` |
| ディレクティブ | なし（Server Component） |

```typescript
type BadgeProps = {
  text: string;
};

// レンダリング:
// <div class="badge">
//   <span class="badge-dot" /> (6px 緑丸)
//   <span> Noto Sans JP, 12px
// </div>
```

### 4.6 ScrollFadeIn

| 項目 | 内容 |
|------|------|
| ファイル | `components/ui/ScrollFadeIn.tsx` |
| ディレクティブ | `"use client"` |

```typescript
type ScrollFadeInProps = {
  children: React.ReactNode;
  delay?: number;       // アニメーション遅延 (ms)、デフォルト: 0
  className?: string;
};

// 内部ロジック:
// - useRef + IntersectionObserver
// - threshold: 0.1
// - isVisible 状態でクラスを切り替え
// - opacity: 0 → 1, translateY(24px) → 0
// - transition: opacity 0.7s ease, transform 0.7s ease
```

---

## 5. Server Component / Client Component 分類

| コンポーネント | 種別 | 理由 |
|---------------|------|------|
| Header | Client | スクロール検知、メニュー開閉状態管理 |
| MobileMenu | Client | 開閉アニメーション、body overflow 制御 |
| Footer | Server | インタラクション不要（営業時間表示あり） |
| HeroSection | Server | CSS animationのみ（JSイベント不要） |
| AboutSection | Server | 静的コンテンツ |
| AboutDetail | Server | 静的コンテンツ |
| OfficeInfo | Server | 静的コンテンツ |
| ProfileSection | Server | 静的コンテンツ |
| ServicesSection | Server | 静的コンテンツ |
| ServicesDetail | Server | 静的コンテンツ |
| CtaSection | Server | 静的コンテンツ |
| ContactForm | Client | フォーム状態管理、送信処理 |
| ContactInfo | Server | 静的コンテンツ |
| PageHeader | Server | 静的コンテンツ |
| Button | Server | href時はLink、それ以外は静的 |
| SectionLabel | Server | 静的表示 |
| SectionTitle | Server | 静的表示 |
| ServiceCard | Server | 静的表示 |
| Badge | Server | 静的表示 |
| ScrollFadeIn | Client | IntersectionObserver使用 |

---

## 改訂履歴

| バージョン | 日付 | 内容 |
|-----------|------|------|
| 1.0 | 2026-04-14 | 初版作成 |
| 1.1 | 2026-04-29 | OfficeInfo・ContactInfo・Footer に営業時間を追加 |
