var express = require('express');
var router = express.Router();

//Require controller modules.
var customer_controller = require('../domain/Customer/Controllers/customerController');
var booking_controller = require('../domain/Customer/Controllers/bookingController');
var room_controller = require('../domain/Customer/Controllers/roomController');

// GET customer home page.
router.get('/customer', function(req, res, next) {
    res.render('index', { title: 'Customer Portal' });
});

// POST register customer
router.post('/customer/:id', customer_controller.register_customer);

// PUT update customer details
router.put('/customer/:id', customer_controller.update_customer_details);

// GET fetch customer details
router.get('/customer/:id', customer_controller.fetch_customer_details);

// POST create a booking for the customer
router.post('/bookings/:id', booking_controller.create_booking);

// GET fetch booking details for the customer
router.get('/bookings/:id', booking_controller.fetch_booking_details);

// GET fetch all bookings for the customer
router.get('/bookings', booking_controller.fetch_all_bookings);

// PUT cancel booking details for the customer
router.put('/bookings/:id', booking_controller.cancel_booking);

// PUT update booking details for the customer
router.put('/bookings/:id', booking_controller.update_booking);

// GET fetch all rooms
router.get('/rooms/search', room_controller.rooms_search);

// GET fetch room details
router.get('/rooms/:id', room_controller.rooms_detail);

module.exports = router;











