import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import Button from "@/components/ui/Button";

describe("Button", () => {
  it("テキストが表示される", () => {
    render(<Button>テスト</Button>);
    expect(screen.getByText("テスト")).toBeInTheDocument();
  });

  it("href指定時はリンクとして描画される", () => {
    render(<Button href="/about">リンク</Button>);
    const link = screen.getByText("リンク");
    expect(link.closest("a")).toHaveAttribute("href", "/about");
  });

  it("href未指定時はbuttonとして描画される", () => {
    render(<Button>ボタン</Button>);
    const button = screen.getByText("ボタン");
    expect(button.tagName).toBe("BUTTON");
  });

  it("disabled状態が設定される", () => {
    render(<Button disabled>無効</Button>);
    expect(screen.getByText("無効")).toBeDisabled();
  });

  it("loading状態で送信中と表示される", () => {
    render(<Button loading>送信</Button>);
    expect(screen.getByText("送信中...")).toBeInTheDocument();
  });

  it("type=submitが設定される", () => {
    render(<Button type="submit">送信</Button>);
    expect(screen.getByText("送信")).toHaveAttribute("type", "submit");
  });
});
