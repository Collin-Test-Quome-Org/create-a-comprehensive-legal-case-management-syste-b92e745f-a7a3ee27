// testing/tests/landingPage.spec.ts
import { test, expect } from '@playwright/test';

test.describe('Landing Page', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/');
  });

  test('displays hero section', async ({ page }) => {
    // The Hero component is rendered at the top
    await expect(page.locator('main')).not.toHaveCount(1); // If Hero is a main, adjust selector
    // Check heading for main content
    await expect(page.getByRole('heading', { name: 'Why Choose CaseCollab?' })).toBeVisible();
  });

  test('shows 3 feature cards with correct titles and icons', async ({ page }) => {
    const featureTitles = [
      'Effortless Collaboration',
      'Ironclad Security',
      'Lightning Fast'
    ];
    for (const title of featureTitles) {
      await expect(page.getByRole('heading', { name: title })).toBeVisible();
    }
    // Check for emojis as icons in cards
    await expect(page.getByText('📁')).toBeVisible();
    await expect(page.getByText('🔒')).toBeVisible();
    await expect(page.getByText('⚡')).toBeVisible();
  });

  test('shows signup CTA button and navigates to /signup', async ({ page }) => {
    const cta = page.locator('#cta-start-btn');
    await expect(cta).toBeVisible();
    await expect(cta.getByRole('link', { name: /Start Collaborating Now/i })).toBeVisible();
    await cta.click();
    await expect(page).toHaveURL('/signup');
  });

  test('renders footer with logo and navigation links', async ({ page }) => {
    // Logo present in footer
    const footerLogo = page.locator('footer img[src="/branding/assets/logo-2.png"]');
    await expect(footerLogo).toBeVisible();
    // Footer nav links
    const footerLinks = [
      { text: 'About', path: '/about' },
      { text: 'Features', path: '/features' },
      { text: 'Contact', path: '/contact' },
      { text: 'Login', path: '/login' },
      { text: 'Sign Up', path: '/signup' }
    ];
    for (const { text } of footerLinks) {
      await expect(page.getByRole('link', { name: text })).toBeVisible();
    }
    // Copyright text with year
    const thisYear = new Date().getFullYear();
    await expect(page.getByText(`© ${thisYear} CaseCollab. All rights reserved.`)).toBeVisible();
  });

  test('footer links navigate correctly', async ({ page }) => {
    const navs = [
      { text: 'About', path: '/about' },
      { text: 'Features', path: '/features' },
      { text: 'Contact', path: '/contact' },
      { text: 'Login', path: '/login' },
      { text: 'Sign Up', path: '/signup' }
    ];
    for (const { text, path } of navs) {
      await page.goto('/');
      await page.getByRole('link', { name: text }).last().click(); // Use last() to get footer link
      await expect(page).toHaveURL(path);
    }
  });
});
