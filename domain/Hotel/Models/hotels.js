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

        const result = await connection.query(sql, [data.chain_name, data.email, parseInt(data.number_hotels), data.phone_number, data.address]);
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

// Model method to create a hotel chain
