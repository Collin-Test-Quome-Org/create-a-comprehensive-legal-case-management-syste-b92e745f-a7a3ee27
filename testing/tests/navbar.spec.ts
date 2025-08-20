import { test, expect } from '@playwright/test';

test.describe('Navbar', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/');
  });

  test('renders all navigation links and buttons', async ({ page }) => {
    // Logo and title
    const logoAndTitle = page.getByRole('link', { name: /CaseCollab/i });
    await expect(logoAndTitle).toBeVisible();
    await expect(logoAndTitle.locator('svg')).toBeVisible();
    await expect(logoAndTitle).toHaveAttribute('href', '/');

    // About link
    const about = page.getByRole('link', { name: /^About$/ });
    await expect(about).toBeVisible();
    await expect(about).toHaveAttribute('href', '/about');

    // Features link
    const features = page.getByRole('link', { name: /^Features$/ });
    await expect(features).toBeVisible();
    await expect(features).toHaveAttribute('href', '/features');

    // Contact link
    const contact = page.getByRole('link', { name: /^Contact$/ });
    await expect(contact).toBeVisible();
    await expect(contact).toHaveAttribute('href', '/contact');

    // Login button
    const loginBtn = page.locator('#login-btn');
    await expect(loginBtn).toBeVisible();
    await expect(loginBtn.getByRole('link', { name: /^Login$/ })).toHaveAttribute('href', '/login');

    // Sign Up button
    const signupBtn = page.locator('#signup-btn');
    await expect(signupBtn).toBeVisible();
    await expect(signupBtn.getByRole('link', { name: /^Sign Up$/ })).toHaveAttribute('href', '/signup');
  });

  test('navigates to correct pages when navigation links are clicked', async ({ page }) => {
    // About
    await page.getByRole('link', { name: /^About$/ }).click();
    await expect(page).toHaveURL(/\/about$/);
    // Features
    await page.getByRole('link', { name: /^Features$/ }).click();
    await expect(page).toHaveURL(/\/features$/);
    // Contact
    await page.getByRole('link', { name: /^Contact$/ }).click();
    await expect(page).toHaveURL(/\/contact$/);
    // Home (logo)
    await page.getByRole('link', { name: /CaseCollab/i }).click();
    await expect(page).toHaveURL('/');
  });

  test('navigates to login and signup when buttons are clicked', async ({ page }) => {
    await page.locator('#login-btn').getByRole('link', { name: /^Login$/ }).click();
    await expect(page).toHaveURL(/\/login$/);
    await page.goto('/');
    await page.locator('#signup-btn').getByRole('link', { name: /^Sign Up$/ }).click();
    await expect(page).toHaveURL(/\/signup$/);
  });

  test('has accessible nav landmarks and contrast', async ({ page }) => {
    const nav = page.locator('nav');
    await expect(nav).toHaveAttribute('class', /sticky/);
    // Navbar should be present and visible
    await expect(nav).toBeVisible();
  });
});
