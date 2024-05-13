var express = require('express');
var router = express.Router();
const bookingController = require('../controllers/bookingController');

router.get('/', bookingController.getBookings);

router.get('/search', bookingController.searchBookings);

// 👀 (6) LINK IT IN A ROUTE SO THAT WE CAN ACCESS IT IN BRUNO
router.post('/', bookingController.createBooking);

router.patch('/', bookingController.patchBooking);

router.put('/', bookingController.putBooking);

router.delete('/', bookingController.deleteBooking);

module.exports = router;
