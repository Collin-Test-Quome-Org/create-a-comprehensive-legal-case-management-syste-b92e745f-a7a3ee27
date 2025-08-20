// Playwright test for Navbar component
import { test, expect } from '@playwright/test';

test.describe('Navbar', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/');
  });

  test('should display the logo and CaseCollab brand', async ({ page }) => {
    const brand = page.getByRole('link', { name: /CaseCollab/i });
    await expect(brand).toBeVisible();
    await expect(brand).toHaveAttribute('href', '/');
    await expect(page.locator('nav svg')).toBeVisible(); // The Scale icon
  });

  test('should have About, Features, and Contact navigation links', async ({ page }) => {
    await expect(page.getByRole('link', { name: 'About' })).toBeVisible();
    await expect(page.getByRole('link', { name: 'Features' })).toBeVisible();
    await expect(page.getByRole('link', { name: 'Contact' })).toBeVisible();
  });

  test('should navigate to /about when About is clicked', async ({ page }) => {
    await page.getByRole('link', { name: 'About' }).click();
    await expect(page).toHaveURL(/\/about$/);
  });

  test('should navigate to /features when Features is clicked', async ({ page }) => {
    await page.getByRole('link', { name: 'Features' }).click();
    await expect(page).toHaveURL(/\/features$/);
  });

  test('should navigate to /contact when Contact is clicked', async ({ page }) => {
    await page.getByRole('link', { name: 'Contact' }).click();
    await expect(page).toHaveURL(/\/contact$/);
  });

  test('should display Login and Sign Up buttons', async ({ page }) => {
    await expect(page.getByRole('button', { name: 'Login' })).toBeVisible();
    await expect(page.getByRole('button', { name: 'Sign Up' })).toBeVisible();
  });

  test('Login button should navigate to /login', async ({ page }) => {
    await page.getByRole('button', { name: 'Login' }).click();
    await expect(page).toHaveURL(/\/login$/);
  });

  test('Sign Up button should navigate to /signup', async ({ page }) => {
    await page.getByRole('button', { name: 'Sign Up' }).click();
    await expect(page).toHaveURL(/\/signup$/);
  });
});
