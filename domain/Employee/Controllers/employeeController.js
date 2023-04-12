const model = require('../Models/employees');

// POST /employees/:id
// Register an employee
exports.register_employee = (req, res, next) => {
    res.send('respond with a resource');
}

// PUT employees/:id
// Update employee details
exports.update_employee_details = (req, res, next) => {
    res.send('respond with a resource');
}

// POST /employees/:id
// Toggle employee role
exports.toggle_employee_role = (req, res, next) => {
    res.send('respond with a resource');
}

// GET /employees/:id
// Fetch employee details
exports.fetch_employee_details = async (req, res, next) => {
    try {
        const employee = await model.get_employee_by_id(req.params.id);
        res.send({ result: employee});
    } catch (e) {
        console.error('Error fetching room:', e);
        res.status(500).send('Internal server error');
    }
}

// GET /employees
// Fetch all employees
exports.fetch_all_employees = async (req, res, next) => {
    try {
        const employees = await model.get_all_employees();
        res.send({ result: employees});
    } catch (e) {
        console.error('Error fetching room:', e);
        res.status(500).send('Internal server error');
    }
}

// DELETE /employees/:id
// Delete an employee
exports.delete_employee = (req, res, next) => {
    res.send('respond with a resource');
}




