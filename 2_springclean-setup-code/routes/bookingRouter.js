var express = require('express');
var router = express.Router();
const bookingController = require('../controllers/bookingController');

router.get('/', bookingController.getBookings);

router.post('/', bookingController.postBooking);

router.patch('/', bookingController.patchBooking);

router.put('/', bookingController.putBooking);

router.delete('/', bookingController.deleteBooking);

module.exports = router;
