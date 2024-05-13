// Load express
const express = require('express');
var path = require('path');
require('dotenv').config();

// 👀 (2) IMPORT DATABASE CONFIG FILE
require('./config/database');

var bookingRouter = require('./routes/bookingRouter');
var userRouter = require('./routes/userRouter');

const app = express();

app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', function (req, res) {
  res.send('<h1>Hello World!</h1>');
});

app.use('/booking', bookingRouter);
app.use('/user', userRouter);

app.listen(3000, function () {
  console.log('Listening on port 3000');
});
