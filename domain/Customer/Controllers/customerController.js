const model = require('../Models/customers');

// POST /customer/:id
// Register a customer
exports.register_customer = (req, res, next) => {
    res.send('respond with a resource');
}

// PUT customer/:id
// Update customer details
exports.update_customer_details = (req, res, next) => {
    res.send('respond with a resource');
}

// GET /customer/:id
// Fetch customer details
exports.fetch_customer_details = async (req, res, next) => {
    try {
        const customer = await model.get_customer_details(req.params.customer_id);
        res.send({ result: customer});
    } catch (e) {
        console.error('Error fetching hotel chains:', e);
        res.status(500).send('Internal server error');
    }
}
