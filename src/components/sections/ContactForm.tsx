"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import type { ContactFormData } from "@/types/contact";
import { CONSULTATION_OPTIONS, COMPANY_INFO } from "@/data/company";
import { sendContactForm } from "@/lib/web3forms";

export default function ContactForm() {
  const [submitStatus, setSubmitStatus] = useState<
    "idle" | "loading" | "success" | "error"
  >("idle");

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactFormData>();

  const onSubmit = async (data: ContactFormData) => {
    setSubmitStatus("loading");
    try {
      const result = await sendContactForm(data);
      if (result.success) {
        setSubmitStatus("success");
        reset();
      } else {
        setSubmitStatus("error");
      }
    } catch {
      setSubmitStatus("error");
    }
  };

  if (submitStatus === "success") {
    return (
      <div className="text-center py-12">
        <p className="font-sans text-lg text-white mb-4">
          お問い合わせありがとうございます。
        </p>
        <p className="font-sans text-sm text-green-pale font-light leading-[1.8]">
          内容を確認のうえ、折り返しご連絡いたします。
        </p>
      </div>
    );
  }

  const inputStyles =
    "w-full bg-white/8 border border-green-light/30 rounded-sm px-4 py-3.5 font-sans text-[13px] text-white font-light transition-all duration-300 outline-none focus:border-green-light focus:bg-white/12 placeholder:text-green-pale/35";

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-5">
      {submitStatus === "error" && (
        <div className="bg-error/20 border border-error/40 rounded-sm px-4 py-3">
          <p className="font-sans text-sm text-white">送信に失敗しました。</p>
          <p className="font-sans text-xs text-green-pale/80 mt-1">
            お手数ですが、メール（{COMPANY_INFO.email}
            ）にて直接ご連絡ください。
          </p>
        </div>
      )}

      <div className="flex flex-col gap-2">
        <label className="font-sans text-[11px] tracking-[0.2em] text-green-light font-normal">
          お名前 <span className="text-sand">*</span>
        </label>
        <input
          type="text"
          className={inputStyles}
          placeholder="山田 太郎"
          {...register("name", { required: "お名前を入力してください" })}
        />
        {errors.name && (
          <p className="font-sans text-xs text-error">{errors.name.message}</p>
        )}
      </div>

      <div className="flex flex-col gap-2">
        <label className="font-sans text-[11px] tracking-[0.2em] text-green-light font-normal">
          メールアドレス <span className="text-sand">*</span>
        </label>
        <input
          type="email"
          className={inputStyles}
          placeholder="example@email.com"
          {...register("email", {
            required: "メールアドレスを入力してください",
            pattern: {
              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
              message: "正しいメールアドレスを入力してください",
            },
          })}
        />
        {errors.email && (
          <p className="font-sans text-xs text-error">{errors.email.message}</p>
        )}
      </div>

      <div className="flex flex-col gap-2">
        <label className="font-sans text-[11px] tracking-[0.2em] text-green-light font-normal">
          相談種別 <span className="text-sand">*</span>
        </label>
        <select
          className={`${inputStyles} appearance-none bg-[url('data:image/svg+xml;charset=UTF-8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2212%22%20height%3D%2212%22%20viewBox%3D%220%200%2012%2012%22%3E%3Cpath%20d%3D%22M2%204l4%204%204-4%22%20fill%3D%22none%22%20stroke%3D%22%237aab94%22%20stroke-width%3D%221.5%22%2F%3E%3C%2Fsvg%3E')] bg-no-repeat bg-[position:right_16px_center]`}
          {...register("consultationType", {
            required: "ご相談内容を選択してください",
          })}
          defaultValue=""
        >
          <option value="" disabled>
            ご相談内容を選択してください
          </option>
          {CONSULTATION_OPTIONS.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
        {errors.consultationType && (
          <p className="font-sans text-xs text-error">
            {errors.consultationType.message}
          </p>
        )}
      </div>

      <div className="flex flex-col gap-2">
        <label className="font-sans text-[11px] tracking-[0.2em] text-green-light font-normal">
          件名
        </label>
        <input
          type="text"
          className={inputStyles}
          placeholder="成年後見についてのご相談"
          {...register("subject")}
        />
      </div>

      <div className="flex flex-col gap-2">
        <label className="font-sans text-[11px] tracking-[0.2em] text-green-light font-normal">
          お問い合わせ内容 <span className="text-sand">*</span>
        </label>
        <textarea
          className={`${inputStyles} resize-y min-h-[120px]`}
          placeholder="ご相談内容をご記入ください。"
          {...register("message", {
            required: "お問い合わせ内容を入力してください",
            minLength: {
              value: 10,
              message: "10文字以上で入力してください",
            },
          })}
        />
        {errors.message && (
          <p className="font-sans text-xs text-error">
            {errors.message.message}
          </p>
        )}
      </div>

      <button
        type="submit"
        disabled={submitStatus === "loading"}
        className="self-start px-10 py-3.5 bg-transparent border border-sand text-sand-light font-sans text-xs tracking-[0.2em] cursor-pointer transition-all duration-300 rounded-sm hover:bg-sand hover:text-green-deep disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {submitStatus === "loading" ? "送信中..." : "送信する"}
      </button>
    </form>
  );
}
