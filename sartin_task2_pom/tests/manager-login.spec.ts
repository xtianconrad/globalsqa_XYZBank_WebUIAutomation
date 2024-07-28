import { test, expect } from '@playwright/test';
import { HomePage } from '../pages/home-page';
import { ManagerPage } from '../pages/manager-page';

test.beforeEach(async ({ page }) => {
  // Navigate to website
  await page.goto('https://www.globalsqa.com/angularJs-protractor/BankingProject/');
});

test('Login as Bank Manager', async ({ page }) => {
  const homePage = new HomePage(page);
  const managerPage = new ManagerPage(page);

  // Test step: Login as Bank Manager
  await homePage.clickManagerLogin();

  // Assert: Verify that user is redirected to Bank Manager page
  await managerPage.assertRedirectManagerPage();
});