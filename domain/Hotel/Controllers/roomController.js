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

// PUT /chain/hotel/rooms/:room_id
// Update room details
exports.room_update = async (req, res, next) => {
    try {
        const room = await model.update_room(req.body, req.params.room_id);
        if (room == 1) {
            res.status(200).send('Updated room details');
        }
    } catch (e) {
        console.error('Error updating room details', e);
        res.status(500).send('Internal server error');
    }
}

// DELETE /chain/hotel/rooms/:room_id
// Delete a room
exports.room_delete = async (req, res, next) => {
    try {
        const room = await model.delete_room(req.params.room_id);
        if (room == 1) {
            res.status(203).send(`Deleted ${room} room`);
        }
    } catch (e) {
        console.error('Error deleting hotel:', e);
        res.status(500).send('Internal server error');
    }
}

// POST /chain/hotel/:hotel_id/rooms
// Create a room
exports.room_create = async (req, res, next) => {
    try {
        const room = await model.create_room(req.body, req.params.hotel_id);
        if (room == 1) {
            res.status(201).send('Created a room');
        }
    } catch (e) {
        console.error('Error fetching hotel chains:', e);
        res.status(500).send('Internal server error');
    }
}

// GET /chain/:chain_id/hotel/:hotel_id/rooms/aviaible
// Fetch all available rooms of a hotel
exports.rooms_search = async (req, res, next) => {
    try {
        const rooms = await model.search_rooms(req.body, req.params.hotel_id);
        res.send({ result: rooms});
    } catch (e) {
        console.error('Error fetching rooms:', e);
        res.status(500).send('Internal server error');
    }
}












