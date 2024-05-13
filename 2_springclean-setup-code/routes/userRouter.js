var express = require('express');
var router = express.Router();

router.get('/', function (req, res) {
  res.send('Here is all your users!');
});

router.post('/', function (req, res) {
  res.send('Thanks for the new user!');
});

router.patch('/', function (req, res) {
  res.send('You have updated your user partially!');
});

router.put('/', function (req, res) {
  res.send('You have updated the your user entirely!');
});

router.delete('/', function (req, res) {
  res.send('You have deleted the user!');
});

module.exports = router;
