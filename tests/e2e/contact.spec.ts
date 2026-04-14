import { test, expect } from "@playwright/test";

test.describe("お問い合わせページ", () => {
  test("ページヘッダーが表示される", async ({ page }) => {
    await page.goto("/contact");
    await expect(page.locator("h1 >> text=お問い合わせ")).toBeVisible();
  });

  test("連絡先情報が表示される", async ({ page }) => {
    await page.goto("/contact");
    await expect(
      page.locator("text=ソーシャルサポート Ohana").first()
    ).toBeVisible();
    await expect(page.locator("text=047-750-1871")).toBeVisible();
  });

  test("フォームフィールドが表示される", async ({ page }) => {
    await page.goto("/contact");
    await expect(page.locator('input[placeholder="山田 太郎"]')).toBeVisible();
    await expect(
      page.locator('input[placeholder="example@email.com"]')
    ).toBeVisible();
    await expect(
      page.locator("select")
    ).toBeVisible();
    await expect(page.locator("textarea")).toBeVisible();
  });

  test("必須バリデーションが動作する", async ({ page }) => {
    await page.goto("/contact");
    await page.click("button >> text=送信する");
    await expect(
      page.locator("text=お名前を入力してください")
    ).toBeVisible();
  });
});
