/* eslint-disable import/no-extraneous-dependencies */
const { expect } = require('chai');
const session = require('supertest-session');
const app = require('../../src/app.js');
var supertest = require('supertest-as-promised')(require('../../src/app'));

const agent = session(app);

describe('Videogame routes', () => {
    
  describe('GET /videogames', () => {
    it('should get 200', () =>
      agent.get('/videogames').expect(200)
    ).timeout(10000);
  });

  it('GET responde con un array de 100 videogames de entrada', function() {
    return supertest
      .get('/videogames')
      .expect(200)
      .expect('Content-Type', /json/)
      .expect(function(res) {
        expect(res.body.length).equal(100);
      });
  }).timeout(10000);

});
