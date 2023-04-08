const Rental = require('../Models/rentals');

// POST /rentals/:id/customer/:customer_id
// Create a rental for the customer
exports.create_rental = (req, res, next) => {
    res.send('respond with a resource');
}

// GET /rentals/:id
// Fetch rental details for the customer
exports.fetch_rental_details = (req, res, next) => {
    res.send('respond with a resource');
}

// GET /rentals/customer/:customer_id
// Fetch all rentals for the customer
exports.fetch_all_rentals = (req, res, next) => {
    res.send('respond with a resource');
}

// PUT /rentals/:id
// Update rental details for the customer
exports.update_rental = (req, res, next) => {
    res.send('respond with a resource');
}

