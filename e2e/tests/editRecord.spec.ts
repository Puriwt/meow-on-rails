import { test, expect, Page } from '@playwright/test';
import { describe } from 'node:test';
import { MainApplicationObject } from '../pageObject/mainApplication.spec';
import { RegistrationPage } from '../pageObject/registration.spec';
import { UsersList } from '../pageObject/usersList.spec';
import { EditPage } from '../pageObject/edit.spec';

describe('Edit record.', () => {

    test.beforeEach(async ({page}) => {
        const openApplication = new MainApplicationObject(page);
        await openApplication.firstTimeStartApp();
    })

    test('edit', async ({page}) => {
        const registerPage = new RegistrationPage(page);
        const userList= new UsersList(page);
        const editPage = new EditPage(page);
        await registerPage.createRecord();
        await userList.clickEditButton();
        await editPage.screenAppeared();
        await editPage.dataChanged();
        await editPage.updateRecord();
        await userList.updateAppeared();

        await userList.deleteCard();
    })

});