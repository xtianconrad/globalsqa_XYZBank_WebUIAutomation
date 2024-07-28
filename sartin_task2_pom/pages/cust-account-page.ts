import { expect, type Locator, type Page } from '@playwright/test';

export class CustAccountPage {
    readonly page: Page;
    readonly accountNumberDropDown: Locator;
    readonly custAcctLogoutButton: Locator;
    readonly transactionsButton: Locator;
    readonly depositButton: Locator;
    readonly depositFormButton: Locator;
    readonly withdrawalButton: Locator;
    readonly withdrawFormButton: Locator;
    readonly backButton: Locator;
    readonly amountField: Locator;
    readonly custAcctLogoutText = 'Logout';
    readonly transactionsText = 'Transactions'
    readonly depositText = 'Deposit';
    readonly withdrawalText = 'Withdrawl';
    readonly withdrawFormText = 'Withdraw';
    readonly backButtonText = 'Back';
    readonly amountText = 'amount';
    readonly depositSuccessMessage = 'Deposit Successful';
    readonly withdrawLabelText = 'Amount to be Withdrawn :';
    readonly withdrawalSuccessMessage = 'Transaction successful';
    readonly withdrawalFailedMessage = 'Transaction Failed. You can not withdraw amount more than the balance.';
    readonly txnTypeTblHdrText = 'Transaction Type';

    constructor(page: Page) {
        this.page = page;
        this.accountNumberDropDown = page.locator('#userSelect');
        this.custAcctLogoutButton = page.getByRole('button', { name: this.custAcctLogoutText });
        this.transactionsButton = page.getByRole('button', { name: this.transactionsText });
        this.depositButton = page.getByRole('button', { name: this.depositText });
        this.withdrawalButton = page.getByRole('button', { name: this.withdrawalText });
        this.depositFormButton = page.getByRole('form').getByRole('button', { name: this.depositText });
        this.withdrawFormButton = page.getByRole('button', { name: this.withdrawFormText, exact: true });
        this.backButton = page.getByRole('button', { name: this.backButtonText });
        this.amountField = page.getByPlaceholder( this.amountText );
    }

    async clickCustAcctLogout() {
        await this.custAcctLogoutButton.click();
    }

    async clickTransactions() {
        await this.transactionsButton.click();
    }

    async clickDepositTransaction() {
        await this.depositButton.click();
    }

    async clickWithdrawalTransaction() {
        await this.withdrawalButton.click();
    }

    async clickDepositSubmitForm() {
        await this.depositFormButton.click();
    }

    async clickWithdrawSubmitForm() {
        await this.withdrawFormButton.click();
    }

    async clickBackButton() {
        await this.backButton.click();
    }

    async enterAmount(amount) {
        await this.amountField.fill(amount);
    }

    async selectAccountNumberDropDown(accountNumberSelectText) {
        await this.accountNumberDropDown.selectOption(accountNumberSelectText);
    }

    async assertDepositSuccessful() {
        // Assert: Verify that deposit transaction is successful
        await expect(this.page.getByText(this.depositSuccessMessage)).toHaveText(this.depositSuccessMessage);
    }

    async assertWithdrawLabelText() {
        expect(this.page.getByText(this.withdrawLabelText)).toHaveText(this.withdrawLabelText);
    }

    async assertWithdrawalSuccessful() {
        // Assert: Verify that withdrawal transaction is successful
        await expect(this.page.getByText(this.withdrawalSuccessMessage)).toHaveText(this.withdrawalSuccessMessage);
    }

    async assertWithdrawalFailed() {
        // Assert: Verify that withdrawal transaction failed
        await expect(this.page.getByText(this.withdrawalFailedMessage)).toHaveText(this.withdrawalFailedMessage);
    }

    async assertViewTransactions() {
        // Assert: Verify that new customer can navigate to transaction history
        await expect(this.page.getByText(this.txnTypeTblHdrText)).toHaveText(this.txnTypeTblHdrText);
    }

    async assertWelcomeMessage(firstName, lastName) {
        // Assert: Verify that user Welcome Message is displayed in the Customer Account page
        await expect(this.page.getByText('Welcome ' + firstName + ' ' + lastName + ' !!')).toHaveText('Welcome ' + firstName + ' ' + lastName + ' !!');
    }
}