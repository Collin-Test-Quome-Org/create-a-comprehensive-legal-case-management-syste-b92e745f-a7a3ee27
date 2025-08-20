// Playwright test for Navbar component navigation and actions
import { test, expect } from '@playwright/test';

test.describe('Navbar', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/');
  });

  test('renders logo and CaseCollab text, navigates home', async ({ page }) => {
    const logoLink = page.getByRole('link', { name: /CaseCollab/ });
    await expect(logoLink).toBeVisible();
    // Click logo and verify home navigation
    await logoLink.click();
    await expect(page).toHaveURL('/');
  });

  test('shows About, Features, Contact links and navigates correctly', async ({ page }) => {
    const aboutLink = page.getByRole('link', { name: 'About' });
    const featuresLink = page.getByRole('link', { name: 'Features' });
    const contactLink = page.getByRole('link', { name: 'Contact' });
    await expect(aboutLink).toBeVisible();
    await expect(featuresLink).toBeVisible();
    await expect(contactLink).toBeVisible();

    await aboutLink.click();
    await expect(page).toHaveURL('/about');

    // Back to home for isolation
    await page.goto('/');
    await featuresLink.click();
    await expect(page).toHaveURL('/features');

    await page.goto('/');
    await contactLink.click();
    await expect(page).toHaveURL('/contact');
  });

  test('shows Login and Sign Up buttons, navigates on click', async ({ page }) => {
    const loginBtn = page.locator('#login-btn');
    const signupBtn = page.locator('#signup-btn');
    await expect(loginBtn).toBeVisible();
    await expect(signupBtn).toBeVisible();

    await loginBtn.click();
    await expect(page).toHaveURL('/login');

    await page.goto('/');
    await signupBtn.click();
    await expect(page).toHaveURL('/signup');
  });

  test('Navbar is sticky and appears on scroll', async ({ page }) => {
    // The navbar should remain visible after scrolling
    await page.evaluate(() => window.scrollTo(0, 1000));
    const navbar = page.locator('nav');
    await expect(navbar).toBeVisible();
  });
});
