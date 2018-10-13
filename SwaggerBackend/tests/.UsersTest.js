const should = require('should');
const request = require('supertest');
const server = require('../server');

exports.idVariables = idVariables = {
  articleID: '',
  commentID: '',
  userID: '',
};

describe('Test some User functions', function() {
  this.timeout(5000);
  it('should create a user object', function(done) {
    request(server)
        .post('/api/users')
        .send({
          zipCode: 0,
          firstname: 'Test',
          password: 'password',
          city: 'city',
          streetNumber: 6,
          street: 'street',
          email: 'email',
          picture: 'picture',
          lastname: 'lastname',
        })
        .set('Accept', 'application/json')
        .expect(200)
        .end(function(err, res) {
          should.not.exist(err);

          res.body.should.have.property('firstname', 'Test');
          idVariables.userID = res.body._id;

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


  it('should update one user', function(done) {
    request(server)
        .put('/api/users/' + idVariables.userID)
        .send({
          firstname: 'Updated firstname',
          password: 'test123',
          email: 'Maier@blog.com',
          lastname: 'Maier',
        })
        .set('Accept', 'application/json')
        .expect(200)
        .end(function(err, res) {
          should.not.exist(err);

          res.body.should.have.property('firstname', 'Updated firstname');

          done();
        });
  });

  it('should delete the user object by id', function(done) {
    request(server)
        .delete('/api/users/' + idVariables.userID)
        .set('Accept', 'application/json')
        .expect(200)
        .end(function(err, res) {
          should.not.exist(err);

          done();
        });
  });
});
