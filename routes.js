const express = require('express');
const appointmentController = require('./controllers/appointmentController');
const router = express.Router();

router.post('/appointments', appointmentController.bookAppointment);
router.get('/appointments', appointmentController.allAppointment);
router.get('/appointments/:email', appointmentController.viewAppointment);
router.get('/appointments/doctor/:doctorName', appointmentController.viewAppointmentsByDoctor);
router.delete('/appointments', appointmentController.cancelAppointment);
router.put('/appointments', appointmentController.modifyAppointment);

module.exports = router;
