require('dotenv').config()

const express = require('express')
const app = express()
const cors = require('cors')
const port = process.env.PORT
const routes = require('./routes')
const errorHandler = require('./middlewares/errorHandler')

// setup mongoose
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/hacktiv-overflow', {useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true });
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log('mongoose connected !')
})

app.use(express.urlencoded({ extended: false }))
app.use(express.json())
app.use(cors())


app.use(routes)
app.use(errorHandler)

app.listen(port, () => console.log(`This app listening on port ${port}!`))