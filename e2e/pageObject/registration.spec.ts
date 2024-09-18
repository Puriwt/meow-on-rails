import { expect, Page } from "@playwright/test";
import { UsersList } from "./usersList.spec";
import { MainApplicationObject } from "./mainApplication.spec";

export class RegistrationPage {
    readonly page: Page
    constructor(page: Page,) {
        this.page = page
    }

    async screenAppeared(){
        await this.seeHeader();
        await this.seeForm();
        await this.seeSubmitForm();
    }

    async createRecord() {
        const userList= new UsersList(this.page);
        await this.validInput();
        await this.submitForm();
        await this.page.reload();
        await userList.cardAppeared();
    }

    async invalidInput() {
        const today = new Date();
        today.setDate(today.getDate() + 2);
        const futureDate = today.toISOString().split('T')[0];

        await this.page.getByLabel('First Name').fill('puri');
        await this.page.getByLabel('Last Name').fill('wat');
        await this.page.getByLabel('Birthdate').fill(futureDate);
        await this.page.getByLabel('Male', { exact: true }).check();
        await this.page.getByLabel('Email').fill('invalid email');
        await this.page.locator('#phone_input').fill('098-765-4321');
        await this.page.getByLabel('Subject').selectOption('Science');
    }

    async validInput() {
        const today = new Date();
        today.setDate(today.getDate() - 2);
        const pastDate = today.toISOString().split('T')[0];

        await this.page.getByLabel('First Name').fill('Valid');
        await this.page.getByLabel('Last Name').fill('Input');
        await this.page.getByLabel('Birthdate').fill(pastDate);
        await this.page.getByLabel('Male', { exact: true }).check();
        await this.page.getByLabel('Email').fill('email@g.cat');
        await this.page.locator('#phone_input').fill('098-765-4321');
        await this.page.getByLabel('Subject').selectOption('Science');
    }

    async inputDataForm(fName: string, lName: string, birthDate :number, gender :string, email: string, phone: string, subject: string) {
        const today = new Date();
        today.setDate(today.getDate() - birthDate);
        const pastDate = today.toISOString().split('T')[0];

        await this.page.getByLabel('First Name').fill(fName);
        await this.page.getByLabel('Last Name').fill(lName);
        await this.page.getByLabel('Birthdate').fill(pastDate);
        await this.page.getByLabel(gender, { exact: true }).check();
        await this.page.getByLabel('Email').fill(email);
        await this.page.locator('#phone_input').fill(phone);
        await this.page.getByLabel('Subject').selectOption(subject);
    }

    async generateRecordFillter(){
        await this.generateRecord('Puri', 'Computer Science', 5, 'Male', 'comscience@g.com', '098-765-4321', 'Computer Science');
        await this.generateRecord('Puri', 'Math', 5, 'Male', 'math@g.com', '098-765-4321', 'Math');
        await this.generateRecord('Puri', 'Science', 5, 'Male', 'science@g.com', '098-765-4321', 'Science');
        await this.generateRecord('Puri', 'Social Sciences', 5, 'Male', 'social@g.com', '098-765-4321', 'Social Sciences');
        await this.generateRecord('Puri', 'English', 5, 'Male', 'english@g.com', '098-765-4321', 'English');
    }

    async generateRecord(fName: string, lName: string, birthDate :number, gender :string, email: string, phone: string, subject: string){
        await this.inputDataForm(fName, lName, birthDate, gender, email, phone, subject);
        await this.submitForm();
        await this.page.reload();
    }

    async submitForm(){
        await this.page.getByRole('button', { name: 'Submit' }).click();
    }

    async seeHeader() {
        await this.page.getByText('Register Form').isVisible();
    }

    async blankErrorAppeared(){
        await expect(this.page.getByText("First name can't be blank")).toBeVisible();
        await expect(this.page.getByText("Last name can't be blank")).toBeVisible();
        await expect(this.page.getByText("Birthdate can't be blank")).toBeVisible();
        await expect(this.page.getByText("Gender can't be blank")).toBeVisible();
        await expect(this.page.getByText("Email can't be blank")).toBeVisible();
        await expect(this.page.getByText("Phone can't be blank")).toBeVisible();
        await expect(this.page.getByText("Subject can't be blank")).toBeVisible();
    }

    async invalidErrorAppeared(){
        await expect(this.page.getByText("Birthdate can't be in the future")).toBeVisible();
        await expect(this.page.getByText("Email is incorrect")).toBeVisible();
    }

    async seeForm() {
        await expect(this.page.getByText('First Name')).toBeVisible();
        await expect(this.page.getByLabel('First Name')).toBeVisible();
        await expect(this.page.getByText('Last Name')).toBeVisible();
        await expect(this.page.getByLabel('Last Name')).toBeVisible();
        await expect(this.page.getByText('Birthdate', { exact: true })).toBeVisible();
        await expect(this.page.getByLabel('Birthdate')).toBeVisible();
        await expect(this.page.getByText('Gender', { exact: true })).toBeVisible();
        await expect(this.page.getByText('Email', { exact: true })).toBeVisible();
        await expect(this.page.getByLabel('Email')).toBeVisible();
        await expect(this.page.getByText('Phone Number', { exact: true })).toBeVisible();
        await expect(this.page.locator('#phone_input')).toBeVisible();
        await expect(this.page.getByText('Subject', { exact: true })).toBeVisible();
        await expect(this.page.getByLabel('Subject')).toBeVisible();
        await expect(this.page.getByRole('button', { name: 'Submit' })).toBeVisible();
    }

    async seeSubmitForm() {
        await expect(this.page.getByRole('button', { name: 'Submit' })).toBeVisible();
    }

}