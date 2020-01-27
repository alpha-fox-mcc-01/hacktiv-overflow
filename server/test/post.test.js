const chai = require('chai')
const expect = chai.expect
const chaiHttp = require('chai-http')
const app = require('../app')
const { Post } = require('../models')

describe('/posts CRUD', function() {
  describe('add post', function() {
    it('should return 201 on successful post publication', function(done) {
      chai.request(app)
        .post('/posts')
        .send({
          title: 'Is javascript good?',
          content: 'Hi! I have just started coding and I would like to find a great language to start with. Does anyone have any suggestions for me?',
          tags: ['Programming', 'Javascript'],
        })
        .set('access_token', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZTJlYzQxZmU5YmU3YzU0YzBiMzliNjEiLCJpYXQiOjE1ODAxMjMxNzV9._jvakIMntSYTMtqcg-YQ1h0K7LOg6pxYGPwixIXNGHA')
        .end((err, res) => {
          expect(res).to.have.status(201)
          expect(res.body).to.be.an('object')
          expect(res.body).to.have.property('title').to.equal('Is javascript good?')
        })
    })
  })
  after(function (done) {
    Post.findOneAndDelete({title: 'Is javascript good?'})
      .then(() => {
        done()
      })
      .catch(err => {
        done(err)
      })
  })
})