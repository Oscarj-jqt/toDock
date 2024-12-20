const request = require('supertest');
const app = require('./server');

describe('Test de l\'API /tasks', () => {
  test('GET /tasks retourne la liste de tâches à faire', async () => {
    const response = await request(app).get('/tasks');
    expect(response.statusCode).toBe(200);
    expect(response.body).toEqual([]);
  }, 30000);
});
