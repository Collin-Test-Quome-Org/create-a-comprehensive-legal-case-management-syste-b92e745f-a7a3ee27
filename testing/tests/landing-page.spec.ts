// Playwright test for LandingPage content and CTA
import { test, expect } from '@playwright/test';

test.describe('LandingPage', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/');
  });

  test('renders hero section', async ({ page }) => {
    // The Hero component is included but we don't know its content,
    // so check that the page loads and main heading is visible
    await expect(page.locator('h1')).toBeVisible();
  });

  test('renders "Why Choose CaseCollab?" heading', async ({ page }) => {
    await expect(page.getByRole('heading', { name: 'Why Choose CaseCollab?' })).toBeVisible();
  });

  test('renders all feature cards with correct titles and icons', async ({ page }) => {
    await expect(page.getByText('Effortless Collaboration')).toBeVisible();
    await expect(page.getByText('Ironclad Security')).toBeVisible();
    await expect(page.getByText('Lightning Fast')).toBeVisible();
    // Icons: 📁, 🔒, ⚡ (check by emoji)
    await expect(page.getByText('📁')).toBeVisible();
    await expect(page.getByText('🔒')).toBeVisible();
    await expect(page.getByText('⚡')).toBeVisible();
  });

  test('renders call-to-action button with correct text and navigates to signup', async ({ page }) => {
    const cta = page.getByRole('button', { name: 'Start Collaborating Now' });
    await expect(cta).toBeVisible();
    await cta.click();
    await expect(page).toHaveURL(/\/signup$/);
  });

  test('renders footer with CaseCollab logo and links', async ({ page }) => {
    // Logo image should exist in footer
    await expect(page.locator('footer img[src="/branding/assets/logo-2.png"]')).toBeVisible();
    await expect(page.getByText('CaseCollab').last()).toBeVisible();
    // Footer links
    await expect(page.getByRole('link', { name: 'About' })).toBeVisible();
    await expect(page.getByRole('link', { name: 'Features' })).toBeVisible();
    await expect(page.getByRole('link', { name: 'Contact' })).toBeVisible();
    await expect(page.getByRole('link', { name: 'Login' })).toBeVisible();
    await expect(page.getByRole('link', { name: 'Sign Up' })).toBeVisible();
  });

  test('footer copyright year is current', async ({ page }) => {
    const year = new Date().getFullYear();
    await expect(
      page.getByText(new RegExp(`© ${year} CaseCollab\. All rights reserved\.`))
    ).toBeVisible();
  });
});
