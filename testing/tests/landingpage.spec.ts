// Playwright test for LandingPage component content and CTA
import { test, expect } from '@playwright/test';

test.describe('LandingPage', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/');
  });

  test('shows hero section (visually)', async ({ page }) => {
    // The Hero component is included at the top, but we can't check its contents here
    await expect(page.locator('body')).toContainText('CaseCollab');
  });

  test('displays "Why Choose CaseCollab?" section with features', async ({ page }) => {
    await expect(page.getByRole('heading', { name: 'Why Choose CaseCollab?' })).toBeVisible();
    await expect(page.getByText('Effortless Collaboration')).toBeVisible();
    await expect(page.getByText('Ironclad Security')).toBeVisible();
    await expect(page.getByText('Lightning Fast')).toBeVisible();
    await expect(page.getByText('Share, review, and comment on case files in real-time. Everyone on the same page, always.')).toBeVisible();
    await expect(page.getByText("Your clients' privacy is sacred. Bank-grade security, encrypted communications, and compliance built-in.")).toBeVisible();
    await expect(page.getByText('From case intake to closing arguments—CaseCollab keeps your team moving at the speed of justice.')).toBeVisible();
  });

  test('CTA button "Start Collaborating Now" navigates to signup', async ({ page }) => {
    const cta = page.locator('#cta-start-btn');
    await expect(cta).toBeVisible();
    await cta.click();
    await expect(page).toHaveURL('/signup');
  });

  test('footer has logo, CaseCollab text, and navigation links', async ({ page }) => {
    // Logo image is present
    const logoImg = page.locator('footer img[src="/branding/assets/logo-2.png"]');
    await expect(logoImg).toBeVisible();
    await expect(page.getByText('CaseCollab').first()).toBeVisible();
    // Footer links
    await expect(page.getByRole('link', { name: 'About' })).toBeVisible();
    await expect(page.getByRole('link', { name: 'Features' })).toBeVisible();
    await expect(page.getByRole('link', { name: 'Contact' })).toBeVisible();
    await expect(page.getByRole('link', { name: 'Login' })).toBeVisible();
    await expect(page.getByRole('link', { name: 'Sign Up' })).toBeVisible();
  });

  test('footer copyright displays current year', async ({ page }) => {
    const year = new Date().getFullYear();
    const copyright = page.getByText(`© ${year} CaseCollab. All rights reserved.`);
    await expect(copyright).toBeVisible();
  });
});
