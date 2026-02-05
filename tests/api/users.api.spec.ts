import { test, expect } from '@playwright/test';
import { ApiClient } from '../../utils/apiClient';

test.describe('Reqres API Tests', () => {
  let api: ApiClient;

  test.beforeAll(async () => {
    api = new ApiClient();
    await api.init();
  });

  test('GET Single User - Happy Path', async () => {
    const response = await api.get('/users/2');
    const body = await response.json();

    expect(response.status()).toBe(200);
    expect(body.data.id).toBe(2);
    expect(body.data.email).not.toBeNull();
  });

  test('POST Create User - Happy Path', async () => {
    const payload = { name: 'qa_lead_candidate', job: 'automation' };

    const response = await api.post('/users', payload);
    const body = await response.json();

    expect(response.status()).toBe(201);
    expect(body.name).toBe(payload.name);
    expect(body.job).toBe(payload.job);
    expect(body.id).toBeTruthy();
  });
});
