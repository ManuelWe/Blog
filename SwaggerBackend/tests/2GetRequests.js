const should = require('should');
const request = require('supertest');
const server = require('../server');
const variables = require('./1PostRequests');


describe('GET Calls', function() {
  this.timeout(10000);
  describe('GET all available', function() {
    it('should return all article objects', function(done) {
      request(server)
          .get('/api/articles')
          .set('Accept', 'application/json')
          .expect('Content-Type', /json/)
          .expect(200)
          .end(function(err, res) {
            should.not.exist(err);

            res.body[0].should.have.property('text');

            done();
          });
    });

    it('should return all comment objects', function(done) {
      request(server)
          .get('/api/comments')
          .set('Accept', 'application/json')
          .expect('Content-Type', /json/)
          .expect(200)
          .end(function(err, res) {
            should.not.exist(err);

            res.body[0].should.have.property('author');

            done();
          });
    });

    it('should return all user objects', function(done) {
      request(server)
          .get('/api/users')
          .set('Accept', 'application/json')
          .expect('Content-Type', /json/)
          .expect(200)
          .end(function(err, res) {
            should.not.exist(err);

            res.body[0].should.have.property('city');

            done();
          });
    });
  });
  describe('GET by id', function() {
    it('should return one article object', function(done) {
      request(server)
          .get('/api/articles/' + variables.idVariables.articleID)
          .set('Accept', 'application/json')
          .expect('Content-Type', /json/)
          .expect(200)
          .end(function(err, res) {
            should.not.exist(err);

            res.body.should.have.property('text', 'Lorem ipsum........');

            done();
          });
    });
  });
});

