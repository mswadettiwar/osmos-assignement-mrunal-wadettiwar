import { test, expect } from '@playwright/test';
import { LoginPage } from '../../src/pages/loginPage';


test.describe('SauceDemo Login', () => {
test('Successful login', async ({ page }) => {
const loginPage = new LoginPage(page);


await loginPage.goto();
await loginPage.login('standard_user', 'secret_sauce');


await expect(page).toHaveURL(/inventory.html/);
await expect(page.locator('.inventory_item')).toBeVisible();
});


test('Locked out user login', async ({ page }) => {
const loginPage = new LoginPage(page);


await loginPage.goto();
await loginPage.login('locked_out_user', 'secret_sauce');


await expect(page).not.toHaveURL(/inventory.html/);
await expect(loginPage.errorMessage).toBeVisible();
await expect(loginPage.errorMessage).toContainText('Sorry, this user has');
});
});
