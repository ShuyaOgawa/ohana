import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import Badge from "@/components/ui/Badge";

describe("Badge", () => {
  it("テキストが表示される", () => {
    render(<Badge text="専門職後見人" />);
    expect(screen.getByText("専門職後見人")).toBeInTheDocument();
  });

  it("ドットが存在する", () => {
    const { container } = render(<Badge text="テスト" />);
    const dot = container.querySelector(".rounded-full");
    expect(dot).toBeInTheDocument();
  });
});
