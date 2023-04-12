const connection = require('../../../utils/connect');

exports.get_room_by_id = (async (id) => {
    try {
        const sql = `SELECT * FROM room
                        WHERE room_ID = ?;`;

        const result = await connection.query(sql, [id]);
        return result;
    } catch (e) {
        console.log(e);
        return e;
    }
});

exports.get_rooms_of_hotel = (async (id) => {
    try {
        const sql = `SELECT * FROM room
                        WHERE hotel_ID = ?;`;

        const result = await connection.query(sql, [id]);
        return result;
    } catch (e) {
        console.log(e);
        return e;
    }
});

exports.update_room = (async (data, id) => {
    try {
        const sql = `UPDATE room
                        SET hotel_ID = ?, room_number = ?, price_per_night = ?, amenities = ?, room_capacity = ?, view_type = ?, extendability = ?, problems = ?
                        WHERE room_ID = ?;`;
        
        const result = await connection.query(sql, [
            parseInt(data.hotel_id),
            parseInt(data.room_number),
            parseFloat(data.price_per_night),
            data.amenities,
            parseInt(data.room_capacity),
            data.view_type,
            parseInt(data.extendability),
            data.problems,
            parseInt(id),
        ]);
        return result.affectedRows;
    } catch (e) {
        console.log(e);
        return e;
    }
});


exports.create_room = (async (data, hotel_ID) => {
    try {
        const sql = `INSERT INTO room (hotel_ID, room_number, price_per_night, amenities, room_capacity, view_type, extendability, problems)
        VALUES
            (?, ?, ?, ?, ?, ?, ?, ?);`;
        
        const result = await connection.query(sql, [
            parseInt(hotel_ID),
            parseInt(data.room_number),
            parseFloat(data.price_per_night),
            data.amenities,
            parseInt(data.room_capacity),
            data.view_type,
            parseInt(data.extendability),
            data.problems,
        ]);
        return result.affectedRows;
    } catch (e) {
        console.log(e);
        return e;
    }
});

exports.delete_room = (async (id) => {
    try {
        const sql = `DELETE FROM room
                        WHERE room_ID = ?;`;

        const result = await connection.query(sql, [id]);
        return result.affectedRows;
    } catch (e) {
        console.log(e);
        return e;
    }
});
