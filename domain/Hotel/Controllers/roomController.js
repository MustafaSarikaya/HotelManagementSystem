const Room = require('../Models/rooms');

// GET /chain/:chain_id/hotel/:hotel_id/rooms/
// Fetch all rooms of a hotel
exports.rooms_list = (req, res, next) => {
    Room.find()
        .exec((err, rooms) => {
        if (err) { return next(err); }
        res.render('rooms', { title: 'Rooms', rooms });
        });
};

// GET /chain/:chain_id/hotel/:hotel_id/rooms/:room_id
// Fetch room details
exports.room_detail = (req, res, next) => {
    res.send('respond with a resource');
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

// GET /chain/:chain_id/hotel/:hotel_id/rooms/search
// Fetch available rooms
exports.rooms_search = (req, res, next) => {
    res.send('respond with a resource');
}










