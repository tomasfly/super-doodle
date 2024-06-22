const request = require('supertest');
const app = require('../src/app');
const symbolController = require('../src/controllers/symbolController');

describe('Symbol API', () => {
  it('should return symbol data', async () => {
    const symbolData = { symbol: 'AAPL', name: 'Apple Inc.' };
    symbolController.getSymbol = jest.fn().mockResolvedValue(symbolData);

    const response = await request(app).get('/symbol');
    expect(response.status).toBe(200);
    expect(response.body).toEqual(symbolData);
  });

  it('should handle symbol not found', async () => {
    symbolController.getSymbol = jest.fn().mockResolvedValue(null);

    const response = await request(app).get('/symbol');
    expect(response.status).toBe(404);
    expect(response.body).toEqual({ error: 'Symbol not found' });
  });
});