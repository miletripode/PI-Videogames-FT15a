const { Videogame, conn } = require('../../src/db.js');
const { expect } = require('chai');

describe('Videogame model', () => {
  before(() => conn.authenticate()
    .catch((err) => {
      console.error('Unable to connect to the database:', err);
    }));
  describe('Validators', () => {
    beforeEach(() => Videogame.sync({ force: true }));
    describe('name', () => {
      it('should throw an error if name is null', (done) => {
        Videogame.create({})
          .then(() => done(new Error('It requires a valid name')))
          .catch(() => done());
      });
      it('should work when its a valid name', () => {
        Videogame.create({name: 'Super Mario Bros'});
      });
    });
    describe('rating', () => {
      it('should throw an error if rating is null', (done) => {
        Videogame.create({})
          .then(() => done(new Error('It requires a valid rating')))
          .catch(() => done());
      });
      it('should work when its a valid rating', () => {
        Videogame.create({rating: '5.4'});
      });
    });
    describe('released', () => {
      it('should throw an error if released is null', (done) => {
        Videogame.create({})
          .then(() => done(new Error('It requires a valid released')))
          .catch(() => done());
      });
      it('should work when its a valid released', () => {
        Videogame.create({released: '01-02-03'});
      });
    });
    describe('description', () => {
      it('should throw an error if description is null', (done) => {
        Videogame.create({})
          .then(() => done(new Error('It requires a valid description')))
          .catch(() => done());
      });
      it('should work when its a valid description', () => {
        Videogame.create({description: 'This game is about ...'});
      });
    });
    describe('platforms', () => {
      it('should throw an error if platforms is null', (done) => {
        Videogame.create({})
          .then(() => done(new Error('It requires valid platforms')))
          .catch(() => done());
      });
      it('should work when its valid platforms', () => {
        Videogame.create({platforms: ['xBox', 'Ps5', 'PC']});
      });
    });
  });
  
});
