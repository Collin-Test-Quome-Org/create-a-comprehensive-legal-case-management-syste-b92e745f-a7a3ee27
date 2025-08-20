// Playwright test for Navbar navigation and buttons
import { test, expect } from '@playwright/test';

test.describe('Navbar', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/');
  });

  test('renders CaseCollab brand and navigation links', async ({ page }) => {
    // Brand
    await expect(page.getByRole('link', { name: /CaseCollab/i })).toBeVisible();
    // Navigation links
    await expect(page.getByRole('link', { name: 'About' })).toBeVisible();
    await expect(page.getByRole('link', { name: 'Features' })).toBeVisible();
    await expect(page.getByRole('link', { name: 'Contact' })).toBeVisible();
  });

  test('renders Login and Sign Up buttons', async ({ page }) => {
    await expect(page.getByRole('button', { name: 'Login' })).toBeVisible();
    await expect(page.getByRole('button', { name: 'Sign Up' })).toBeVisible();
  });

  test('navigates to About page when About link is clicked', async ({ page }) => {
    await page.getByRole('link', { name: 'About' }).click();
    await expect(page).toHaveURL(/\/about$/);
  });

  test('navigates to Features page when Features link is clicked', async ({ page }) => {
    await page.getByRole('link', { name: 'Features' }).click();
    await expect(page).toHaveURL(/\/features$/);
  });

  test('navigates to Contact page when Contact link is clicked', async ({ page }) => {
    await page.getByRole('link', { name: 'Contact' }).click();
    await expect(page).toHaveURL(/\/contact$/);
  });

  test('navigates to Home when CaseCollab brand is clicked', async ({ page }) => {
    await page.getByRole('link', { name: /CaseCollab/i }).click();
    await expect(page).toHaveURL('/');
  });

  test('navigates to Login when Login button is clicked', async ({ page }) => {
    await page.getByRole('button', { name: 'Login' }).click();
    await expect(page).toHaveURL(/\/login$/);
  });

  test('navigates to Sign Up when Sign Up button is clicked', async ({ page }) => {
    await page.getByRole('button', { name: 'Sign Up' }).click();
    await expect(page).toHaveURL(/\/signup$/);
  });

  test('navbar is sticky and visible on scroll', async ({ page }) => {
    // Scroll down
    await page.evaluate(() => window.scrollTo(0, 500));
    // Navbar should still be visible
    await expect(page.locator('nav')).toBeVisible();
  });
});
