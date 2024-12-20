const request = require('supertest');
const app = require('./server');


// On teste la route tasks 
describe('Test de l\'API /tasks', () => {
// test de récupération des données
  test('GET /tasks retourne la liste de tâches à faire', async () => {
    const response = await request(app).get('/tasks');
    expect(response.statusCode).toBe(200);
    expect(response.body).toEqual([]);
  }, 30000);
});
