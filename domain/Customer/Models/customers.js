const connection = require('../../../utils/connect');

exports.get_customer_details = (async (id) => {
    try {
        const sql = `SELECT * FROM customer
                        WHERE customer_ID = ?;`;

        const result = await connection.query(sql, [id]);
        return result;
    } catch (e) {
        console.log(e);
        return e;
    }
});