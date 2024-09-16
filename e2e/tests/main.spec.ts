import { test, expect } from '@playwright/test';
import { describe } from 'node:test';
import { MainApplicationObject } from '../pageObject/mainApplicationObject.spec';

describe('Create new record.', () => {

    test('test1', async ({page}) => {
        const openApplication = new MainApplicationObject(page);
        await openApplication.firstTimeStartApp();

    })

});


