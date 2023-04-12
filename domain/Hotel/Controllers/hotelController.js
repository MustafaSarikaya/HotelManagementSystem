const model = require('../Models/hotels');

// Generate the swagger documentation for the fetch all hotel chains API


exports.fetch_all_hotel_chains = async (req, res, next) => {
    try {
        const chains = await model.get_all_hotel_chains();
        res.send({ result: chains});
    } catch (e) {
        console.error('Error fetching hotel chains:', e);
        res.status(500).send('Internal server error');
    }
}

// POST /chain/:chain_id
// Create a hotel chain
exports.create_hotel_chain = async (req, res, next) => {
    try {
        const chain = await model.create_hotel_chain(req.body);
        if (chain == 1) {
            res.status(201).send('Created');
        }
    } catch (e) {
        console.error('Error fetching hotel chains:', e);
        res.status(500).send('Internal server error');
    }
}
// GET /chain/:chain_id
// Fetch hotel chain details
exports.fetch_hotel_chain_details = async (req, res, next) => {
    try {
        const chain = await model.get_hotel_chain_by_id(req.params.chain_id);
        res.send({ result: chain});
    } catch (e) {
        console.error('Error fetching hotel chains:', e);
        res.status(500).send('Internal server error');
    }
}

// // PUT /chain/:chain_id
// // Update hotel chain details
// exports.update_hotel_chain_details = (req, res, next) => {
//     res.send('respond with a resource');
// }

// // DELETE /chain/:chain_id
// // Delete a hotel chain
// exports.delete_hotel_chain = (req, res, next) => {
//     res.send('respond with a resource');
// }

// // POST /chain/:chain_id/hotel/:hotel_id        
// // Create a hotel
// exports.create_hotel = (req, res, next) => {
//     res.send('respond with a resource');
// }

// GET /chain/hotel/:hotel_id
// Fetch hotel details
exports.fetch_hotel_details = async (req, res, next) => {
    try {
        const hotel = await model.get_hotel_by_id(req.params.hotel_id);
        res.send({ result: hotel});
    } catch (e) {
        console.error('Error fetching hotel chains:', e);
        res.status(500).send('Internal server error');
    }
}

// GET /chain/:chain_id/hotel/
// Fetch all hotels of a chain
exports.fetch_all_hotels_of_chain = async (req, res, next) => {
    try {
        const hotels = await model.get_all_hotels_of_chain(req.params.chain_id);
        res.send({ result: hotels});
    } catch (e) {
        console.error('Error fetching hotel chains:', e);
        res.status(500).send('Internal server error');
    }
}

// // PUT /chain/:chain_id/hotel/:hotel_id
// // Update hotel details
// exports.update_hotel_details = (req, res, next) => {
//     res.send('respond with a resource');
// }

