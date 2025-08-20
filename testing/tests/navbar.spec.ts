// Playwright test for Navbar component
import { test, expect } from '@playwright/test';

test.describe('Navbar navigation and actions', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/');
  });

  test('Navbar shows logo and navigation links', async ({ page }) => {
    // Logo (with text "CaseCollab")
    await expect(page.getByRole('link', { name: /CaseCollab/ })).toBeVisible();
    // About link
    await expect(page.getByRole('link', { name: /^About$/ })).toBeVisible();
    // Features link
    await expect(page.getByRole('link', { name: /^Features$/ })).toBeVisible();
    // Contact link
    await expect(page.getByRole('link', { name: /^Contact$/ })).toBeVisible();
    // Login button
    await expect(page.getByRole('link', { name: /^Login$/ })).toBeVisible();
    // Sign Up button
    await expect(page.getByRole('link', { name: /^Sign Up$/ })).toBeVisible();
  });

  test('Clicking on navigation links routes to correct pages', async ({ page }) => {
    // About
    await page.getByRole('link', { name: /^About$/ }).click();
    await expect(page).toHaveURL(/\/about$/);
    // Features
    await page.getByRole('link', { name: /^Features$/ }).click();
    await expect(page).toHaveURL(/\/features$/);
    // Contact
    await page.getByRole('link', { name: /^Contact$/ }).click();
    await expect(page).toHaveURL(/\/contact$/);
    // Home (logo)
    await page.getByRole('link', { name: /CaseCollab/ }).click();
    await expect(page).toHaveURL('/');
  });

  test('Login and Sign Up buttons route correctly', async ({ page }) => {
    // Login
    await page.getByRole('link', { name: /^Login$/ }).click();
    await expect(page).toHaveURL(/\/login$/);
    // Go back to home
    await page.goto('/');
    // Sign Up
    await page.getByRole('link', { name: /^Sign Up$/ }).click();
    await expect(page).toHaveURL(/\/signup$/);
  });

  test('Navbar is sticky at the top', async ({ page }) => {
    // Scroll to bottom
    await page.evaluate(() => window.scrollTo(0, document.body.scrollHeight));
    // Navbar should still be visible
    // Checks for the nav element with the logo text
    await expect(page.getByRole('navigation')).toBeVisible();
    await expect(page.getByRole('link', { name: /CaseCollab/ })).toBeVisible();
  });
});
