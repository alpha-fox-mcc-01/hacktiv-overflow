const chai = require('chai')
const expect = chai.expect
const chaiHttp = require('chai-http')
const app = require('../app')
const { User } = require('../models')

chai.use(chaiHttp)

describe('user routing', function() {
  describe('/signup', function() {
      it('should have status 201 and return new user data (_id, username, email, role, cart)', function(done) {
          chai.request(app)
              .post('/users/signup')
              .send({
                  username: "agung",
                  email: "agung@mail.com",
                  password: "qwerty12345"
              })
              .end((err, res) => {
                  expect(res).to.have.status(201)
                  expect(res.body).to.have.property('email').to.equal('agung@mail.com')
                  expect(res.body).to.have.property('username').to.equal('agung')
                  done()
              })
      })
      it('should have status 400 and return error validation if email is invalid', function(done) {
          chai.request(app)
              .post('/users/signup')
              .send({
                  username: "johndoe",
                  email: "121sw1dw",
                  password: "qwerty12345"
              })
              .end((err, res) => {
                  expect(res).to.have.status(400)
                  expect(res.body.errors).to.be.an('array')
                  expect(res.body.message).to.equal('Validation Error')
                  done()
              })
      })
      it('should have status 400 and return error validation if any field is empty', function(done) {
          chai.request(app)
              .post('/users/signup')
              .send({
                  username: "asdassadasd",
                  email: "121sw1dw",
                  password: ""
              })
              .end((err, res) => {
                  expect(res).to.have.status(400)
                  expect(res.body.errors).to.be.an('array')
                  expect(res.body.message).to.equal('Validation Error')
                  done()
              })
      })
      it('should have status 400 and return error validation if any field is empty', function(done) {
          chai.request(app)
              .post('/users/signup')
              .send({
                  username: "",
                  email: "121sw1dw",
                  password: "qwerty12345"
              })
              .end((err, res) => {
                  expect(res).to.have.status(400)
                  expect(res.body.errors).to.be.an('array')
                  expect(res.body.message).to.equal('Validation Error')
                  done()
              })
      })
      it('should have status 400 and return error validation if email is duplicate', function(done) {
          chai.request(app)
              .post('/users/signup')
              .send({
                  username: "asdasdasd",
                  email: "agung@mail.com",
                  password: "qwerty12345"
              })
              .end((err, res) => {
                  expect(res).to.have.status(400)
                  expect(res.body.errors).to.be.an('array')
                  expect(res.body.message).to.equal('Validation Error')
                  done()
              })
      })
  })
  describe('/signin', function() {
      it('should have status 400 and return login error if email is unregistered', function(done) {
          chai.request(app)
              .post('/users/signin')
              .send({
                  email: "joasdahndoe@mail.com",
                  password: "qwerty12345"
              })
              .end((err, res) => {
                  console.log(res.status)
                  expect(res).to.have.status(400)
                  expect(res.body.message).to.equal('Email/Password is wrong')
                  done()
              })
      })
      it('should have status 400 and return login error if password is wrong', function(done) {
          chai.request(app)
              .post('/users/signin')
              .send({
                  email: "agus@mail.com",
                  password: "qwerty1234"
              })
              .end((err, res) => {
                  expect(res).to.have.status(400)
                  expect(res.body.message).to.equal('Email/Password is wrong')
                  done()
              })
      })
      it('should have status 200 and return access_token if valid', function(done) {
          chai.request(app)
              .post('/users/signin')
              .send({
                  email: "agung@mail.com",
                  password: "qwerty12345"
              })
              .end((err, res) => {
                  expect(res).to.have.status(200)
                  expect(res.body).to.have.property('access_token')
                  done()
              })
      })
  })
  after(function(done) {
    User.findOneAndDelete({username: "agung"})
      .then(() => {
        done()
      })
      .catch(err => {
        done(err)
      }) 
  }) 
})