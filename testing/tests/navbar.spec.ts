import { test, expect } from '@playwright/test';

test.describe('Navbar', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/');
  });

  test('should display logo and CaseCollab brand, and main navigation items', async ({ page }) => {
    // Logo and brand
    const logo = page.locator('nav svg');
    await expect(logo).toBeVisible();
    await expect(page.getByRole('link', { name: /CaseCollab/i })).toBeVisible();

    // Navigation links
    await expect(page.getByRole('link', { name: 'About' })).toBeVisible();
    await expect(page.getByRole('link', { name: 'Features' })).toBeVisible();
    await expect(page.getByRole('link', { name: 'Contact' })).toBeVisible();
  });

  test('should display Login and Sign Up buttons', async ({ page }) => {
    await expect(page.locator('#login-btn')).toBeVisible();
    await expect(page.locator('#signup-btn')).toBeVisible();
    await expect(page.getByRole('link', { name: 'Login' })).toBeVisible();
    await expect(page.getByRole('link', { name: 'Sign Up' })).toBeVisible();
  });

  test('should navigate to About page when About is clicked', async ({ page }) => {
    await page.getByRole('link', { name: 'About' }).click();
    await expect(page).toHaveURL(/\/about$/);
  });

  test('should navigate to Features page when Features is clicked', async ({ page }) => {
    await page.getByRole('link', { name: 'Features' }).click();
    await expect(page).toHaveURL(/\/features$/);
  });

  test('should navigate to Contact page when Contact is clicked', async ({ page }) => {
    await page.getByRole('link', { name: 'Contact' }).click();
    await expect(page).toHaveURL(/\/contact$/);
  });

  test('should navigate to Login page when Login is clicked', async ({ page }) => {
    await page.locator('#login-btn').getByRole('link', { name: 'Login' }).click();
    await expect(page).toHaveURL(/\/login$/);
  });

  test('should navigate to Sign Up page when Sign Up is clicked', async ({ page }) => {
    await page.locator('#signup-btn').getByRole('link', { name: 'Sign Up' }).click();
    await expect(page).toHaveURL(/\/signup$/);
  });

  test('navbar should be sticky at the top', async ({ page }) => {
    const nav = page.locator('nav');
    await expect(nav).toHaveClass(/sticky/);
  });
});
