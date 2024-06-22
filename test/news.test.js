const request = require('supertest');
const app = require('../src/app');
const newsController = require('../src/controllers/newsController');

describe('GET /news', () => {
  it('should return news data', async () => {
    const newsData = [
      { id: 1, title: 'News 1', content: 'Lorem ipsum dolor sit amet.' },
      { id: 2, title: 'News 2', content: 'Consectetur adipiscing elit.' },
    ];

    jest.spyOn(newsController, 'getNews').mockImplementation(() => newsData);

    const response = await request(app).get('/news');

    expect(response.status).toBe(200);
    expect(response.body).toEqual(newsData);
  });
});