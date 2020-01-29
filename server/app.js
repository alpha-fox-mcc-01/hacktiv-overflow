require('dotenv').config()
const express = require("express")
const app = express()
const cors = require('cors')
const routes = require('./routes')

const errorHandler = require('./middlewares/errorHandler')
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/hacktiv-overflow', {useNewUrlParser: true, useUnifiedTopology:true, useFindAndModify:false});
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log("Database connection successful")
});

app.use(cors())
app.use(express.urlencoded({extended: false}))
app.use(express.json())

app.use('/', routes)

app.use(errorHandler)

// app.listen(process.env.PORT, () => {
//   console.log(`Server is running on port ${process.env.PORT}`)
// })
module.exports = app;