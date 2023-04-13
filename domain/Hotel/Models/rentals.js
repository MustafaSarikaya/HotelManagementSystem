const connection = require('../../../utils/connect');

exports.get_all_customer_rentals = (async (id) => {
    try {
        const sql = `SELECT * FROM rental
                        WHERE customer_ID = ?;`;

        const result = await connection.query(sql, [id]);
        return result;
    } catch (e) {
        console.log(e);
        return e;
    }
});