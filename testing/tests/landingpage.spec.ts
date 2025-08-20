// Playwright test for LandingPage component
import { test, expect } from '@playwright/test';

test.describe('LandingPage', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/');
  });

  test('should display the Hero section', async ({ page }) => {
    // The hero section should exist, but since Hero is imported, check for a main heading or unique feature
    await expect(page.locator('h1')).toBeVisible();
  });

  test('should display the "Why Choose CaseCollab?" heading', async ({ page }) => {
    await expect(page.getByRole('heading', { name: /Why Choose CaseCollab/i })).toBeVisible();
  });

  test('should display all three feature cards', async ({ page }) => {
    await expect(page.getByText('Effortless Collaboration')).toBeVisible();
    await expect(page.getByText('Ironclad Security')).toBeVisible();
    await expect(page.getByText('Lightning Fast')).toBeVisible();
  });

  test('feature cards should contain respective emoji icons', async ({ page }) => {
    await expect(page.getByText('📁')).toBeVisible();
    await expect(page.getByText('🔒')).toBeVisible();
    await expect(page.getByText('⚡')).toBeVisible();
  });

  test('should display the CTA Start Collaborating Now button', async ({ page }) => {
    const cta = page.getByRole('button', { name: /Start Collaborating Now/i });
    await expect(cta).toBeVisible();
  });

  test('CTA button should navigate to /signup', async ({ page }) => {
    await page.getByRole('button', { name: /Start Collaborating Now/i }).click();
    await expect(page).toHaveURL(/\/signup$/);
  });

  test('should display the footer with CaseCollab logo and links', async ({ page }) => {
    // Logo is an img inside the first div in footer
    await expect(page.locator('footer img[src*="logo-2.png"]')).toBeVisible();
    await expect(page.getByText('CaseCollab')).toBeVisible();
    await expect(page.getByRole('link', { name: 'About' })).toBeVisible();
    await expect(page.getByRole('link', { name: 'Features' })).toBeVisible();
    await expect(page.getByRole('link', { name: 'Contact' })).toBeVisible();
    await expect(page.getByRole('link', { name: 'Login' })).toBeVisible();
    await expect(page.getByRole('link', { name: 'Sign Up' })).toBeVisible();
  });

  test('footer copyright includes current year', async ({ page }) => {
    const year = new Date().getFullYear().toString();
    await expect(page.locator('footer')).toContainText(`© ${year} CaseCollab. All rights reserved.`);
  });
});
