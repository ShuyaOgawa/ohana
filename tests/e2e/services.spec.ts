import { test, expect } from "@playwright/test";

test.describe("サービスページ", () => {
  test("ページヘッダーが表示される", async ({ page }) => {
    await page.goto("/services");
    await expect(page.locator("h1 >> text=サービス")).toBeVisible();
  });

  test("3つのサービスが表示される", async ({ page }) => {
    await page.goto("/services");
    await expect(page.locator("text=成年後見業務")).toBeVisible();
    await expect(page.locator("text=保佐・補助業務")).toBeVisible();
    await expect(page.locator("text=福祉相談・支援")).toBeVisible();
  });

  test("CTAが表示される", async ({ page }) => {
    await page.goto("/services");
    await expect(
      page.locator("text=まずはお気軽にご相談ください")
    ).toBeVisible();
  });
});
