// Playwright test for LandingPage component
import { test, expect } from '@playwright/test';

test.describe('Landing Page', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/');
  });

  test('renders the hero section', async ({ page }) => {
    // There should be a Hero component at the top; check for prominent heading
    await expect(page.locator('h1')).toBeVisible();
  });

  test('displays Why Choose CaseCollab section', async ({ page }) => {
    await expect(page.getByRole('heading', { name: 'Why Choose CaseCollab?' })).toBeVisible();
    // Check three feature cards
    await expect(page.getByText('Effortless Collaboration')).toBeVisible();
    await expect(page.getByText('Ironclad Security')).toBeVisible();
    await expect(page.getByText('Lightning Fast')).toBeVisible();
    await expect(page.getByText('Share, review, and comment on case files in real-time. Everyone on the same page, always.')).toBeVisible();
    await expect(page.getByText("Your clients' privacy is sacred. Bank-grade security, encrypted communications, and compliance built-in.")).toBeVisible();
    await expect(page.getByText('From case intake to closing arguments—CaseCollab keeps your team moving at the speed of justice.')).toBeVisible();
  });

  test('has a prominent Call To Action button for signup', async ({ page }) => {
    const ctaBtn = page.getByRole('link', { name: 'Start Collaborating Now' });
    await expect(ctaBtn).toBeVisible();
    // Clicking CTA should navigate to /signup
    await ctaBtn.click();
    await expect(page).toHaveURL(/\/signup$/);
  });

  test('footer displays logo, navigation and copyright', async ({ page }) => {
    // Logo
    const logoImg = page.locator('footer img[src="/branding/assets/logo-2.png"]');
    await expect(logoImg).toBeVisible();
    // Footer nav links
    await expect(page.getByRole('link', { name: 'About' })).toBeVisible();
    await expect(page.getByRole('link', { name: 'Features' })).toBeVisible();
    await expect(page.getByRole('link', { name: 'Contact' })).toBeVisible();
    await expect(page.getByRole('link', { name: 'Login' })).toBeVisible();
    await expect(page.getByRole('link', { name: 'Sign Up' })).toBeVisible();
    // Copyright
    const year = new Date().getFullYear();
    await expect(page.getByText(`© ${year} CaseCollab. All rights reserved.`)).toBeVisible();
  });

  test('footer navigation works', async ({ page }) => {
    const links = [
      { name: 'About', path: '/about' },
      { name: 'Features', path: '/features' },
      { name: 'Contact', path: '/contact' },
      { name: 'Login', path: '/login' },
      { name: 'Sign Up', path: '/signup' }
    ];
    for (const { name, path } of links) {
      await page.goto('/');
      await page.getByRole('link', { name }).click();
      await expect(page).toHaveURL(new RegExp(path.replace('/', '\\/') + '$'));
    }
  });

  test('basic accessibility: main landmarks and headings', async ({ page }) => {
    // Main section landmark exists
    await expect(page.locator('section')).toBeVisible();
    // There is at least one h1 and one h2
    await expect(page.locator('h1')).toBeVisible();
    await expect(page.locator('h2')).toBeVisible();
  });
});
