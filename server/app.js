if (process.env.NODE_ENV === 'development') {
    require('dotenv').config()
}

const express = require('express')
const app = express()
const routes = require('./routes/index')
const errorHandler = require('./middlewares/errorHandler')
var mongoose = require('mongoose')
mongoose.connect('mongodb://localhost/overflow', {useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false})

var db = mongoose.connection
db.on('error', console.error.bind(console, 'connection error:'))
db.once('open', function() {
  console.log('database connected')
})

app.use(express.json())
app.use(express.urlencoded({extended: false}))
app.use('/', routes)

app.use('/', errorHandler)

app.listen(process.env.PORT,  () => {
    console.log('app running on port', process.env.PORT)
})