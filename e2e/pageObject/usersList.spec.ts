import { expect, Page } from "@playwright/test";

export class UsersList{
    readonly page: Page
    constructor(page: Page,) {
        this.page = page
    }

    async cardAppeared(){
        await expect(this.page.getByTestId('fName')).toHaveText('Valid');
        await expect(this.page.getByTestId('lName')).toHaveText('Input');
        await expect(this.page.getByTestId('email')).toHaveText('email@g.cat');
        await expect(this.page.getByTestId('phone')).toHaveText('098-765-4321');
        await expect(this.page.getByTestId('subject')).toHaveText('Science');
        await expect(this.page.getByTestId('gender')).toHaveText('Male');
    }

    async updateAppeared(){
        await expect(this.page.getByTestId('fName')).toHaveText('Edit');
        await expect(this.page.getByTestId('lName')).toHaveText('Data');
        await expect(this.page.getByTestId('email')).toHaveText('editEmail@g.cat');
        await expect(this.page.getByTestId('phone')).toHaveText('098-765-1234');
        await expect(this.page.getByTestId('subject')).toHaveText('Computer Science');
        await expect(this.page.getByTestId('gender')).toHaveText('Female');
    }

    async deleteCard(){
        await this.page.getByRole('button', { name: 'Delete' }).click();
        await this.deleteModalAppeared();
        await this.clickDeleteButton();
    }

    async deleteModalAppeared(){
        await expect(this.page.getByRole('heading', { name: 'Delete' })).toBeVisible();
        await expect(this.page.getByText('Are you sure to delete?')).toBeVisible();
        await expect(this.page.getByRole('button', { name: 'Cancel' })).toBeVisible();
        await expect(this.page.getByTestId('confirm-delete')).toBeVisible();
    }

    async clickDeleteButton(){
        await this.page.getByTestId('confirm-delete').click();
    }

    async clickEditButton(){
        await this.page.getByTestId('edit').click();
    }
}