const should = require('should');
const request = require('supertest');
const server = require('../server');
const variables = require('./.UsersTest');

describe('Test some Comment functions', function() {
    this.timeout(5000);
    it('should create a comment object', function(done) {
        request(server)
            .post('/api/comments')
            .send({
                date: '2000-01-23',
                author: variables.idVariables.userID,
                articleId: variables.idVariables.articleID,
                text: 'Very nice article bla bla.....',
            })
            .set('Accept', 'application/json')
            .expect(200)
            .end(function(err, res) {
                should.not.exist(err);

                res.body[0].should.have.property('author', variables.idVariables.userID);
                variables.idVariables.commentID = res.body[0]._id;

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

    it('should update one comment', function(done) {
        request(server)
            .put('/api/comments/' + variables.idVariables.commentID)
            .send({
                date: '2012-03-12',
                author: variables.idVariables.userID,
                articleId: variables.idVariables.articleID,
                text: 'Very nice article bla bla bla.....',
            })
            .set('Accept', 'application/json')
            .expect(200)
            .end(function(err, res) {
                should.not.exist(err);

                res.body.should.have.property('author', variables.idVariables.userID);
                res.body.should.have.property('date', '03/12/2012');

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
});
