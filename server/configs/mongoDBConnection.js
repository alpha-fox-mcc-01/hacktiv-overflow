module.exports = () => {
  const mongoose = require('mongoose')

  let MONGOURI
  if (process.env.NODE_ENV !== 'production') {
    MONGOURI = `mongodb://localhost/hacktivoverflow-${process.env.NODE_ENV}`
  } else {
    MONGOURI = proces.env.MONGOURI
  }

  const options = {
    useNewUrlParser: true,
		useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false
  }

  mongoose.connect(MONGOURI, options)

  const db = mongoose.connection
	db.on('error', console.error.bind(console, 'MongoDB Connection Error, sudah nyalain sudo mongod?'))
	db.once('open', function () {
		console.log('MongoDB Connected', MONGOURI)
	})
}