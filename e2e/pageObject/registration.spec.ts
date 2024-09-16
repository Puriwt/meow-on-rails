import { expect, Page } from "@playwright/test";

export class RegistrationPage {
    readonly page: Page
    constructor(page: Page,) {
        this.page = page
    }

    async screenAppeared(){
        await this.seeHeader();
        await this.seeForm();
    }

    async seeHeader() {
        await this.page.getByText('Register Form').isVisible();
    }

    async seeForm() {
        await expect(this.page.getByText('First Name')).toBeVisible();
        await expect(this.page.getByLabel('First Name')).toBeVisible();
        await expect(this.page.getByText('Last Name')).toBeVisible();
        await expect(this.page.getByLabel('Last Name')).toBeVisible();
        await expect(this.page.getByText('Birthdate', { exact: true })).toBeVisible();
        await expect(this.page.getByLabel('Birthdate')).toBeVisible();
        await expect(this.page.getByText('Gender', { exact: true })).toBeVisible();
        await expect(this.page.getByText('Email', { exact: true })).toBeVisible();
        await expect(this.page.getByLabel('Email')).toBeVisible();
        await expect(this.page.getByText('Phone Number', { exact: true })).toBeVisible();
        await expect(this.page.locator('#phone_input')).toBeVisible();
        await expect(this.page.getByText('Subject', { exact: true })).toBeVisible();
        await expect(this.page.getByLabel('Subject')).toBeVisible();
        await expect(this.page.getByRole('button', { name: 'Submit' })).toBeVisible();
    }
}