import { test, expect, Page } from '@playwright/test';
import { describe } from 'node:test';
import { MainApplicationObject } from '../pageObject/mainApplication.spec';
import { RegistrationPage } from '../pageObject/registration.spec';
import { UsersList } from '../pageObject/usersList.spec';
import { EditPage } from '../pageObject/edit.spec';
import { FilterPage } from '../pageObject/filter.spec';

describe('Edit record.', () => {

    test.beforeEach(async ({page}) => {
        const openApplication = new MainApplicationObject(page);
        const filter = new FilterPage(page);
        await openApplication.firstTimeStartApp();
        await filter.screenAppeared();

    })

    test('filter all cards appeared', async ({page}) => {
        const registerPage = new RegistrationPage(page);
        const userList= new UsersList(page);
        await registerPage.generateRecordFillter();
        await userList.allCardsAppeared(5);
    })

    test('filter Computer Science card appeared', async ({page}) => {
        const filter = new FilterPage(page);
        const userList= new UsersList(page);
        await filter.shouldFilter('computer-science');
        await page.waitForTimeout(500);
        await userList.filterCardAppeared('Computer Science','comscience@g.com','Computer Science');
        await userList.deleteCard();
    })

    test('filter Math card appeared', async ({page}) => {
        const filter = new FilterPage(page);
        const userList= new UsersList(page);
        await filter.shouldFilter('math');
        await page.waitForTimeout(500);
        await userList.filterCardAppeared('Math','math@g.com','Math');
        await userList.deleteCard();
    })

    test('filter Science card appeared', async ({page}) => {
        const filter = new FilterPage(page);
        const userList= new UsersList(page);
        await filter.shouldFilter('science');
        await page.waitForTimeout(500);
        await userList.filterCardAppeared('Science','science@g.com','Science');
        await userList.deleteCard();
    })

    test('filter Social Sciences card appeared', async ({page}) => {
        const filter = new FilterPage(page);
        const userList= new UsersList(page);
        await filter.shouldFilter('social-sciences');
        await page.waitForTimeout(500);
        await userList.filterCardAppeared('Social Sciences','social@g.com','Social Sciences');
        await userList.deleteCard();
    })

    test('filter English card appeared', async ({page}) => {
        const filter = new FilterPage(page);
        const userList= new UsersList(page);
        await filter.shouldFilter('english');
        await page.waitForTimeout(500);
        await userList.filterCardAppeared('English','english@g.com','English');
        await userList.deleteCard();
    })
});