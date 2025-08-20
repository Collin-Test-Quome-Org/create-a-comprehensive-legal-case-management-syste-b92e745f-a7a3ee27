import { test, expect } from '@playwright/test';

test.describe('LandingPage', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/');
  });

  test('renders hero section', async ({ page }) => {
    // Hero is present (assume heading present)
    const heroHeading = page.getByRole('heading', { level: 1 });
    await expect(heroHeading).toBeVisible();
  });

  test('renders "Why Choose CaseCollab?" section and key features', async ({ page }) => {
    const sectionHeading = page.getByRole('heading', { name: /Why Choose CaseCollab/i });
    await expect(sectionHeading).toBeVisible();

    // Effortless Collaboration
    await expect(page.getByText('Effortless Collaboration')).toBeVisible();
    await expect(page.getByText('Share, review, and comment on case files in real-time. Everyone on the same page, always.')).toBeVisible();
    // Ironclad Security
    await expect(page.getByText('Ironclad Security')).toBeVisible();
    await expect(page.getByText("Your clients' privacy is sacred. Bank-grade security, encrypted communications, and compliance built-in.")).toBeVisible();
    // Lightning Fast
    await expect(page.getByText('Lightning Fast')).toBeVisible();
    await expect(page.getByText('From case intake to closing arguments—CaseCollab keeps your team moving at the speed of justice.')).toBeVisible();

    // Emojis
    await expect(page.getByText('📁')).toBeVisible();
    await expect(page.getByText('🔒')).toBeVisible();
    await expect(page.getByText('⚡')).toBeVisible();
  });

  test('CTA button is visible and navigates to signup', async ({ page }) => {
    const ctaBtn = page.locator('#cta-start-btn');
    await expect(ctaBtn).toBeVisible();
    await expect(ctaBtn.getByRole('link', { name: /Start Collaborating Now/i })).toHaveAttribute('href', '/signup');
    await ctaBtn.getByRole('link', { name: /Start Collaborating Now/i }).click();
    await expect(page).toHaveURL(/\/signup$/);
  });

  test('renders footer with navigation links and copyright', async ({ page }) => {
    const footer = page.locator('footer');
    await expect(footer).toBeVisible();
    // Logo and title
    await expect(footer.getByText('CaseCollab')).toBeVisible();
    // About
    await expect(footer.getByRole('link', { name: /^About$/ })).toHaveAttribute('href', '/about');
    // Features
    await expect(footer.getByRole('link', { name: /^Features$/ })).toHaveAttribute('href', '/features');
    // Contact
    await expect(footer.getByRole('link', { name: /^Contact$/ })).toHaveAttribute('href', '/contact');
    // Login
    await expect(footer.getByRole('link', { name: /^Login$/ })).toHaveAttribute('href', '/login');
    // Sign Up
    await expect(footer.getByRole('link', { name: /^Sign Up$/ })).toHaveAttribute('href', '/signup');
    // Copyright
    const year = new Date().getFullYear();
    await expect(footer.getByText(`© ${year} CaseCollab. All rights reserved.`)).toBeVisible();
  });
});
