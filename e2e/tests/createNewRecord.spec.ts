import { test, expect, Page } from '@playwright/test';
import { describe } from 'node:test';
import { MainApplicationObject } from '../pageObject/mainApplication.spec';
import { RegistrationPage } from '../pageObject/registration.spec';

describe('Create new record.', () => {

    test.beforeEach(async ({page}) => {
        const openApplication = new MainApplicationObject(page);
        await openApplication.firstTimeStartApp();
    })

    // test.afterEach(async ({page}) => {
    //     try{
    //         const registerPage = new RegistrationPage(page);
    //         await registerPage.deleteCard();
    //     } catch(e){
    //         closeApplication(page);
    //     }
    // })

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
        await registerPage.ValidInput();
        await registerPage.submitForm();
        await page.reload();       
        await registerPage.cardAppeared();
    })
});

function closeApplication(page: Page) {
    throw new Error('Function not implemented.');
}
