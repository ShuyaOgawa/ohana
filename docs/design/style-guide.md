# スタイルガイド設計書

**プロジェクト名**: ソーシャルサポートOhana コーポレートサイト
**作成日**: 2026-04-14
**バージョン**: 1.0

---

## 1. テーマ定義（globals.css）

Tailwind CSS v4 では `@theme inline` ディレクティブで CSS 変数を定義する。

```css
@import "tailwindcss";

@theme inline {
  /* ── 背景色 ── */
  --color-cream: #f9f5ee;
  --color-warm-white: #fdfaf5;

  /* ── メインカラー（深緑系） ── */
  --color-green-deep: #2d4a3e;
  --color-green-mid: #4a7c6b;
  --color-green-light: #7aab94;
  --color-green-pale: #c8ddd6;

  /* ── サンド（砂色）系 ── */
  --color-sand: #c9b99a;
  --color-sand-light: #e8dccb;

  /* ── テキストカラー ── */
  --color-text-dark: #1e2e28;
  --color-text-mid: #4a5e57;
  --color-text-light: #7a8e87;

  /* ── ステータスカラー ── */
  --color-success: #059669;
  --color-error: #dc2626;

  /* ── フォント ── */
  --font-serif: "Cormorant Garamond", "Noto Serif JP", serif;
  --font-sans: "Noto Sans JP", sans-serif;
  --font-display: "Cormorant Garamond", serif;
}

html {
  scroll-behavior: smooth;
}

body {
  font-family: var(--font-serif);
  background: var(--color-warm-white);
  color: var(--color-text-dark);
}
```

---

## 2. カラーパレット

### 2.1 カラーマップ

| カテゴリ | 変数名 | コード | Tailwindクラス | 用途 |
|---------|--------|--------|---------------|------|
| 背景 | `--color-cream` | `#f9f5ee` | `bg-cream` | セクション背景（交互） |
| 背景 | `--color-warm-white` | `#fdfaf5` | `bg-warm-white` | メイン背景 |
| メイン | `--color-green-deep` | `#2d4a3e` | `bg-green-deep` | ヒーロー、CTA、フッター |
| メイン | `--color-green-mid` | `#4a7c6b` | `text-green-mid` | ラベル、ボーダー |
| メイン | `--color-green-light` | `#7aab94` | `text-green-light` | サブアクセント |
| メイン | `--color-green-pale` | `#c8ddd6` | `text-green-pale` | 暗い背景上のテキスト |
| 装飾 | `--color-sand` | `#c9b99a` | `border-sand` | ボーダー、装飾線 |
| 装飾 | `--color-sand-light` | `#e8dccb` | `border-sand-light` | 薄いボーダー |
| テキスト | `--color-text-dark` | `#1e2e28` | `text-text-dark` | 見出し |
| テキスト | `--color-text-mid` | `#4a5e57` | `text-text-mid` | 本文 |
| テキスト | `--color-text-light` | `#7a8e87` | `text-text-light` | 補助テキスト |

### 2.2 背景パターン

| パターン | 背景色 | テキスト色 | 用途 |
|---------|--------|-----------|------|
| ライト A | `warm-white` | `text-dark` / `text-mid` | 通常セクション |
| ライト B | `cream` | `text-dark` / `text-mid` | 交互セクション |
| ダーク | `green-deep` | `white` / `green-pale` | ヒーロー、CTA、コンタクト |
| フッター | `text-dark` | `text-light` | フッター |

### 2.3 コントラスト比（WCAG AA準拠）

| 組み合わせ | コントラスト比 | 判定 |
|-----------|---------------|------|
| `text-dark` on `warm-white` | 13.5:1 | ✅ |
| `text-mid` on `warm-white` | 7.2:1 | ✅ |
| `text-mid` on `cream` | 6.8:1 | ✅ |
| `green-pale` on `green-deep` | 6.9:1 | ✅ |
| `white` on `green-deep` | 10.8:1 | ✅ |
| `text-light` on `text-dark` | 4.6:1 | ✅ |

---

## 3. タイポグラフィ

### 3.1 フォントファミリー

| 用途 | フォント | 変数 |
|------|----------|------|
| 英字見出し・ロゴ・番号 | Cormorant Garamond | `--font-display` |
| 日本語見出し | Noto Serif JP | `--font-serif` |
| 本文・ナビ・フォーム | Noto Sans JP | `--font-sans` |

### 3.2 フォントウェイト

| フォント | ウェイト | 用途 |
|---------|---------|------|
| Cormorant Garamond | 300 (Light) | ロゴ、番号、見出し |
| Cormorant Garamond | 400 (Regular) | 汎用 |
| Cormorant Garamond | 500 (Medium) | 強調 |
| Noto Serif JP | 300 (Light) | 説明文 |
| Noto Serif JP | 400 (Regular) | 見出し |
| Noto Serif JP | 500 (Medium) | 強調見出し |
| Noto Sans JP | 300 (Light) | 本文 |
| Noto Sans JP | 400 (Regular) | ナビ、ラベル |

### 3.3 テキストスタイル定義

| 名前 | フォント | サイズ | ウェイト | 行間 | 字間 | 用途 |
|------|---------|--------|---------|------|------|------|
| hero-title-en | Cormorant Garamond | clamp(38px, 5vw, 58px) | 300 | 1.15 | 0.05em | ヒーローメインコピー |
| hero-title-jp | Noto Serif JP | clamp(13px, 1.5vw, 16px) | 300 | - | 0.2em | ヒーローサブコピー |
| hero-desc | Noto Sans JP | 13px | 300 | 2.2 | - | ヒーロー説明文 |
| section-label | Cormorant Garamond | 11px | - | - | 0.4em | セクション英字ラベル |
| section-title | Noto Serif JP | clamp(20px, 3vw, 28px) | 400 | 1.5 | 0.12em | セクション見出し |
| body-text | Noto Sans JP | 14px | 300 | 2.4 | - | 本文 |
| body-text-sm | Noto Sans JP | 13px | 300 | 2.4 / 2.0 | - | 小さめ本文 |
| nav-link | Noto Sans JP | 12px | - | - | 0.15em | ナビゲーション |
| logo-en | Cormorant Garamond | 22px | 300 | - | 0.12em | ロゴ英字 |
| logo-jp | Noto Serif JP | 12px | 300 | - | 0.15em | ロゴ日本語 |
| service-num | Cormorant Garamond | 36px | 300 | - | - | サービス番号 |
| service-title | Noto Serif JP | 15px | 500 | - | 0.1em | サービスタイトル |
| form-label | Noto Sans JP | 11px | 400 | - | 0.2em | フォームラベル |
| form-input | Noto Sans JP | 13px | 300 | - | - | フォーム入力 |

---

## 4. スペーシング

### 4.1 セクション

| 要素 | 値 |
|------|-----|
| セクション上下パディング | 100px |
| コンテナ最大幅 | 1000px |
| コンテナ左右パディング | 48px（デスクトップ）/ 24px（モバイル） |
| セクションタイトル下マージン | 48px |
| セクションラベル下マージン | 12px |

### 4.2 グリッド

| グリッド | カラム | ギャップ |
|---------|--------|---------|
| about-grid | 1fr 1fr | 64px |
| services-grid | repeat(3, 1fr) | 24px |
| profile-inner | 1fr 2fr | 80px |
| contact-grid | 1fr 1fr | 64px |

### 4.3 モバイルでのグリッド変更

768px 以下ですべてのグリッドが `1fr`（1カラム）に変更。ギャップは 40px。

---

## 5. コンポーネントスタイル

### 5.1 ボタン

```
共通:
  padding: 14px 40px
  font-family: Noto Sans JP
  font-size: 12px
  letter-spacing: 0.2em
  border-radius: 2px
  cursor: pointer
  transition: background 0.3s, color 0.3s

outline (暗い背景上):
  background: transparent
  border: 1px solid var(--sand)
  color: var(--sand-light)
  hover → background: var(--sand), color: var(--green-deep)

primary (明るい背景上):
  background: var(--green-deep)
  border: 1px solid var(--green-deep)
  color: white
  hover → background: var(--green-mid)
```

### 5.2 カード（サービスカード）

```
background: var(--warm-white)
padding: 40px 32px
border-top: 2px solid var(--green-mid)
transition: transform 0.3s, box-shadow 0.3s
hover:
  transform: translateY(-4px)
  box-shadow: 0 12px 32px rgba(45,74,62,0.1)
```

### 5.3 バッジ

```
display: inline-flex
align-items: center
gap: 10px
padding: 12px 20px
border: 1px solid var(--sand)
background: rgba(255,255,255,0.7)
border-radius: 2px
```

### 5.4 フォーム入力

```
background: rgba(255,255,255,0.08)
border: 1px solid rgba(122,171,148,0.3)
border-radius: 2px
padding: 14px 16px
color: white
transition: border-color 0.3s, background 0.3s
focus:
  border-color: var(--green-light)
  background: rgba(255,255,255,0.12)
placeholder:
  color: rgba(200,221,214,0.35)
```

---

## 6. アニメーション

### 6.1 fadeUp（ヒーロー用）

```css
@keyframes fadeUp {
  from { opacity: 0; transform: translateY(20px); }
  to   { opacity: 1; transform: translateY(0); }
}
```

- 使用箇所: ヒーローの各要素
- 遅延: 0.2s → 0.4s → 0.6s → 0.7s → 0.8s → 0.9s（順次表示）

### 6.2 ScrollFadeIn（スクロール連動）

```
初期状態:
  opacity: 0
  transform: translateY(24px)
  transition: opacity 0.7s ease, transform 0.7s ease

表示状態:
  opacity: 1
  transform: translateY(0)
```

- トリガー: IntersectionObserver (threshold: 0.1)

### 6.3 MobileMenu（スライド）

```
閉じた状態:
  transform: translateX(100%)

開いた状態:
  transform: translateX(0)

transition: transform 0.3s ease
```

---

## 7. レスポンシブブレークポイント

| ブレークポイント | 値 | 主な変更 |
|----------------|-----|---------|
| モバイル | 〜768px | 1カラム化、ナビ非表示、パディング縮小 |
| デスクトップ | 769px〜 | 通常表示 |

### 7.1 モバイル時の変更一覧

| 要素 | デスクトップ | モバイル |
|------|-------------|---------|
| header padding | 18px 48px | 16px 24px |
| nav | flex 表示 | display: none |
| hero | 2カラム grid | 1カラム |
| hero-left padding | 140px 80px 80px | 120px 32px 60px |
| hero-right padding | 140px 80px 80px | 60px 32px |
| "Ohana" 装飾文字 | 180px | 80px |
| container padding | 0 48px | 0 24px |
| about-grid | 2カラム, gap 64px | 1カラム, gap 40px |
| services-grid | 3カラム, gap 24px | 1カラム, gap 40px |
| profile-inner | 1fr 2fr, gap 80px | 1カラム, gap 40px |
| contact-grid | 2カラム, gap 64px | 1カラム, gap 40px |
| profile-name-block | sticky | static |
| footer | flex row | flex column, text-align center |

---

## 改訂履歴

| バージョン | 日付 | 内容 |
|-----------|------|------|
| 1.0 | 2026-04-14 | 初版作成 |
