import fs from 'fs';
import path from 'path';
import { parse } from 'csv-parse/sync';
import { test, expect } from '@playwright/test';
import { HomePage } from '../pages/home-page';
import { ManagerPage } from '../pages/manager-page';
import { AddCustPage } from '../pages/add-cust-page';
import { SearchCustPage } from '../pages/search-cust-page';

test.beforeEach(async ({ page }) => {
  // Navigate to website
  await page.goto('https://www.globalsqa.com/angularJs-protractor/BankingProject/');
});

const records = parse(fs.readFileSync(path.join(__dirname, '../data/input.csv')), {
  columns: true,
  skip_empty_lines: true
});

const searchCustomerText = 'str';

for (const record of records) {
  test(`Add a new customer: ${record.firstname} ${record.lastname}`, async ({ page }) => {
    const homePage = new HomePage(page);
    const managerPage = new ManagerPage(page);
    const addCustPage = new AddCustPage(page);
    const searchCustPage = new SearchCustPage(page);

    // Test step: Login as Bank Manager
    await homePage.clickManagerLogin();

    // Test step: Add a new customer
    await managerPage.clickAddCustomer();

    await addCustPage.enterFirstName(record.firstname);
    await addCustPage.enterLastName(record.lastname);
    await addCustPage.enterPostCode(record.postcode);

    await addCustPage.clickAddCustomer();

    // Test step: Go to search page to verify if new customer was created
    await addCustPage.clickListCustomers();

    await searchCustPage.enterSearchCustomer(searchCustomerText);

    // Assert: Verify that new Customer is added
    await searchCustPage.assertNewCustomerAdded(record.firstname, record.lastname);
  });
}