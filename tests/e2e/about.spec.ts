import { test, expect } from "@playwright/test";

test.describe("事業概要ページ", () => {
  test("ページヘッダーが表示される", async ({ page }) => {
    await page.goto("/about");
    await expect(page.locator("h1 >> text=事業概要")).toBeVisible();
  });

  test("事業説明が表示される", async ({ page }) => {
    await page.goto("/about");
    await expect(
      page.locator("text=ソーシャルサポートOhanaとは")
    ).toBeVisible();
  });

  test("代表者紹介が表示される", async ({ page }) => {
    await page.goto("/about");
    await expect(page.locator("text=小川 知美")).toBeVisible();
    await expect(page.locator("text=Tomomi Ogawa")).toBeVisible();
  });

  test("資格情報が表示される", async ({ page }) => {
    await page.goto("/about");
    await expect(
      page.locator("text=社会福祉士（国家資格）")
    ).toBeVisible();
  });
});
