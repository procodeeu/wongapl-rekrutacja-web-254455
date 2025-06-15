import { test, expect } from '@playwright/test';

test.describe('Home Page links', () => {
  test('home page - should have working logo link', async ({ page }) => {
    await page.goto('/nasze-projekty/1');
    await page.click('.brand-link');
    await expect(page).toHaveURL('/');
    await expect(page.locator('.intro-section h1')).toContainText('Twój projekt IT');
  });

  test('home page - should have working footer links', async ({ page }) => {
    await page.goto('/');

    await page.click('.footer-link[href="/nasze-projekty"]');
    await expect(page).toHaveURL('/nasze-projekty/1');
    await expect(page.locator('.news-page-header h1')).toContainText('Nasze projekty');
  });

  test('home page - should have working news card links', async ({ page }) => {
    await page.goto('/');
    const firstCard = page.locator('.news-card').first();
    await expect(firstCard.locator('.news-read-more')).toContainText('Czytaj więcej');
    await firstCard.locator('.news-read-more').click();
    await expect(page.url()).toContain('/nasze-projekty/');
    await expect(page.locator('.article-header h1')).toBeVisible();
  });

  test('home page - should have working "Zobacz wszystkie projekty" link', async ({ page }) => {
    await page.goto('/');
    await expect(page.locator('.news-link')).toContainText('Zobacz wszystkie projekty →');
    await page.click('.news-link');
    await expect(page).toHaveURL('/nasze-projekty/1');
    await expect(page.locator('.news-page-header h1')).toContainText('Nasze projekty');
  });

  test('home page - should have working email link in footer', async ({ page }) => {
    await page.goto('/');
    const emailLink = page.locator('.footer-text a[href="mailto:procodeoffice@gmail.com"]');
    await expect(emailLink).toBeVisible();
    await expect(emailLink).toHaveAttribute('href', 'mailto:procodeoffice@gmail.com');
  });
});
