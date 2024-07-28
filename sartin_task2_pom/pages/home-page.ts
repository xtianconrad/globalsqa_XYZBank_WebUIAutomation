import { expect, type Locator, type Page } from '@playwright/test';

export class HomePage {
    readonly page: Page;
    readonly homeButton: Locator;
    readonly customerLoginButton: Locator;
    readonly managerLoginButton: Locator;
    readonly homeButtonText = 'Home';
    readonly customerLoginButtonText = 'Customer Login';
    readonly managerLoginButtonText = 'Bank Manager Login';

    constructor(page: Page) {
        this.page = page;
        this.homeButton = page.getByRole('button', { name: this.homeButtonText });
        this.customerLoginButton = page.getByRole('button', { name: this.customerLoginButtonText });
        this.managerLoginButton = page.getByRole('button', { name: this.managerLoginButtonText });
    }

    async clickHomeButton() {
        await this.homeButton.click();
    }

    async clickCustomerLogin() {
        await this.customerLoginButton.click();
    }

    async clickManagerLogin() {
        await this.managerLoginButton.click();
    }

    // Assert: Verify that user is redirected to the Main page
    async assertRedirectMainPage() {
        await expect(this.homeButton).toHaveText(this.homeButtonText);
        await expect(this.customerLoginButton).toHaveText(this.customerLoginButtonText);
        await expect(this.managerLoginButton).toHaveText(this.managerLoginButtonText);
    }
}