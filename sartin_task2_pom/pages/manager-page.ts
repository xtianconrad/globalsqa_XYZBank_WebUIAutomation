import { expect, type Locator, type Page } from '@playwright/test';

export class ManagerPage {
    readonly page: Page;
    readonly addCustomerButton: Locator;
    readonly openAccountButton: Locator;
    readonly listCustomersButton: Locator;
    readonly addCustomerText = 'Add Customer';
    readonly openAccountText = 'Open Account';
    readonly listCustomersText = 'Customers';

    constructor(page: Page) {
        this.page = page;
        this.addCustomerButton = page.getByRole('button', { name: this.addCustomerText });
        this.openAccountButton = page.getByRole('button', { name: this.openAccountText });
        this.listCustomersButton = page.getByRole('button', { name: this.listCustomersText });
    }

    async clickAddCustomer() {
        await this.addCustomerButton.click();
    }

    async clickOpenAccount() {
        await this.openAccountButton.click();
    }

    async clickCustomers() {
        await this.listCustomersButton.click();
    }

    async assertRedirectManagerPage() {
        // Assert: Verify that user is redirected to Bank Manager page
        await expect(this.addCustomerButton).toHaveText(this.addCustomerText);
        await expect(this.openAccountButton).toHaveText(this.openAccountText);
        await expect(this.listCustomersButton).toHaveText(this.listCustomersText);
    }
}