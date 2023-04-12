const model = require('../Models/bookings');

// POST /bookings/
// Create a booking for the customer
exports.create_booking = async (req, res, next) => {
    try {
        const booking = await model.create_booking(req.body);
        if (booking == 1) {
            res.status(201).send('Created a booking');
        }
    } catch (e) {
        console.error('Error fetching hotel chains:', e);
        res.status(500).send('Internal server error');
    }
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

