const chai = require('chai')
const expect = chai.expect
const chaiHttp = require('chai-http')
const app = require('../app')
const { Question } = require('../models')

chai.use(chaiHttp)
let id = null

describe('/questions CRUD', function() {
  describe('add question', function() {
    it('should return 201 on successful question publication', function(done) {
      chai.request(app)
        .post('/questions')
        .send({
          title: 'Is javascript good?',
          description: 'Hi! I have just started coding and I would like to find a great language to start with. Does anyone have any suggestions for me?',
          tags: 'Programming,Javascript',
          questionedBy: '5e30f0e042fede272ca27b57'
        })
        .set('access_token', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZTJlYzQxZmU5YmU3YzU0YzBiMzliNjEiLCJpYXQiOjE1ODAxMjMxNzV9._jvakIMntSYTMtqcg-YQ1h0K7LOg6pxYGPwixIXNGHA')
        .end((err, res) => {
          id = res.body._id
          expect(res).to.have.status(201)
          expect(res.body).to.be.an('object')
          expect(res.body).to.have.property('title').to.equal('Is javascript good?')
          done()
        })
    })
  })
  describe('get questions', function() {
    it('should return 200 on getting all questions', function(done) {
      chai.request(app)
        .get('/questions')
        .set('access_token', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZTJlYzQxZmU5YmU3YzU0YzBiMzliNjEiLCJpYXQiOjE1ODAxMjMxNzV9._jvakIMntSYTMtqcg-YQ1h0K7LOg6pxYGPwixIXNGHA')
        .end((err, res) => {
          expect(res).to.have.status(200)
          expect(res.body).to.be.an('array')
          expect(res.body[0]).to.be.an('object')
          expect(res.body[0]).to.have.property('title', 'Is javascript good?')
          done()
        })
    })
  })
  describe('edit question', function() {
    it('should return 200 on successful edit of a question', function(done) {
      chai.request(app)
        .put('/questions/' + String(id))
        .set('access_token', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZTJlYzQxZmU5YmU3YzU0YzBiMzliNjEiLCJpYXQiOjE1ODAxMjMxNzV9._jvakIMntSYTMtqcg-YQ1h0K7LOg6pxYGPwixIXNGHA')
        .send({
          title: 'Is javascript good?',
          description: 'Hello! I am about to take a course in codecademy but I don\'t know what to pick. Help!',
          tags: 'Programming',
          questionedBy: '5e30f0e042fede272ca27b57'
        })
        .end((err, res) => {
          expect(res).to.have.status(200)
          expect(res.body).to.be.an('object')
          expect(res.body).to.have.property('description').to.equal('Hello! I am about to take a course in codecademy but I don\'t know what to pick. Help!')
          expect()
          done()
        })
    })
  })
  describe('delete question', function() {
    it('should return 200 on successful delete of a question', function(done) {
      chai.request(app)
        .delete('/questions/' + String(id))
        .set('access_token', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZTJlYzQxZmU5YmU3YzU0YzBiMzliNjEiLCJpYXQiOjE1ODAxMjMxNzV9._jvakIMntSYTMtqcg-YQ1h0K7LOg6pxYGPwixIXNGHA')
        .end((err, res) => {
          expect(res).to.have.status(200)
          expect(res.body).to.be.an('object')
          expect(res.body).to.have.property('description').to.equal('Hello! I am about to take a course in codecademy but I don\'t know what to pick. Help!')
          expect()
          done()
        })
    })
  })
  after(function (done) {
    Question.findOneAndDelete({title: 'Is javascript good?'})
      .then(() => {
        done()
      })
      .catch(err => {
        done(err)
      })
  })
})