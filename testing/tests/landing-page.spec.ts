// Playwright tests for LandingPage including hero, features, and footer
import { test, expect } from '@playwright/test';

test.describe('Landing page', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/');
  });

  test('renders hero section (by presence of "Why Choose CaseCollab?")', async ({ page }) => {
    await expect(page.getByRole('heading', { name: /Why Choose CaseCollab\?/i })).toBeVisible();
  });

  test('renders all feature cards with correct titles and icons', async ({ page }) => {
    await expect(page.getByRole('heading', { name: 'Effortless Collaboration' })).toBeVisible();
    await expect(page.getByRole('heading', { name: 'Ironclad Security' })).toBeVisible();
    await expect(page.getByRole('heading', { name: 'Lightning Fast' })).toBeVisible();
    // Emoji icons present
    await expect(page.getByText('📁')).toBeVisible();
    await expect(page.getByText('🔒')).toBeVisible();
    await expect(page.getByText('⚡')).toBeVisible();
  });

  test('feature card descriptions are visible', async ({ page }) => {
    await expect(page.getByText('Share, review, and comment on case files in real-time. Everyone on the same page, always.')).toBeVisible();
    await expect(page.getByText("Your clients' privacy is sacred. Bank-grade security, encrypted communications, and compliance built-in.")).toBeVisible();
    await expect(page.getByText('From case intake to closing arguments—CaseCollab keeps your team moving at the speed of justice.')).toBeVisible();
  });

  test('CTA button navigates to /signup', async ({ page }) => {
    await page.locator('#cta-start-btn').getByRole('link', { name: 'Start Collaborating Now' }).click();
    await expect(page).toHaveURL(/\/signup$/);
  });

  test('footer contains logo, CaseCollab text, and navigation links', async ({ page }) => {
    // Logo image
    await expect(page.locator('footer img[src="/branding/assets/logo-2.png"]')).toBeVisible();
    // CaseCollab text
    await expect(page.getByText('CaseCollab', { exact: true })).toBeVisible();
    // Footer navigation links
    await expect(page.getByRole('link', { name: 'About' })).toBeVisible();
    await expect(page.getByRole('link', { name: 'Features' })).toBeVisible();
    await expect(page.getByRole('link', { name: 'Contact' })).toBeVisible();
    await expect(page.getByRole('link', { name: 'Login' })).toBeVisible();
    await expect(page.getByRole('link', { name: 'Sign Up' })).toBeVisible();
  });

  test('footer copyright for current year', async ({ page }) => {
    const year = new Date().getFullYear();
    await expect(page.getByText(`© ${year} CaseCollab. All rights reserved.`, { exact: false })).toBeVisible();
  });
});
