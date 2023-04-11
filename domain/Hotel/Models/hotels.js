const connetion = require('../../../utils/connect');
const omit = require('lodash/omit');

// Model method to fetch all hotel chains
async function fetch_all_hotel_chains() {
    try {
        var sql = 'SELECT * FROM hotel_chain;';

        const result = await connetion.query(sql);
    return result.rows.toJSON();
    } catch (e) {
        console.log(e);
        return e;
    }
}

// Model method to create a hotel chain
