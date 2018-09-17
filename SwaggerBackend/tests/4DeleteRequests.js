const should = require('should');
const request = require('supertest');
const server = require('../../server');
const variables = require('./1PostRequests');


describe('DELETE Calls', function() {
  this.timeout(10000);
  describe('DELETE by id', function() {
    it('should delete the article object by id', function(done) {
      request(server)
          .delete('/api/articles/' + variables.idVariables.articleID)
          .set('Accept', 'application/json')
          .expect(200)
          .end(function(err, res) {
            should.not.exist(err);

            done();
          });
    });

    it('should delete the comment object by id', function(done) {
      request(server)
          .delete('/api/comments/' + variables.idVariables.commentID)
          .set('Accept', 'application/json')
          .expect(200)
          .end(function(err, res) {
            should.not.exist(err);

            done();
          });
    });

    it('should delete the user object by id', function(done) {
      request(server)
          .delete('/api/users/' + variables.idVariables.userID)
          .set('Accept', 'application/json')
          .expect(200)
          .end(function(err, res) {
            should.not.exist(err);

            done();
          });
    });
  });
});
