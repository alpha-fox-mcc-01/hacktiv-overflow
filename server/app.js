require('dotenv').config();
const express = require('express');
const app = express();
const port = process.env.PORT;
const router = require('./routes');
const errorHandler = require('./middlewares/errorHandler');
const cors = require('cors');
const cron = require('./helper/deleteAnswer');
cron();

const db = require('./config/db');
db();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());

app.use('/', router);
app.get('*', (req, res) => {
  res.status(404).json({
    msg: '404 route not found'
  })
});
app.use(errorHandler);

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});