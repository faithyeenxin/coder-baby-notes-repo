// 👀 (4) IMPORT BOOKING MODEL CREATED TO USE IT

const Booking = require('../models/booking');

const getBookings = function (req, res) {
  console.log('get all booking');
  console.log(req.body);
  res.send('Here is all your bookings!');
};

const postBooking = function (req, res) {
  const formData = req.body;
  console.log('Received form data:', formData);
  res.send('Thanks for the new booking!');
};

const searchBookings = function (req, res) {
  const type = req.query.type;
  const page = req.query.page;
  console.log('Type:', type);
  console.log('Page Number:', page);
  res.send('This is my search route!');
};

// 👀 (5) USE IT IN CODE
const createBooking = async (req, res) => {
  const body = req.body;
  const booking = await Booking.create(body);
  res.status(201).json(booking);
};

const patchBooking = function (req, res) {
  res.send('You have updated your booking partially!');
};

const putBooking = function (req, res) {
  res.send('You have updated the your booking entirely!');
};

const deleteBooking = function (req, res) {
  res.send('You have deleted the booking!');
};

module.exports = {
  createBooking,
  getBookings,
  searchBookings,
  postBooking,
  patchBooking,
  putBooking,
  deleteBooking,
};
