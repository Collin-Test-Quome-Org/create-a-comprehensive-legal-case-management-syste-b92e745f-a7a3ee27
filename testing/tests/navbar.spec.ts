// Playwright tests for Navbar component and navigation
import { test, expect } from '@playwright/test';

test.describe('Navbar component', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/');
  });

  test('renders all navigation links and branding', async ({ page }) => {
    // Check branding
    await expect(page.getByRole('link', { name: /CaseCollab/i })).toBeVisible();
    await expect(page.locator('nav')).toBeVisible();
    // About, Features, Contact
    await expect(page.getByRole('link', { name: 'About' })).toBeVisible();
    await expect(page.getByRole('link', { name: 'Features' })).toBeVisible();
    await expect(page.getByRole('link', { name: 'Contact' })).toBeVisible();
    // Login and Sign Up
    await expect(page.getByRole('link', { name: 'Login' })).toBeVisible();
    await expect(page.getByRole('link', { name: 'Sign Up' })).toBeVisible();
  });

  test('navigates to About page', async ({ page }) => {
    await page.getByRole('link', { name: 'About' }).click();
    await expect(page).toHaveURL(/\/about$/);
  });

  test('navigates to Features page', async ({ page }) => {
    await page.getByRole('link', { name: 'Features' }).click();
    await expect(page).toHaveURL(/\/features$/);
  });

  test('navigates to Contact page', async ({ page }) => {
    await page.getByRole('link', { name: 'Contact' }).click();
    await expect(page).toHaveURL(/\/contact$/);
  });

  test('navigates to Login and Sign Up from navbar buttons', async ({ page }) => {
    await page.locator('#login-btn').getByRole('link', { name: 'Login' }).click();
    await expect(page).toHaveURL(/\/login$/);
    await page.goto('/');
    await page.locator('#signup-btn').getByRole('link', { name: 'Sign Up' }).click();
    await expect(page).toHaveURL(/\/signup$/);
  });

  test('logo and CaseCollab text link navigates to homepage', async ({ page }) => {
    // Go to about page first
    await page.goto('/about');
    await page.getByRole('link', { name: /CaseCollab/i }).click();
    await expect(page).toHaveURL(/\/$/);
  });

  test('navbar is sticky at the top', async ({ page }) => {
    // Scroll down and check navbar still visible
    await page.evaluate(() => window.scrollTo(0, 1000));
    const nav = page.locator('nav');
    await expect(nav).toBeVisible();
    // Check sticky style (top: 0)
    const position = await nav.evaluate((el) => window.getComputedStyle(el).position);
    expect(['sticky', 'fixed']).toContain(position);
  });
});
