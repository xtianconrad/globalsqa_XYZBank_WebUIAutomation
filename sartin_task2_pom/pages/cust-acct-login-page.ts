import { expect, type Locator, type Page } from '@playwright/test';

export class CustAcctLoginPage {
    readonly page: Page;
    readonly customerDropDown: Locator;
    readonly custAcctLoginButton: Locator;
    readonly custAcctLogoutButton: Locator;
    readonly custAcctLoginText = 'Login';
    readonly custAcctLogoutText = 'Logout';
    readonly yourNameLabelText = 'Your Name :';

    constructor(page: Page) {
        this.page = page;
        this.customerDropDown = page.locator('#userSelect');
        this.custAcctLoginButton = page.getByRole('button', { name: this.custAcctLoginText });
        this.custAcctLogoutButton = page.getByRole('button', { name: this.custAcctLogoutText });
    }

    async clickCustAcctLogin() {
        await this.custAcctLoginButton.click();
    }

    async clickCustAcctLogout() {
        await this.custAcctLogoutButton.click();
    }

    async selectCustomerDropDown(customerSelectText) {
        await this.customerDropDown.selectOption(customerSelectText);
    }

    async assertCustAcctLogout() {
        // Assert: Verify that user is redirected to the Customer Account Login page
        await expect(this.page.getByText(this.yourNameLabelText)).toHaveText(this.yourNameLabelText);
    }
}