import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('http://localhost:3000/');
  await page.getByLabel('First Name').fill('test');
  await page.getByLabel('Last Name').fill('test');
  await page.getByLabel('Birthdate').fill('2024-09-10');
  await page.getByLabel('Male', { exact: true }).check();
  await page.getByLabel('Email').fill('pu@gmial.com');
  await page.locator('#phone_input').fill('098-765-4321');
  await page.getByLabel('Subject').selectOption('Science');
  await page.getByRole('button', { name: 'Submit' }).click();
});


