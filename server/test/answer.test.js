const chai = require('chai')
const expect = chai.expect
const chaiHttp = require('chai-http')
const app = require('../app')
const { Answer } = require('../models')

chai.use(chaiHttp)

let id = null
describe('/answers CRUD', function() {
  describe('add answer', function() {
    it('should return 201 on successful answer publication', function(done) {
      chai.request(app)
        .post('/answers/?questionId=5e30f14a1fb9b02793e3f6f6')
        .send({
          title: 'It depends.',
          description: 'I have worked with many programmers in my career and I honestly cannot find a clear pattern. My best suggestion is to explore and try yourself.',
          answeredBy: '5e30f0e042fede272ca27b57'
        })
        .set('access_token', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZTJlYzQxZmU5YmU3YzU0YzBiMzliNjEiLCJpYXQiOjE1ODAxMjMxNzV9._jvakIMntSYTMtqcg-YQ1h0K7LOg6pxYGPwixIXNGHA')
        .end((err, res) => {
          id = res.body._id
          expect(res).to.have.status(201)
          expect(res.body).to.be.an('object')
          expect(res.body).to.have.property('title').to.equal('It depends.')
          done()
        })
    })
  })
  describe('get answers', function() {
    it('should return 200 on getting all answers', function(done) {
      chai.request(app)
        .get('/answers/?questionId=5e30f14a1fb9b02793e3f6f6')
        .set('access_token', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZTJlYzQxZmU5YmU3YzU0YzBiMzliNjEiLCJpYXQiOjE1ODAxMjMxNzV9._jvakIMntSYTMtqcg-YQ1h0K7LOg6pxYGPwixIXNGHA')
        .end((err, res) => {
          expect(res).to.have.status(200)
          expect(res.body).to.be.an('array')
          expect(res.body[0]).to.be.an('object')
          expect(res.body[0]).to.have.property('title', 'It depends.')
          done()
        })
    })
  })
  describe('edit answer', function() {
    it('should return 200 on successful edit of a answer', function(done) {
      chai.request(app)
        .put('/answers/' + String(id))
        .set('access_token', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZTJlYzQxZmU5YmU3YzU0YzBiMzliNjEiLCJpYXQiOjE1ODAxMjMxNzV9._jvakIMntSYTMtqcg-YQ1h0K7LOg6pxYGPwixIXNGHA')
        .send({
          title: 'It depends.',
          description: 'I think javascript or python is relatively flexible and friendly for beginners'
        })
        .end((err, res) => {
          expect(res).to.have.status(200)
          expect(res.body).to.be.an('object')
          expect(res.body).to.have.property('description').to.equal('I think javascript or python is relatively flexible and friendly for beginners')
          expect()
          done()
        })
    })
  })
  after(function (done) {
    Answer.findOneAndDelete({title: 'It depends.'})
      .then(() => {
        done()
      })
      .catch(err => {
        done(err)
      })
  })
})