import { test, expect } from '@playwright/test';

test.describe('Pagination in "Nasze ostatnie projekty"', () => {
  test('should display news listing with pagination info', async ({ page }) => {
    await page.goto('/nasze-projekty/1');

    const projectItems = page.locator('.project-card');
    const itemCount = await projectItems.count();
    expect(itemCount).toBeGreaterThan(0);
    expect(itemCount).toBeLessThanOrEqual(3);
  });

  test('should redirect to page 1 when accessing base URL', async ({ page }) => {
    await page.goto('/nasze-projekty');
    await expect(page).toHaveURL('/nasze-projekty/1');
    const projectItems = page.locator('.project-card');
    const itemCount = await projectItems.count();
    expect(itemCount).toBeGreaterThan(0);
    expect(itemCount).toBeLessThanOrEqual(3);
  });

  test('should navigate to individual article and back', async ({ page }) => {
    await page.goto('/nasze-projekty/1');
    const firstProjectLink = page.locator('.project-card h2 a').first();
    await firstProjectLink.click();
    await expect(page.url()).toContain('/nasze-projekty/');
    await expect(page.locator('.project-header h1')).toBeVisible();
    await expect(page.locator('.btn-secondary')).toContainText('Powrót do wszystkich projektów');
    await page.click('.btn-secondary');
    await expect(page).toHaveURL('/nasze-projekty/1');
  });

  test('should display pagination when multiple pages exist', async ({ page }) => {
    await page.goto('/nasze-projekty/1');
    const projectItems = page.locator('.project-card');
    const itemCount = await projectItems.count();

    if (itemCount === 3) {
      const pagination = page.locator('.pagination');
      const paginationExists = (await pagination.count()) > 0;

      if (paginationExists) {
        await expect(pagination).toBeVisible();
        await expect(page.locator('.pagination-current')).toContainText('1');
      }
    }
  });

  test('should navigate between pagination pages', async ({ page }) => {
    await page.goto('/nasze-projekty/1');
    const nextPageButton = page.locator('.pagination-link:has-text("Następna strona →")');
    const nextPageExists = (await nextPageButton.count()) > 0;

    if (nextPageExists) {
      await nextPageButton.click();
      await expect(page).toHaveURL('/nasze-projekty/2');
      await expect(page.locator('.pagination-current')).toContainText('2');
      const prevPageButton = page.locator('.pagination-link:has-text("← Poprzednia strona")');
      await expect(prevPageButton).toBeVisible();
      await prevPageButton.click();
      await expect(page).toHaveURL('/nasze-projekty/1');
      await expect(page.locator('.pagination-current')).toContainText('1');
    }
  });

  test('should display correct items per page', async ({ page }) => {
    await page.goto('/nasze-projekty/1');
    const projectItems = page.locator('.project-card');
    const itemCount = await projectItems.count();
    expect(itemCount).toBeLessThanOrEqual(3);
    expect(itemCount).toBeGreaterThan(0);
    for (let i = 0; i < itemCount; i++) {
      const item = projectItems.nth(i);
      await expect(item.locator('h2 a')).toBeVisible();
      await expect(item.locator('.project-date')).toBeVisible();
      await expect(item.locator('.btn')).toBeVisible();
    }
  });
});
