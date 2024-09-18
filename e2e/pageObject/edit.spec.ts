import { expect, Page } from "@playwright/test";
import { UsersList } from "./usersList.spec";
import { RegistrationPage } from "./registration.spec";

export class EditPage {
    readonly page: Page
    constructor(page: Page,) {
        this.page = page
    }

    async screenAppeared(){
        const today = new Date();
        today.setDate(today.getDate() - 2);
        const pastDate = today.toISOString().split('T')[0];

        await expect(this.page.getByLabel('First Name')).toHaveValue('Valid');
        await expect(this.page.getByLabel('Last Name')).toHaveValue('Input');
        await expect(this.page.getByLabel('Birthdate')).toHaveValue(pastDate);
        await expect(this.page.getByLabel('Male', { exact: true })).toBeVisible();
        await expect(this.page.getByLabel('Email')).toHaveValue('email@g.cat');
        await expect(this.page.locator('#phone_input')).toHaveValue('098-765-4321');
        await expect(this.page.getByLabel('Subject')).toHaveValue('Science');
        await expect(this.page.getByRole('button', { name: 'Update' })).toBeVisible();
        await expect(this.page.getByRole('button', { name: 'Cancel' })).toBeVisible();
    }

    async dataChanged(){
        const registerPage = new RegistrationPage(this.page);
        await registerPage.inputDataForm('Edit', 'Data', 4, 'Female', 'editEmail@g.cat', '098-765-1234', 'Computer Science');
    }

    async updateRecord(){
        await this.page.getByRole('button', { name: 'Update' }).click();
    }

}