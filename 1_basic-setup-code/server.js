// Load express
const express = require('express');

// Create our express app
const app = express();

app.get('/', function (req, res) {
  res.send('<h1>Hello World!</h1>');
});

app.get('/booking', function (req, res) {
  res.send('Here is all your bookings!');
});

app.post('/booking', function (req, res) {
  res.send('Thanks for the new booking!');
});

app.patch('/booking', function (req, res) {
  res.send('You have updated your booking partially!');
});

app.put('/booking', function (req, res) {
  res.send('You have updated the your booking entirely!');
});

app.delete('/booking', function (req, res) {
  res.send('You have deleted the booking!');
});

app.get('/user', function (req, res) {
  res.send('Here is all your users!');
});

app.post('/user', function (req, res) {
  res.send('Thanks for the new user!');
});

app.patch('/user', function (req, res) {
  res.send('You have updated your user partially!');
});

app.put('/user', function (req, res) {
  res.send('You have updated the your user entirely!');
});

app.delete('/user', function (req, res) {
  res.send('You have deleted the user!');
});

// Tell the app to listen on port 3000
// for HTTP requests from clients
app.listen(3000, function () {
  console.log('Listening on port 3000');
});
