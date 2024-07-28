import { expect, type Locator, type Page } from '@playwright/test';

export class AddCustPage {
    readonly page: Page;
    readonly firstNameField: Locator;
    readonly lastNameField: Locator;
    readonly postCodeField: Locator;
    readonly addCustomerButton: Locator;
    readonly listCustomersButton: Locator;
    readonly firstNameText = 'First Name';
    readonly lastNameText = 'Last Name';
    readonly postCodeText = 'Post Code';
    readonly addCustomerText = 'Add Customer';
    readonly listCustomersText = 'Customers';

    constructor(page: Page) {
        this.page = page;
        this.firstNameField = page.getByPlaceholder( this.firstNameText );
        this.lastNameField = page.getByPlaceholder( this.lastNameText );
        this.postCodeField = page.getByPlaceholder( this.postCodeText );
        this.addCustomerButton = page.getByRole('form').getByRole('button', { name: this.addCustomerText });
        this.listCustomersButton = page.getByRole('button', { name: this.listCustomersText });
    }

    async enterFirstName(firstName) {
        await this.firstNameField.fill(firstName);
    }

    async enterLastName(lastName) {
        await this.lastNameField.fill(lastName);
    }

    async enterPostCode(postCode) {
        await this.postCodeField.fill(postCode);
    }

    async clickAddCustomer() {
        await this.addCustomerButton.click();
    }

    async clickListCustomers() {
        await this.listCustomersButton.click();
    }
}