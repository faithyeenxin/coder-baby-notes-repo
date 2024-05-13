// (A.1) req.body() demo
const getBookings = function (req, res) {
  console.log('get all booking');
  console.log(req.body);
  res.send('Here is all your bookings!');
};

// (A.2) URL Encoded form data demo
const postBooking = function (req, res) {
  // Accessing form data from req.body
  const formData = req.body;

  // Do something with the form data
  console.log('Received form data:', formData);

  // Respond to the client
  res.send('Thanks for the new booking!');
};

// (A.3) query paramters demo
const searchBookings = function (req, res) {
  // Accessing query parameters
  const type = req.query.type;
  const page = req.query.page;

  // Do something with the query parameters
  console.log('Type:', type);
  console.log('Page Number:', page);
  // Send a response
  res.send('This is my search route!');
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
  searchBookings,
  postBooking,
  patchBooking,
  putBooking,
  deleteBooking,
};
