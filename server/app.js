require('dotenv').config()
const express = require('express')
const app = express()
const port = process.env.PORT || 3000
const router = require('./routes/index')
const errorHandler = require('./middlewares/errorHandler')

const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/hoverflow', {useNewUrlParser: true, useUnifiedTopology: true});

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  // we're connected!
});

const cors = require('cors')
app.use(cors())

app.use(express.json())
app.use(express.urlencoded({ extended: false }))

app.use('/', router)
app.use(errorHandler)

app.listen(port, () => console.log(`app listening on port ${port}`))