import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import SectionLabel from "@/components/ui/SectionLabel";

describe("SectionLabel", () => {
  it("ラベルテキストが表示される", () => {
    render(<SectionLabel label="About" />);
    expect(screen.getByText("About")).toBeInTheDocument();
  });

  it("デフォルトでgreen-midカラーが適用される", () => {
    render(<SectionLabel label="Test" />);
    const el = screen.getByText("Test");
    expect(el.className).toContain("text-green-mid");
  });

  it("variant=lightでgreen-lightカラーが適用される", () => {
    render(<SectionLabel label="Test" variant="light" />);
    const el = screen.getByText("Test");
    expect(el.className).toContain("text-green-light");
  });
});
