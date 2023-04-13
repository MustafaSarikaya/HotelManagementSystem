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
exports.fetch_all_rentals = async (req, res, next) => {
    try {
        const rentals = await model.get_all_customer_rentals(req.params.customer_id);
        res.send({ result: rentals});
    } catch (e) {
        console.error('Error fetching hotel chains:', e);
        res.status(500).send('Internal server error');
    }
}

// PUT /rentals/:id
// Update rental details for the customer
exports.update_rental = (req, res, next) => {
    res.send('respond with a resource');
}

