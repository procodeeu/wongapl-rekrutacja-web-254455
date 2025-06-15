import { test, expect } from '@playwright/test';

test.describe('Visual Regression tests', () => {
  test('homepage should look correct', async ({ page }) => {
    await page.goto('/');
    await expect(page).toHaveScreenshot('homepage.png', {
      fullPage: true,
    });
  });

  test('our projects page should look correct', async ({ page }) => {
    await page.goto('/nasze-projekty/1');
    await expect(page).toHaveScreenshot('our-projects.png', {
      fullPage: true,
    });
  });

  test('project detail page should look correct', async ({ page }) => {
    await page.goto('/nasze-projekty/1');
    const firstProjectLink = page.locator('.project-card h2 a').first();
    await firstProjectLink.click();
    await expect(page.locator('.project-header h1')).toBeVisible();
    await expect(page).toHaveScreenshot('project-detail.png', {
      fullPage: true,
    });
  });
});
