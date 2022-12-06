const pool = require('../lib/utils/pool');
const setup = require('../data/setup');
const request = require('supertest');
const app = require('../lib/app');

jest.mock('../lib/services/github');

describe('post routes', () => {
  beforeEach(() => {
    return setup(pool);
  });
  afterAll(() => {
    pool.end();
  });

  it('POST creates a new post', async () => {
    const agent = request.agent(app);
    await agent.get('/api/v1/github/callback?code=42').redirects(1);
    const resp = await agent
      .post('/api/v1/posts')
      .send({ description: 'My test post' });
    expect(resp.status).toBe(200);
    expect(resp.body).toEqual({
      id: expect.any(String),
      description: 'My test post',
    });
  });
});
