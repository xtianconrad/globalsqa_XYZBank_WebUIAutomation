import { expect, type Locator, type Page } from '@playwright/test';

export class SearchCustPage {
    readonly page: Page;
    readonly addCustomerButton: Locator;
    readonly searchCustomerField: Locator;
    readonly searchFirstName: Locator;
    readonly searchLastName: Locator;
    readonly addCustomerText = 'Add Customer';
    readonly listCustomersText = 'Customers';
    readonly searchCustomerFieldText = 'Search Customer';

    constructor(page: Page) {
        this.page = page;
        this.addCustomerButton = page.getByRole('form').getByRole('button', { name: this.addCustomerText });
        this.searchCustomerField = page.getByPlaceholder( this.searchCustomerFieldText );
    }

    async clickAddCustomer() {
        await this.addCustomerButton.click();
    }

    async enterSearchCustomer(queryString) {
        await this.searchCustomerField.fill(queryString);
    }

    async assertNewCustomerAdded(firstName, lastName) {
        // Assert: Verify that new Customer is added
        await expect(this.page.getByRole('cell', { name: firstName, exact: true })).toHaveText(firstName);
        await expect(this.page.getByRole('cell', { name: lastName, exact: true })).toHaveText(lastName);
    }

    async assertNewAccountAdded(acctNum) {
        // Assert: Verify that new account for new customer has been created
        await expect(this.page.getByRole('cell', { name: acctNum, exact: true })).toHaveText(acctNum);
    }
}