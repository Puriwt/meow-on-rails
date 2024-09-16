import { expect, Page } from "@playwright/test";

export class RegistrationPage {
    readonly page: Page
    constructor(page: Page,) {
        this.page = page
    }

    async screenAppeared(){
        await this.seeHeader();
        await this.seeForm();
        await this.seeSubmitForm();
    }

    async invalidInput() {
        const today = new Date();
        today.setDate(today.getDate() + 2);
        const futureDate = today.toISOString().split('T')[0];

        await this.page.getByLabel('First Name').fill('puri');
        await this.page.getByLabel('Last Name').fill('wat');
        await this.page.getByLabel('Birthdate').fill(futureDate);
        await this.page.getByLabel('Male', { exact: true }).check();
        await this.page.getByLabel('Email').fill('invalid email');
        await this.page.locator('#phone_input').fill('098-765-4321');
        await this.page.getByLabel('Subject').selectOption('Science');
    }

    async ValidInput() {
        const today = new Date();
        today.setDate(today.getDate() - 2);
        const pastDate = today.toISOString().split('T')[0];

        await this.page.getByLabel('First Name').fill('Valid');
        await this.page.getByLabel('Last Name').fill('Input');
        await this.page.getByLabel('Birthdate').fill(pastDate);
        await this.page.getByLabel('Male', { exact: true }).check();
        await this.page.getByLabel('Email').fill('valid@g.cat');
        await this.page.locator('#phone_input').fill('098-765-4321');
        await this.page.getByLabel('Subject').selectOption('Science');
    }

    async submitForm(){
        await this.page.getByRole('button', { name: 'Submit' }).click();
    }

    async seeHeader() {
        await this.page.getByText('Register Form').isVisible();
    }

    async blankErrorAppeared(){
        await expect(this.page.getByText("First name can't be blank")).toBeVisible();
        await expect(this.page.getByText("Last name can't be blank")).toBeVisible();
        await expect(this.page.getByText("Birthdate can't be blank")).toBeVisible();
        await expect(this.page.getByText("Gender can't be blank")).toBeVisible();
        await expect(this.page.getByText("Email can't be blank")).toBeVisible();
        await expect(this.page.getByText("Phone can't be blank")).toBeVisible();
        await expect(this.page.getByText("Subject can't be blank")).toBeVisible();
    }

    async invalidErrorAppeared(){
        await expect(this.page.getByText("Birthdate can't be in the future")).toBeVisible();
        await expect(this.page.getByText("Email is incorrect")).toBeVisible();
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

    async seeSubmitForm() {
        await expect(this.page.getByRole('button', { name: 'Submit' })).toBeVisible();
    }
}