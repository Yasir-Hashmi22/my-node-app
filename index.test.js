const request = require('supertest')
const app = require('./index')

test('homepage works', async () => {
  const res = await request(app).get('/')
  expect(res.statusCode).toBe(200)
})