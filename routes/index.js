var express = require('express');
var router = express.Router();

//Require controller modules.
var hotel_controller = require('../domain/Hotel/Controllers/hotelController');
var room_controller = require('../domain/Hotel/Controllers/roomController');
var booking_controller = require('../domain/Hotel/Controllers/bookingController');
var rental_controller = require('../domain/Hotel/Controllers/rentalController');
var employee_controller = require('../domain/Employee/Controllers/employeeController');  

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'HMS' });
});

/**
 * @swagger
 * tags:
 *   name: Hotel Chains
 * /chain:
 *   GET:
 *     summary: Fetch all hotel chains
 *   responses:
 *     200:
 *       description: List of hotel chains
 *       content: 
 *         application/json:
 * 
 */
router.get('/chain', hotel_controller.fetch_all_hotel_chains);

// POST create a hotel chain
router.post('/chain/:chain_id', hotel_controller.create_hotel_chain);

// GET fetch hotel chain details
router.get('/chain/:chain_id', hotel_controller.fetch_hotel_chain_details);

// PUT update hotel chain details
router.put('/chain/:chain_id', hotel_controller.update_hotel_chain_details);

// DELETE delete a hotel chain
router.delete('/chain/:chain_id', hotel_controller.delete_hotel_chain);

// POST create a hotel
router.post('/chain/:chain_id/hotel/:hotel_id', hotel_controller.create_hotel);

// GET fetch hotel details
router.get('/chain/:chain_id/hotel/:hotel_id', hotel_controller.fetch_hotel_details);

// GET fetch all hotels of a chain 
router.get('/chain/:chain_id/hotel/', hotel_controller.fetch_all_hotels);

// PUT update hotel details
router.put('/chain/:chain_id/hotel/:hotel_id', hotel_controller.update_hotel_details);

// POST create a room
router.post('/chain/:chain_id/hotel/:hotel_id/room/:room_id', room_controller.room_create);

// GET fetch room details
router.get('/chain/:chain_id/hotel/:hotel_id/room/:room_id', room_controller.room_detail);

// GET fetch all rooms of a hotel
router.get('/chain/:chain_id/hotel/:hotel_id/room/', room_controller.rooms_list);

// PUT update room details
router.put('/chain/:chain_id/hotel/:hotel_id/room/:room_id', room_controller.room_update);

// DELETE delete a room
router.delete('/chain/:chain_id/hotel/:hotel_id/room/:room_id', room_controller.room_delete);

// GET fecth available rooms
router.get('/chain/:chain_id/hotel/:hotel_id/room/search', room_controller.rooms_search);

// POST create a booking for the customer
router.post('/bookings/:id/customer/:customer_id', booking_controller.create_booking);

// GET fetch booking details for the customer
router.get('/bookings/:id', booking_controller.fetch_booking_details);

// GET fetch all bookings of a customer
router.get('/bookings/customer/:customer_id', booking_controller.fetch_all_bookings);

// PUT Update booking details for the customer
router.put('/bookings/:id', booking_controller.update_booking);

// POST create a rental for the customer
router.post('/rentals/:id/customer/:customer_id', rental_controller.create_rental);

// GET fetch rental details for the customer
router.get('/rentals/:id', rental_controller.fetch_rental_details);

// GET fetch all rentals of a customer
router.get('/rentals/customer/:customer_id', rental_controller.fetch_all_rentals);

// PUT Update rental details for the customer
router.put('/rentals/:id', rental_controller.update_rental);

// POST create an employee
router.post('/employee/:id', employee_controller.register_employee);

// UPDATE update employee details
router.put('/employee/:id', employee_controller.update_employee_details);

// GET fetch employee details
router.get('/employee/:id', employee_controller.fetch_employee_details);

// GET fetch all employees
router.get('/employee', employee_controller.fetch_all_employees);

// POST toggle employee role
router.post('/employee/:id', employee_controller.toggle_employee_role);

// DELETE delete an employee
router.delete('/employee/:id', employee_controller.delete_employee);



module.exports = router;
