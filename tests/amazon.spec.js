// @ts-check
import { test, expect } from '@playwright/test';

test('Amazon Search Product functionality', async ({ page }) => {
  await page.goto('https://www.amazon.com/');
  
  // Search for products
  //await page.getByRole('searchbox', { name: 'Search Amazon' }).click();
  await page.getByRole('searchbox', { name: 'Search Amazon' }).fill('watch');
  await page.keyboard.press('Enter');
  
  // Verify search results are displayed
  //await expect(page).toHaveURL(/.*search.*/);
});

