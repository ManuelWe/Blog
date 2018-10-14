const should = require('should');
const request = require('supertest');
const server = require('../server');
const variables = require('./.UsersTest');

describe('Test some Article functions', function() {
    this.timeout(5000);
    it('should create a article object', function(done) {
        request(server)
            .post('/api/articles')
            .send({
                headline: 'Test Headline',
                author: variables.idVariables.userID,
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
                variables.idVariables.articleID = res.body._id;

                done();
            });
    });

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

    it('should return one article object by id', function(done) {
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
                author: variables.idVariables.userID,
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
});
