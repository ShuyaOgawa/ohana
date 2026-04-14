# API・フォーム設計書

**プロジェクト名**: ソーシャルサポートOhana コーポレートサイト
**作成日**: 2026-04-14
**バージョン**: 1.0

---

## 1. お問い合わせフォーム仕様

### 1.1 フォームフィールド定義

| No. | フィールド名 | name属性 | 型 | 必須 | バリデーション | プレースホルダー |
|-----|-------------|---------|-----|------|---------------|----------------|
| 1 | お名前 | `name` | text | ○ | 必須 | `山田 太郎` |
| 2 | メールアドレス | `email` | email | ○ | 必須 + メール形式 | `example@email.com` |
| 3 | 相談種別 | `consultationType` | select | ○ | 必須（未選択不可） | `ご相談内容を選択してください` |
| 4 | 件名 | `subject` | text | × | - | `成年後見についてのご相談` |
| 5 | お問い合わせ内容 | `message` | textarea | ○ | 必須 + 10文字以上 | `ご相談内容をご記入ください。` |

### 1.2 相談種別の選択肢

| value | 表示テキスト |
|-------|-------------|
| `""` (デフォルト) | ご相談内容を選択してください |
| `guardianship` | 成年後見に関するご相談 |
| `assistance` | 保佐・補助に関するご相談 |
| `welfare` | 福祉相談・支援に関するご相談 |
| `other` | その他のお問い合わせ |

### 1.3 バリデーションルール

```typescript
const validationRules = {
  name: {
    required: "お名前を入力してください",
  },
  email: {
    required: "メールアドレスを入力してください",
    pattern: {
      value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
      message: "正しいメールアドレスを入力してください",
    },
  },
  consultationType: {
    required: "ご相談内容を選択してください",
  },
  message: {
    required: "お問い合わせ内容を入力してください",
    minLength: {
      value: 10,
      message: "10文字以上で入力してください",
    },
  },
};
```

---

## 2. Web3Forms API連携

### 2.1 API仕様

| 項目 | 内容 |
|------|------|
| エンドポイント | `https://api.web3forms.com/submit` |
| メソッド | `POST` |
| Content-Type | `application/json` |
| 認証 | `access_key` フィールドで認証 |

### 2.2 リクエストボディ

```typescript
{
  access_key: string;          // Web3Forms API キー
  subject: string;             // メール件名
  from_name: string;           // 送信者名
  name: string;                // お名前
  email: string;               // メールアドレス
  consultationType: string;    // 相談種別（ラベル変換後）
  message: string;             // お問い合わせ内容
}
```

### 2.3 レスポンス

**成功時:**
```json
{
  "success": true,
  "message": "Email sent successfully"
}
```

**失敗時:**
```json
{
  "success": false,
  "message": "エラーメッセージ"
}
```

### 2.4 APIクライアント（lib/web3forms.ts）

```typescript
import { SITE_NAME } from "./constants";
import type { ContactFormData } from "@/types/contact";
import { CONSULTATION_OPTIONS } from "@/data/company";

export const sendContactForm = async (data: ContactFormData) => {
  // 相談種別のvalueをラベルに変換
  const consultationLabel =
    CONSULTATION_OPTIONS.find((opt) => opt.value === data.consultationType)?.label
    ?? data.consultationType;

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
```

---

## 3. フォーム状態管理

### 3.1 状態遷移

```
idle ──(送信ボタン押下)──→ loading ──(API応答)──→ success
                                          │
                                          └──→ error ──(再送信)──→ loading
```

### 3.2 状態別UI表示

| 状態 | ボタン表示 | フォーム | メッセージ |
|------|----------|---------|-----------|
| `idle` | 「送信する」 | 入力可能 | なし |
| `loading` | 「送信中...」(disabled) | 入力不可 | なし |
| `success` | 非表示 | 非表示 | サクセスメッセージ表示 |
| `error` | 「再送信する」 | 入力可能 | エラーメッセージ表示 |

### 3.3 メッセージ表示

**サクセスメッセージ:**
```
お問い合わせありがとうございます。
内容を確認のうえ、折り返しご連絡いたします。
```

**エラーメッセージ:**
```
送信に失敗しました。
お手数ですが、しばらく経ってから再度お試しいただくか、
メール（beachmemory777@gmail.com）にて直接ご連絡ください。
```

---

## 4. メール通知

### 4.1 通知先

| 項目 | 内容 |
|------|------|
| 送信先メールアドレス | Web3Formsアカウント設定のメールアドレス |
| 件名フォーマット | `【ソーシャルサポート Ohana】お問い合わせ: {お名前}様` |

### 4.2 通知メール本文（Web3Forms自動生成）

```
お名前: {name}
メールアドレス: {email}
相談種別: {consultationType のラベル}
件名: {subject}
お問い合わせ内容:
{message}
```

---

## 5. セキュリティ対策

| 対策 | 実装方法 |
|------|---------|
| スパム対策 | Web3Forms のビルトインスパムフィルタ |
| ハニーポット | Web3Forms の botcheck フィールド（自動） |
| APIキー管理 | 環境変数 `NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY` |
| XSS対策 | React の自動エスケープ + React Hook Form |
| CSRF | Web3Forms 側で対応 |

---

## 6. Google Analytics (GA4)

### 6.1 導入方法

`app/layout.tsx` にて `<Script>` タグで GA4 を読み込む。

```typescript
// app/layout.tsx
import Script from "next/script";

const GA_MEASUREMENT_ID = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID;

// <head> 内に以下を配置:
// {GA_MEASUREMENT_ID && (
//   <>
//     <Script
//       src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
//       strategy="afterInteractive"
//     />
//     <Script id="gtag-init" strategy="afterInteractive">
//       {`
//         window.dataLayer = window.dataLayer || [];
//         function gtag(){dataLayer.push(arguments);}
//         gtag('js', new Date());
//         gtag('config', '${GA_MEASUREMENT_ID}');
//       `}
//     </Script>
//   </>
// )}
```

### 6.2 トラッキング対象

| イベント | 種別 | 備考 |
|---------|------|------|
| ページビュー | 自動 | GA4 標準のページビュートラッキング |
| フォーム送信 | カスタム（将来検討） | 送信成功時にイベントを発火（初期段階では未実装） |

---

## 改訂履歴

| バージョン | 日付 | 内容 |
|-----------|------|------|
| 1.0 | 2026-04-14 | 初版作成 |
