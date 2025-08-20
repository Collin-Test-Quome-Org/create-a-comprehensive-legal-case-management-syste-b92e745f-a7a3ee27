import { test, expect } from '@playwright/test';

test.describe('LandingPage', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/');
  });

  test('renders hero section', async ({ page }) => {
    // The Hero component is included, but we don't know its content. Check for the main heading.
    await expect(page.locator('h1')).toBeVisible();
    // Optionally, test for hero image background existence (using inline style)
    await expect(page.locator('[style*="hero-0.png"]')).toBeVisible();
  });

  test('renders "Why Choose CaseCollab?" section and feature cards', async ({ page }) => {
    await expect(page.getByRole('heading', { name: /Why Choose CaseCollab/ })).toBeVisible();
    const features = [
      'Effortless Collaboration',
      'Ironclad Security',
      'Lightning Fast',
    ];
    for (const feature of features) {
      await expect(page.getByRole('heading', { name: feature })).toBeVisible();
    }
    // Check for expected emoji
    await expect(page.getByText('📁')).toBeVisible();
    await expect(page.getByText('🔒')).toBeVisible();
    await expect(page.getByText('⚡')).toBeVisible();
  });

  test('has CTA button that navigates to signup', async ({ page }) => {
    const ctaBtn = page.locator('#cta-start-btn').getByRole('link', { name: /Start Collaborating Now/i });
    await expect(ctaBtn).toBeVisible();
    await ctaBtn.click();
    await expect(page).toHaveURL('/signup');
  });

  test('renders footer with logo, nav links, and copyright', async ({ page }) => {
    // Logo in footer
    await expect(page.locator('footer img[src="/branding/assets/logo-2.png"]')).toBeVisible();
    await expect(page.getByText('CaseCollab')).toBeVisible();
    // Footer nav links
    const footerLinks = ['About', 'Features', 'Contact', 'Login', 'Sign Up'];
    for (const text of footerLinks) {
      await expect(page.locator('footer').getByRole('link', { name: text })).toBeVisible();
    }
    // Copyright
    const year = new Date().getFullYear();
    await expect(page.getByText(`© ${year} CaseCollab. All rights reserved.`)).toBeVisible();
  });

  test('basic accessibility: all links have discernible names', async ({ page }) => {
    // All nav and footer links have visible text
    const allLinks = await page.locator('a').all();
    for (const link of allLinks) {
      const name = await link.textContent();
      expect(name && name.trim().length).toBeGreaterThan(0);
    }
  });
});
