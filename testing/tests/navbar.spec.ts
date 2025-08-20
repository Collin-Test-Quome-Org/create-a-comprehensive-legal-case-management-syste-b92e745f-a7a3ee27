// testing/tests/navbar.spec.ts
import { test, expect } from '@playwright/test';

test.describe('Navbar Component', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/');
  });

  test('renders logo and navigates to homepage', async ({ page }) => {
    const logo = page.getByRole('link', { name: /CaseCollab/i }).first();
    await expect(logo).toBeVisible();
    // Click logo and ensure we remain on or return to landing page
    await logo.click();
    await expect(page).toHaveURL('/');
    await expect(page.getByText('Why Choose CaseCollab?')).toBeVisible();
  });

  test('shows navigation links and navigates', async ({ page }) => {
    const navLinks = [
      { text: 'About', path: '/about' },
      { text: 'Features', path: '/features' },
      { text: 'Contact', path: '/contact' }
    ];
    for (const { text, path } of navLinks) {
      const link = page.getByRole('link', { name: text });
      await expect(link).toBeVisible();
      await link.click();
      // After navigation, URL should match
      await expect(page).toHaveURL(path);
      // Go back to home for next iteration
      await page.goto('/');
    }
  });

  test('renders and navigates Login & Sign Up buttons', async ({ page }) => {
    const loginBtn = page.locator('#login-btn');
    const signupBtn = page.locator('#signup-btn');
    await expect(loginBtn).toBeVisible();
    await expect(signupBtn).toBeVisible();

    // Login navigation
    await loginBtn.click();
    await expect(page).toHaveURL('/login');

    // Go back and test Sign Up
    await page.goto('/');
    await signupBtn.click();
    await expect(page).toHaveURL('/signup');
  });

  test('has correct styling and accessibility basics', async ({ page }) => {
    // Navbar should be visible and sticky
    const nav = page.locator('nav');
    await expect(nav).toBeVisible();
    await expect(nav).toHaveClass(/sticky/);

    // All navigation links should have role 'link' and be keyboard accessible
    const links = page.getByRole('link');
    await expect(links).toHaveCount(6); // logo + 3 nav links + Login + Sign Up
  });
});
