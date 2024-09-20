const express = require('express');
const router = express.Router();
const appointmentController = require('../controllers/appointmentController');

// Route for getting all appointments
router.get('/', appointmentController.getAllAppointment);

// Route for adding a new appointment
router.post('/', appointmentController.addAppointment);

module.exports = router;
