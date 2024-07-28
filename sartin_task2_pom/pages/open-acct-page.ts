import { expect, type Locator, type Page } from '@playwright/test';

export class OpenAcctPage {
    readonly page: Page;
    readonly addCustomerButton: Locator;
    readonly openAccountButton: Locator;
    readonly listCustomersButton: Locator;
    readonly customerDropDown: Locator;
    readonly currencyDropDown: Locator;
    readonly processButton: Locator;
    readonly addCustomerText = 'Add Customer';
    readonly openAccountText = 'Open Account';
    readonly listCustomersText = 'Customers';
    readonly processText = 'Process';

    constructor(page: Page) {
        this.page = page;
        this.addCustomerButton = page.getByRole('button', { name: this.addCustomerText });
        this.openAccountButton = page.getByRole('button', { name: this.openAccountText });
        this.listCustomersButton = page.getByRole('button', { name: this.listCustomersText });
        this.customerDropDown = page.locator('#userSelect');
        this.currencyDropDown = page.locator('#currency');
        this.processButton = page.getByRole('button', { name: this.processText });
    }

    async clickAddCustomer() {
        await this.addCustomerButton.click();
    }

    async clickOpenAccount() {
        await this.openAccountButton.click();
    }

    async clickProcess() {
        await this.processButton.click();
    }

    async clickProcessDialog() {
        this.processButton.click();
    }

    async clickCustomers() {
        await this.listCustomersButton.click();
    }

    async selectCustomerDropDown(customerSelectText) {
        await this.customerDropDown.selectOption(customerSelectText);
    }

    async selectCurrencyDropDown(currencySelectText) {
        await this.currencyDropDown.selectOption(currencySelectText);
    }
}