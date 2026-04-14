import { test, expect } from "@playwright/test";

test.describe("404ページ", () => {
  test("存在しないURLで404が表示される", async ({ page }) => {
    await page.goto("/nonexistent-page");
    await expect(page.locator("text=404")).toBeVisible();
    await expect(
      page.locator("text=ページが見つかりませんでした")
    ).toBeVisible();
  });

  test("トップへ戻るリンクが機能する", async ({ page }) => {
    await page.goto("/nonexistent-page");
    await page.click("text=トップへ戻る");
    await expect(page).toHaveURL("/");
  });
});
