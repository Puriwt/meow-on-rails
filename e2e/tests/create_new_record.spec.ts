import { test, expect } from '@playwright/test';
import { describe } from 'node:test';
import { MainApplicationObject } from '../pageObject/mainApplicationObject.spec';

describe('Create new record.', () => {

  test('test1', async ({page}) => {
    const openApplication = new MainApplicationObject(page);
    await openApplication.firstTimeStartApp();

})

    test('invalid input', async ({ page }) => {

      const today = new Date();
      today.setDate(today.getDate() + 2);
      const futureDate = today.toISOString().split('T')[0];

      await page.goto('http://localhost:3000/');
      await page.getByLabel('First Name').fill('puri');
      await page.getByLabel('Last Name').fill('wat');
      await page.getByLabel('Birthdate').fill(futureDate);
      await page.getByLabel('Male', { exact: true }).check();
      await page.getByLabel('Email').fill('invalid email');
      await page.locator('#phone_input').fill('098-765-4321');
      await page.getByLabel('Subject').selectOption('Science');
      await page.getByRole('button', { name: 'Submit' }).click();


      await expect(page.getByText("Birthdate can't be in the future")).toBeVisible();
      await expect(page.getByText("Email is incorrect")).toBeVisible();
    });

    test('blank input', async ({ page }) => {
      await page.goto('http://localhost:3000/');
      await page.getByRole('button', { name: 'Submit' }).click();


      await expect(page.getByText("First name can't be blank")).toBeVisible();
      await expect(page.getByText("Last name can't be blank")).toBeVisible();
      await expect(page.getByText("Birthdate can't be blank")).toBeVisible();
      await expect(page.getByText("Gender can't be blank")).toBeVisible();
      await expect(page.getByText("Email can't be blank")).toBeVisible();
      await expect(page.getByText("Phone can't be blank")).toBeVisible();
      await expect(page.getByText("Subject can't be blank")).toBeVisible();
    });

    test('create new record success', async ({ page }) => {
      const today = new Date();
      today.setDate(today.getDate() - 2);
      const pastDate = today.toISOString().split('T')[0];

      await page.goto('http://localhost:3000/');
      await page.getByLabel('First Name').fill('puri');
      await page.getByLabel('Last Name').fill('wat');
      await page.getByLabel('Birthdate').fill(pastDate);
      await page.getByLabel('Male', { exact: true }).check();
      await page.getByLabel('Email').fill('puriwt@g.cat');
      await page.locator('#phone_input').fill('098-765-4321');
      await page.getByLabel('Subject').selectOption('Science');
      await page.getByRole('button', { name: 'Submit' }).click();
    });
// to make sure the record is created

});


