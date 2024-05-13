const getBookings = function (req, res) {
  res.send('Here is all your bookings!');
};

const postBooking = function (req, res) {
  res.send('Thanks for the new booking!');
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
  getBookings,
  postBooking,
  patchBooking,
  putBooking,
  deleteBooking,
};
