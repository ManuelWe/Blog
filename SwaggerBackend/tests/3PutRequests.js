const should = require('should');
const request = require('supertest');
const server = require('../server');
const variables = require('./1PostRequests');

describe('Update content', function() {
  this.timeout(10000);
  it('should update one user', function(done) {
    request(server)
        .put('/api/users/' + variables.idVariables.userID)
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

  it('should update one article', function(done) {
    request(server)
        .put('/api/articles/' + variables.idVariables.articleID)
        .send({
          headline: 'Test Headline',
          text: 'Lorem ipsum........',
          date: '2000-01-23',
          topic: [
            'Nature',
            'Water',
          ],
          author: idVariables.userID,
          picture: 'base64/nsoasdkoajsodd33892839283928398293898392',
        })
        .set('Accept', 'application/json')
        .expect(200)
        .end(function(err, res) {
          should.not.exist(err);

          res.body.should.have.property('author', variables.idVariables.userID);
          should.deepEqual(res.body.topic[1], 'Water');

          done();
        });
  });

  it('should update one comment', function(done) {
    request(server)
        .put('/api/comments/' + variables.idVariables.commentID)
        .send({
          date: '2012-03-12',
          author: idVariables.userID,
          articleId: idVariables.articleID,
          text: 'Very nice article bla bla bla.....',
        })
        .set('Accept', 'application/json')
        .expect(200)
        .end(function(err, res) {
          should.not.exist(err);

          res.body.should.have.property('author', idVariables.userID);
          res.body.should.have.property('date', '03/12/2012');

          done();
        });
  });
});
