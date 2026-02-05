readonly errorMessage: Locator;


constructor(private page: Page) {
this.username = page.locator('[data-test="username"]');
this.password = page.locator('[data-test="password"]');
this.loginButton = page.locator('[data-test="login-button"]');
this.errorMessage = page.locator('[data-test="error"]');
}


async goto() {
await this.page.goto('/');
}


async login(user: string, pass: string) {
await this.username.fill(user);
await this.password.fill(pass);
await this.loginButton.click();
}
}
