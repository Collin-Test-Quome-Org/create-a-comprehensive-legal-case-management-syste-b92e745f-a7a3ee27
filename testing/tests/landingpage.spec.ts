import { test, expect } from '@playwright/test';

test.describe('LandingPage', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/');
  });

  test('should render hero section', async ({ page }) => {
    // Check for the hero section by heading/role
    // As Hero is imported, look for unique text from Hero or fallback to "Why Choose CaseCollab?"
    await expect(page.getByRole('heading', { name: 'Why Choose CaseCollab?' })).toBeVisible();
  });

  test('should display all feature cards with correct titles and emojis', async ({ page }) => {
    await expect(page.getByText('Effortless Collaboration')).toBeVisible();
    await expect(page.getByText('Ironclad Security')).toBeVisible();
    await expect(page.getByText('Lightning Fast')).toBeVisible();
    await expect(page.getByText('📁')).toBeVisible();
    await expect(page.getByText('🔒')).toBeVisible();
    await expect(page.getByText('⚡')).toBeVisible();
  });

  test('should display CTA button and navigate to signup', async ({ page }) => {
    const cta = page.locator('#cta-start-btn');
    await expect(cta).toBeVisible();
    await expect(cta.getByRole('link', { name: 'Start Collaborating Now' })).toBeVisible();
    // Click and test navigation
    await cta.getByRole('link', { name: 'Start Collaborating Now' }).click();
    await expect(page).toHaveURL(/\/signup$/);
  });

  test('should render footer with logo, brand, and links', async ({ page }) => {
    const footer = page.locator('footer');
    await expect(footer).toBeVisible();
    await expect(footer.locator('img[src="/branding/assets/logo-2.png"]')).toBeVisible();
    await expect(footer.getByText('CaseCollab')).toBeVisible();
    await expect(footer.getByRole('link', { name: 'About' })).toBeVisible();
    await expect(footer.getByRole('link', { name: 'Features' })).toBeVisible();
    await expect(footer.getByRole('link', { name: 'Contact' })).toBeVisible();
    await expect(footer.getByRole('link', { name: 'Login' })).toBeVisible();
    await expect(footer.getByRole('link', { name: 'Sign Up' })).toBeVisible();
    // Check for copyright
    const year = new Date().getFullYear().toString();
    await expect(footer.getByText(new RegExp(`© ${year} CaseCollab. All rights reserved.`))).toBeVisible();
  });

  test('should have accessible main landmarks', async ({ page }) => {
    // Navbar as nav landmark
    await expect(page.locator('nav[role="navigation"]').or(page.locator('nav'))).toBeVisible();
    // Footer as contentinfo landmark
    await expect(page.locator('footer')).toBeVisible();
  });
});
