import { defineConfig } from '@playwright/test';

export default defineConfig({
  testDir: './tests',
  use: {
    baseAPIURL: 'https://reqres.in/api',
    baseUIURL: 'https://www.saucedemo.com',
    headless: true,
  },
});
