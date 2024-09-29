const appointmentService = require("../service/appointmentService");

const bookAppointment = (req, res) => {
  const { firstName, lastName, email, doctor, timeSlot } = req.body;
  try {
    if (!firstName || !lastName | !email || !doctor || !timeSlot) {
      return res.status(400).json({
        error: "Bad Request",
        message:
          "Missing required data.Please send the required details to book the appointment",
      });
    }
    const appointment = appointmentService.bookAppointment(
      { firstName, lastName, email },
      doctor,
      timeSlot
    );
    res.status(201).json({ message: "Appointment booked", appointment });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
const allAppointment = (req, res) => {
  const appointment = appointmentService.getAppointment();
  if (appointment) {
    res.status(200).json(appointment);
  } else {
    res.status(404).json({ error: "Appointment not found" });
  }
};
const viewAppointment = (req, res) => {
  const { email } = req.params;
  if (!email) {
    res.status(404).json({ error: "No email Provided" });
  }
  const appointment = appointmentService.getAppointmentByEmail(email);
  if (appointment) {
    res.status(200).json(appointment);
  } else {
    res.status(404).json({ error: "Appointment not found" });
  }
};

const viewAppointmentsByDoctor = (req, res) => {
  const { doctorName } = req.params;
  const appointments = appointmentService.getAppointmentsByDoctor(doctorName);
  res.status(200).json(appointments);
};

const cancelAppointment = (req, res) => {
  const { email, timeSlot } = req.body;
  try {
    if(!email || !timeSlot){
        return res.status(400).json({
            error: "Bad Request",
            message:
              "Missing required data. Please send the email and new time slot for appointment",
          });
    }
    appointmentService.cancelAppointment(email, timeSlot);
    res.status(200).json({ message: "Appointment cancelled" });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const modifyAppointment = (req, res) => {
  const { email, newTimeSlot } = req.body;
  try {
    if(!email || !newTimeSlot){
        return res.status(400).json({
            error: "Bad Request",
            message:
              "Missing required data. Please send the email and new time slot for appointment",
          });
    }
    const updatedAppointment = appointmentService.modifyAppointment(
      email,
      newTimeSlot
    );
    res
      .status(200)
      .json({ message: "Appointment modified", updatedAppointment });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = {
  bookAppointment,
  viewAppointment,
  viewAppointmentsByDoctor,
  cancelAppointment,
  modifyAppointment,
  allAppointment
};
