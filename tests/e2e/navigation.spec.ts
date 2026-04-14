import { test, expect } from "@playwright/test";

test.describe("ナビゲーション", () => {
  test("ヘッダーが表示される", async ({ page }) => {
    await page.goto("/");
    await expect(page.locator("header")).toBeVisible();
    await expect(page.locator("text=Social Support Ohana").first()).toBeVisible();
  });

  test("フッターが表示される", async ({ page }) => {
    await page.goto("/");
    await expect(page.locator("footer")).toBeVisible();
  });

  test("事業概要ページに遷移できる", async ({ page }) => {
    await page.goto("/");
    await page.click("header >> text=事業について");
    await expect(page).toHaveURL("/about");
  });

  test("サービスページに遷移できる", async ({ page }) => {
    await page.goto("/");
    await page.click("header >> text=サービス");
    await expect(page).toHaveURL("/services");
  });

  test("お問い合わせページに遷移できる", async ({ page }) => {
    await page.goto("/");
    await page.click("header >> text=お問い合わせ");
    await expect(page).toHaveURL("/contact");
  });
});
