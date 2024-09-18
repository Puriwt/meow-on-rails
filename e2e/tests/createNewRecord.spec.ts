import { test, expect, Page } from '@playwright/test';
import { describe } from 'node:test';
import { MainApplicationObject } from '../pageObject/mainApplication.spec';
import { RegistrationPage } from '../pageObject/registration.spec';
import { UsersList } from '../pageObject/usersList.spec';

describe('Create new record.', () => {

    test.beforeEach(async ({page}) => {
        const openApplication = new MainApplicationObject(page);
        await openApplication.firstTimeStartApp();
    })

    test('Invalid input', async ({page}) => {
        const registerPage = new RegistrationPage(page);
        await registerPage.invalidInput();
        await registerPage.submitForm();
        await registerPage.invalidErrorAppeared();
    })

    test('Blank input', async ({page}) => {
        const registerPage = new RegistrationPage(page);
        await registerPage.submitForm();
        await registerPage.blankErrorAppeared();
    })

    test('Create new record success', async ({page}) => {
        const registerPage = new RegistrationPage(page);
        const userList= new UsersList(page);
        await registerPage.validInput();
        await registerPage.submitForm();
        await page.reload();       
        await userList.cardAppeared();

        await userList.deleteCard();
    })
});