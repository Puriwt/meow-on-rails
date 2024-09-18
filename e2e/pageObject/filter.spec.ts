import { expect, Page } from "@playwright/test";
import { UsersList } from "./usersList.spec";
import { RegistrationPage } from "./registration.spec";

export class FilterPage {
    readonly page: Page
    constructor(page: Page,) {
        this.page = page
    }

    async screenAppeared(){
        await expect(this.page.getByTestId('filter-all')).toHaveValue('All');
        await expect(this.page.getByTestId('filter-computer-science')).toHaveValue('Computer Science');
        await expect(this.page.getByTestId('filter-math')).toHaveValue('Math');
        await expect(this.page.getByTestId('filter-science')).toHaveValue('Science');
        await expect(this.page.getByTestId('filter-social-sciences')).toHaveValue('Social Sciences');
        await expect(this.page.getByTestId('filter-english')).toHaveValue('English');
        await expect(this.page.getByPlaceholder('Search users...')).toBeVisible();
        await expect(this.page.getByRole('button', { name: 'Search' })).toBeVisible();
    }

    async shouldFilter(subject :string) {
        await this.page.getByTestId('filter-'+subject).click();
    }


}