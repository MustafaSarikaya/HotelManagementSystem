const Booking = require('../Models/bookings');

// POST /bookings/:id/customer/:customer_id
// Create a booking for the customer
exports.create_booking = (req, res, next) => {
    res.send('respond with a resource');
}

// GET /bookings/:id
// Fetch booking details 
exports.fetch_booking_details = (req, res, next) => {
    res.send('respond with a resource');
}

// GET /bookings/customer/:customer_id
// Fetch all bookings of a customer
exports.fetch_all_bookings = (req, res, next) => {
    res.send('respond with a resource');
}

// PUT /bookings/:id
// Update booking details for the customer
exports.update_booking = (req, res, next) => {
    res.send('respond with a resource');
}

