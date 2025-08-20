// Playwright test for LandingPage component
import { test, expect } from '@playwright/test';

test.describe('LandingPage content and navigation', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/');
  });

  test('LandingPage renders hero, features, and CTA', async ({ page }) => {
    // Heading: Why Choose CaseCollab?
    await expect(page.getByRole('heading', { name: /Why Choose CaseCollab/ })).toBeVisible();
    // Feature cards
    await expect(page.getByText('Effortless Collaboration')).toBeVisible();
    await expect(page.getByText('Ironclad Security')).toBeVisible();
    await expect(page.getByText('Lightning Fast')).toBeVisible();
    // Feature emojis
    await expect(page.getByText('📁')).toBeVisible();
    await expect(page.getByText('🔒')).toBeVisible();
    await expect(page.getByText('⚡')).toBeVisible();
    // CTA button
    await expect(page.getByRole('link', { name: /Start Collaborating Now/ })).toBeVisible();
  });

  test('CTA button navigates to signup', async ({ page }) => {
    await page.getByRole('link', { name: /Start Collaborating Now/ }).click();
    await expect(page).toHaveURL(/\/signup$/);
  });

  test('Footer displays logo and navigation links', async ({ page }) => {
    // Footer logo
    await expect(page.locator('footer img[src="/branding/assets/logo-2.png"]')).toBeVisible();
    // Footer text logo
    await expect(page.getByText('CaseCollab').last()).toBeVisible();
    // Footer links
    await expect(page.getByRole('link', { name: /^About$/ })).toBeVisible();
    await expect(page.getByRole('link', { name: /^Features$/ })).toBeVisible();
    await expect(page.getByRole('link', { name: /^Contact$/ })).toBeVisible();
    await expect(page.getByRole('link', { name: /^Login$/ })).toBeVisible();
    await expect(page.getByRole('link', { name: /^Sign Up$/ })).toBeVisible();
    // Copyright
    const year = new Date().getFullYear();
    await expect(page.getByText(`© ${year} CaseCollab. All rights reserved.`)).toBeVisible();
  });

  test('Footer navigation links route correctly', async ({ page }) => {
    await page.getByRole('link', { name: /^About$/ }).last().click();
    await expect(page).toHaveURL(/\/about$/);
    await page.goto('/');
    await page.getByRole('link', { name: /^Features$/ }).last().click();
    await expect(page).toHaveURL(/\/features$/);
    await page.goto('/');
    await page.getByRole('link', { name: /^Contact$/ }).last().click();
    await expect(page).toHaveURL(/\/contact$/);
    await page.goto('/');
    await page.getByRole('link', { name: /^Login$/ }).last().click();
    await expect(page).toHaveURL(/\/login$/);
    await page.goto('/');
    await page.getByRole('link', { name: /^Sign Up$/ }).last().click();
    await expect(page).toHaveURL(/\/signup$/);
  });
});
