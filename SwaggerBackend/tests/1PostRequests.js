const should = require('should');
const request = require('supertest');
const server = require('../server');

exports.idVariables = idVariables = {
  articleID: '',
  commentID: '',
  userID: '',
};

describe('POST mock data', function() {
  this.timeout(10000);
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

  it('should create a article object', function(done) {
    request(server)
        .post('/api/articles')
        .send({
          headline: 'Test Headline',
          author: idVariables.userID,
          text: 'Lorem ipsum........',
          date: '2000-01-23',
          topic: [
            'Nature',
            'Trees',
          ],
          picture: 'string',
        })
        .set('Accept', 'application/json')
        .expect(200)
        .end(function(err, res) {
          should.not.exist(err);

          res.body.should.have.property('headline', 'Test Headline');
          idVariables.articleID = res.body._id;

          done();
        });
  });

  it('should create a comment object', function(done) {
    request(server)
        .post('/api/comments')
        .send({
          date: '2000-01-23',
          author: idVariables.userID,
          articleId: idVariables.articleID,
          text: 'Very nice article bla bla.....',
        })
        .set('Accept', 'application/json')
        .expect(200)
        .end(function(err, res) {
          should.not.exist(err);

          res.body[0].should.have.property('author', idVariables.userID);
          idVariables.commentID = res.body[0]._id;

          done();
        });
  });
});
