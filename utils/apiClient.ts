import { APIRequestContext, request } from '@playwright/test';

export class ApiClient {
  private context!: APIRequestContext;

  async init() {
    this.context = await request.newContext({
      baseAPIURL: 'https://reqres.in/api',
      headers: { 'Content-Type': 'application/json' },
    });
  }

  get(url: string) {
    return this.context.get(url);
  }

  post(url: string, body: object) {
    return this.context.post(url, { data: body });
  }
}
