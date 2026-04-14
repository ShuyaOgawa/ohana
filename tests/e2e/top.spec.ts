import { test, expect } from "@playwright/test";

test.describe("トップページ", () => {
  test("ヒーローセクションが表示される", async ({ page }) => {
    await page.goto("/");
    await expect(page.locator("text=Your Life,")).toBeVisible();
    await expect(page.locator("text=Your Rights.")).toBeVisible();
  });

  test("サブコピーが表示される", async ({ page }) => {
    await page.goto("/");
    await expect(
      page.locator("text=あなたの権利を、共に守ります。")
    ).toBeVisible();
  });

  test("事業概要セクションが表示される", async ({ page }) => {
    await page.goto("/");
    await expect(
      page.locator("text=ソーシャルサポートOhanaとは")
    ).toBeVisible();
  });

  test("サービスカードが3つ表示される", async ({ page }) => {
    await page.goto("/");
    await expect(page.locator("text=成年後見業務")).toBeVisible();
    await expect(page.locator("text=保佐・補助業務")).toBeVisible();
    await expect(page.locator("text=福祉相談・支援")).toBeVisible();
  });

  test("CTAセクションが表示される", async ({ page }) => {
    await page.goto("/");
    await expect(
      page.locator("text=まずはお気軽にご相談ください")
    ).toBeVisible();
  });

  test("タイトルタグが正しい", async ({ page }) => {
    await page.goto("/");
    await expect(page).toHaveTitle(
      /ソーシャルサポート Ohana/
    );
  });
});
