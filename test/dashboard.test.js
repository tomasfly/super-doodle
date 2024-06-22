const request = require('supertest');
const app = require('../src/app');
const dashboardController = require('../src/controllers/dashboardController');

describe('GET /dashboard', () => {
  it('should return the dashboard data', async () => {
    const expectedData = {
      // Define the expected data for the dashboard endpoint
      // Replace this with your actual expected data
      // Example: title: 'Dashboard', widgets: ['Widget 1', 'Widget 2']
    };

    // Mock the dashboardController.getDashboard function
    dashboardController.getDashboard = jest.fn().mockReturnValue(expectedData);

    // Send a GET request to the dashboard endpoint
    const response = await request(app).get('/dashboard');

    // Assert the response status code
    expect(response.statusCode).toBe(200);

    // Assert the response body matches the expected data
    expect(response.body).toEqual(expectedData);
  });
});