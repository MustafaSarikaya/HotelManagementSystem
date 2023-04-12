const connection = require('../../../utils/connect');

exports.get_employee_by_id = (async (id) => {
    try {
        const sql = `SELECT * FROM employee
                        WHERE employee_ID = ?;`;

        const result = await connection.query(sql, [id]);
        return result;
    } catch (e) {
        console.log(e);
        return e;
    }
});

exports.get_all_employees = (async () => {
    try {
        const sql = `SELECT * FROM employee;`;

        const result = await connection.query(sql);
        return result;
    } catch (e) {
        console.log(e);
        return e;
    }
});
