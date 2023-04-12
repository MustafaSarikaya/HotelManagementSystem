const connection = require('../../../utils/connect');

exports.create_booking = (async (data) => {
    try {
        const sql = `INSERT INTO booking (room_ID, start_date, end_date, rental_price, additional_charges, customer_ID)
        VALUES
            (?, ?, ?, ?, ?, ?);`;

        const result = await connection.query(sql, [
            parseInt(data.room_ID),
            data.start_date,
            data.end_date,
            parseFloat(data.rental_price),
            parseFloat(data.additional_charge),
            parseInt(data.customer_ID),
        ]);
        return result.affectedRows;
    } catch (e) {
        console.log(e);
        return e;
    }
});

