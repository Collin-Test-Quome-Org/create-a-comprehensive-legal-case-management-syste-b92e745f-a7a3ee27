// Playwright test for Navbar component and navigation
import { test, expect } from '@playwright/test';

test.describe('Navbar', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/');
  });

  test('should display CaseCollab logo and all navigation links', async ({ page }) => {
    // Logo (icon + text)
    const logo = page.getByRole('link', { name: /CaseCollab/i });
    await expect(logo).toBeVisible();
    // Navigation links
    await expect(page.getByRole('link', { name: 'About' })).toBeVisible();
    await expect(page.getByRole('link', { name: 'Features' })).toBeVisible();
    await expect(page.getByRole('link', { name: 'Contact' })).toBeVisible();
    // Auth buttons
    await expect(page.getByRole('link', { name: 'Login' })).toBeVisible();
    await expect(page.getByRole('link', { name: 'Sign Up' })).toBeVisible();
  });

  test('navigates to About page when About link is clicked', async ({ page }) => {
    await page.getByRole('link', { name: 'About' }).click();
    await expect(page).toHaveURL(/\/about$/);
    // Check NavBar is still visible after navigation
    await expect(page.getByRole('link', { name: /CaseCollab/i })).toBeVisible();
  });

  test('navigates to Features page when Features link is clicked', async ({ page }) => {
    await page.getByRole('link', { name: 'Features' }).click();
    await expect(page).toHaveURL(/\/features$/);
  });

  test('navigates to Contact page when Contact link is clicked', async ({ page }) => {
    await page.getByRole('link', { name: 'Contact' }).click();
    await expect(page).toHaveURL(/\/contact$/);
  });

  test('navigates to Login page when Login button is clicked', async ({ page }) => {
    await page.getByRole('link', { name: 'Login' }).click();
    await expect(page).toHaveURL(/\/login$/);
  });

  test('navigates to Sign Up page when Sign Up button is clicked', async ({ page }) => {
    await page.getByRole('link', { name: 'Sign Up' }).click();
    await expect(page).toHaveURL(/\/signup$/);
  });
});
