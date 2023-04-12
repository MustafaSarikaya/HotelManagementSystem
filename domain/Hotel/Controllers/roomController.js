const model = require('../Models/rooms');

// GET /chain/:chain_id/hotel/:hotel_id/rooms/
// Fetch all rooms of a hotel
exports.rooms_list = async (req, res, next) => {
    try {
        const rooms = await model.get_rooms_of_hotel(req.params.hotel_id);
        res.send({ result: rooms});
    } catch (e) {
        console.error('Error fetching room:', e);
        res.status(500).send('Internal server error');
    }
}

// GET /chain/:chain_id/hotel/:hotel_id/rooms/:room_id
// Fetch room details
exports.room_detail = async (req, res, next) => {
    try {
        const room = await model.get_room_by_id(req.params.room_id);
        res.send({ result: room});
    } catch (e) {
        console.error('Error fetching room:', e);
        res.status(500).send('Internal server error');
    }
}

// PUT /chain/:chain_id/hotel/:hotel_id/rooms/:room_id
// Update room details
exports.room_update = (req, res, next) => {
    res.send('respond with a resource');
}

// DELETE /chain/:chain_id/hotel/:hotel_id/rooms/:room_id
// Delete a room
exports.room_delete = (req, res, next) => {
    res.send('respond with a resource');
}

// POST /chain/:chain_id/hotel/:hotel_id/rooms/:room_id
// Create a room
exports.room_create = (req, res, next) => {
    res.send('respond with a resource');
}

// GET /chain/:chain_id/hotel/:hotel_id/rooms/aviaible
// Fetch all available rooms of a hotel
exports.rooms_search = (req, res, next) => {
    res.send('respond with a resource');
}











