require('./config/connect').config()
require('dotenv').config()
const express = require('express')
const app = express()
const port = process.env.PORT || 3000
const cors = require('cors')

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use('/', require('./routes'))

// ERROR HANDLER
app.use(function (err, req, res, next) {
  console.error(err.stack)
  res.status(500).send(err.message)
})
// END OF ERROR HANDLER

app.listen(port, () => console.log('Listening on port', port))