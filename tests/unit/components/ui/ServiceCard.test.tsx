import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import ServiceCard from "@/components/ui/ServiceCard";

describe("ServiceCard", () => {
  it("番号が表示される", () => {
    render(
      <ServiceCard number="01" title="テスト" description="説明文" />
    );
    expect(screen.getByText("01")).toBeInTheDocument();
  });

  it("タイトルが表示される", () => {
    render(
      <ServiceCard number="01" title="成年後見業務" description="説明文" />
    );
    expect(screen.getByText("成年後見業務")).toBeInTheDocument();
  });

  it("説明文が表示される", () => {
    render(
      <ServiceCard
        number="01"
        title="テスト"
        description="これはテスト説明文です"
      />
    );
    expect(screen.getByText("これはテスト説明文です")).toBeInTheDocument();
  });
});
