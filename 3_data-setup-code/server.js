// Load express
const express = require('express');
var path = require('path');

// Create our express app
const app = express();
// (1) we need this if we are receiving JSON body from incoming requests
app.use(express.json());
// (2) we need this if we are receiving form data
// app.use(express.urlencoded({ extended: false }));
// (3) this helps serve static files if user request from our endpoint
app.use(express.static(path.join(__dirname, 'public')));

// Import routes
var bookingRouter = require('./routes/bookingRouter');
var userRouter = require('./routes/userRouter');

app.get('/', function (req, res) {
  res.send('<h1>Hello World!</h1>');
});

// use the routes
app.use('/booking', bookingRouter);
app.use('/user', userRouter);

// Tell the app to listen on port 3000
// for HTTP requests from clients
app.listen(3000, function () {
  console.log('Listening on port 3000');
});
