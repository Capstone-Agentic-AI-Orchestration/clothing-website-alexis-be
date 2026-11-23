import request from 'supertest';

import { app, SERVICE_NAME } from '../../src/app';

describe('clothing-website-alexis-be', () => {
  it('exports SERVICE_NAME', () => {
    expect(SERVICE_NAME).toBe('clothing-website-alexis-be');
  });

  it('answers GET /health', async () => {
    const res = await request(app).get('/health');

    expect(res.status).toBe(200);
    expect(res.body).toEqual({ status: 'ok' });
  });
});
