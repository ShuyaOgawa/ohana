import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import SectionTitle from "@/components/ui/SectionTitle";

describe("SectionTitle", () => {
  it("タイトルテキストが表示される", () => {
    render(<SectionTitle title="テストタイトル" />);
    expect(screen.getByText("テストタイトル")).toBeInTheDocument();
  });

  it("デフォルトでh2タグとして描画される", () => {
    render(<SectionTitle title="見出し" />);
    const el = screen.getByText("見出し");
    expect(el.tagName).toBe("H2");
  });

  it("as=h1でh1タグとして描画される", () => {
    render(<SectionTitle title="見出し" as="h1" />);
    const el = screen.getByText("見出し");
    expect(el.tagName).toBe("H1");
  });

  it("variant=lightで白テキストが適用される", () => {
    render(<SectionTitle title="Test" variant="light" />);
    const el = screen.getByText("Test");
    expect(el.className).toContain("text-white");
  });
});
