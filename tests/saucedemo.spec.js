import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://www.saucedemo.com/');
  await page.locator('[data-test="username"]').click();
  await page.locator('[data-test="username"]').fill('Chamarthi@gmail.com');
  await page.locator('[data-test="password"]').click();
  await page.locator('[data-test="password"]').fill('vasavi123');
  await page.locator('[data-test="login-button"]').click();
});