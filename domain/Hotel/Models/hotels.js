const connection = require('../../../utils/connect');
const omit = require('lodash/omit');

// Model method to fetch all hotel chains
exports.get_all_hotel_chains = (async () => {
    try {
        const sql = 'SELECT * FROM chain;';

        const result = await connection.query(sql);
        return result;
    } catch (e) {
        console.log(e);
        return e;
    }
});

// Model method to fetch all hotel chains
exports.get_hotel_chain_by_id = (async (id) => {
    try {
        const sql = `SELECT * FROM chain
                        WHERE chain_ID = ?;`;

        const result = await connection.query(sql, [id]);
        return result;
    } catch (e) {
        console.log(e);
        return e;
    }
});

exports.create_hotel_chain = (async (data) => {
    try {
        const sql = `INSERT INTO chain (chain_name, email, number_hotels, phone_number, address)
        VALUES
          (?, ?, ?, ?, ?);`;

        const result = await connection.query(sql, [
          data.chain_name,
          data.email,
          parseInt(data.number_hotels),
          data.phone_number,
          data.address,
        ]);
        return result.affectedRows;
    } catch (e) {
        console.log(e);
        return e;
    }
});

exports.update_hotel_chain = (async (data, id) => {
    try {
        const sql = `UPDATE chain 
                        SET chain_name = ?, email = ?, number_hotels = ?, phone_number = ?, address = ?
                        WHERE chain_ID = ?;`;

        const result = await connection.query(sql, [
          data.chain_name,
          data.email,
          parseInt(data.number_hotels),
          data.phone_number,
          data.address,
          id,
        ]);
        return result.affectedRows;
    } catch (e) {
        console.log(e);
        return e;
    }
});

exports.delete_hotel_chain = (async (id) => {
    try {
        const sql = `DELETE FROM chain
                        WHERE chain_ID = ?;`;

        const result = await connection.query(sql, [id]);
        return result.affectedRows;
    } catch (e) {
        console.log(e);
        return e;
    }
});    

exports.create_hotel = (async (data, chain_ID) => {
    try {
        const sql = `INSERT INTO hotel (chain_ID, name, rating, number_rooms, email, manager_ID, phone_number, address)
        VALUES
            (?, ?, ?, ?, ?, ?, ?, ?);`;
 
        const result = await connection.query(sql, [
          chain_ID,
          data.name,
          parseInt(data.rating),
          parseInt(data.number_rooms),
          data.email,
          parseInt(data.manager_id),
          data.phone_number,
          data.address,
        ]);
        return result.affectedRows;
    } catch (e) {
        console.log(e);
        return e;
    }
});


exports.get_hotel_by_id = (async (id) => {
    try {
        const sql = `SELECT * FROM hotel
                        WHERE hotel_ID = ?;`;

        const result = await connection.query(sql, [id]);
        return result;
    } catch (e) {
        console.log(e);
        return e;
    }
});

exports.get_all_hotels_of_chain = (async (id) => {
    try {
        const sql = `SELECT * FROM hotel
                        WHERE chain_ID = ?;`;

        const result = await connection.query(sql, [id]);
        return result;
    } catch (e) {
        console.log(e);
        return e;
    }
});

exports.update_hotel = (async (data, id) => {
    try {
        const sql = `UPDATE hotel 
                        SET chain_ID = ?, name = ?, rating = ?, number_rooms = ?, email = ?, manager_ID = ?, phone_number = ?, address = ?
                        WHERE hotel_ID = ?;`;

        const result = await connection.query(sql, [
            parseInt(data.chain_id),
            data.name,
            parseInt(data.rating),
            parseInt(data.number_rooms),
            data.email,
            parseInt(data.manager_id),
            data.phone_number,
            data.address,
            id,
        ]);
        return result.affectedRows;
    } catch (e) {
        console.log(e);
        return e;
    }
});

exports.delete_hotel = (async (id) => {
    try {
        sql = `DELETE FROM hotel
                WHERE hotel_ID = ?;`;

        result = await connection.query(sql, [id]);
        return result.affectedRows;
    } catch (e) {
        console.log(e);
        return e;
    }
});

