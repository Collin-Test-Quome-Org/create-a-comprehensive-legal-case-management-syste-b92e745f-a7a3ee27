import { test, expect } from '@playwright/test';

// Helper: Use nav links text and accessible roles
const navLinks = [
  { text: 'CaseCollab', path: '/' },
  { text: 'About', path: '/about' },
  { text: 'Features', path: '/features' },
  { text: 'Contact', path: '/contact' },
];

test.describe('Navbar', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/');
  });

  test('renders logo and all navigation links', async ({ page }) => {
    // Check for logo (CaseCollab with Scale icon)
    await expect(page.getByRole('link', { name: /CaseCollab/i })).toBeVisible();
    // Nav links
    for (const link of navLinks.slice(1)) { // skip CaseCollab logo link
      await expect(page.getByRole('link', { name: link.text })).toBeVisible();
    }
  });

  test('renders Login and Sign Up buttons', async ({ page }) => {
    await expect(page.locator('#login-btn')).toBeVisible();
    await expect(page.getByRole('button', { name: /Login/i })).toBeVisible();
    await expect(page.locator('#signup-btn')).toBeVisible();
    await expect(page.getByRole('button', { name: /Sign Up/i })).toBeVisible();
  });

  test.describe('Navigation', () => {
    for (const link of navLinks) {
      test(`navigates to ${link.path} when clicking "${link.text}"`, async ({ page }) => {
        await page.getByRole('link', { name: link.text }).click();
        await expect(page).toHaveURL(link.path);
      });
    }
    test('navigates to /login when Login button clicked', async ({ page }) => {
      await page.locator('#login-btn').getByRole('link', { name: /Login/i }).click();
      await expect(page).toHaveURL('/login');
    });
    test('navigates to /signup when Sign Up button clicked', async ({ page }) => {
      await page.locator('#signup-btn').getByRole('link', { name: /Sign Up/i }).click();
      await expect(page).toHaveURL('/signup');
    });
  });

  test('is sticky at the top', async ({ page }) => {
    const nav = page.locator('nav');
    const beforeScrollBox = await nav.boundingBox();
    await page.evaluate(() => window.scrollTo(0, 500));
    const afterScrollBox = await nav.boundingBox();
    expect(beforeScrollBox?.y).toBe(afterScrollBox?.y);
  });
});
