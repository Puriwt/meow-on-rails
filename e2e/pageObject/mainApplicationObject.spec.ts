import { expect, Page } from "@playwright/test";
import { RegistrationPage } from "./registration.spec";

export class MainApplicationObject {
    readonly page: Page
    constructor(page: Page,) {
        this.page = page
    }

    async firstTimeStartApp(){
        const registerPage = new RegistrationPage(this.page);
        await this.page.goto('http://localhost:3000/');
        await registerPage.screenAppeared();
    }
}