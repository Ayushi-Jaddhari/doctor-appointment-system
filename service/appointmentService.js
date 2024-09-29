//BootStrap Data
let appointments = [
  {
    firstName: "Ayushi",
    lastName: "Jaddhari",
    email: "jaddharia@gmail.com",
    doctor: "Dr. Raj",
    timeSlot: "10:00 AM - 11:00 AM",
  },
  {
    firstName: "Uday",
    lastName: "Raj",
    email: "uday@gmail.com",
    doctor: "Dr. Raj",
    timeSlot: "1:00 AM - 11:00 AM",
  },
];

const bookAppointment = (patient, doctor, timeSlot) => {
  if (
    appointments.some((a) => a.doctor === doctor && a.timeSlot === timeSlot)
  ) {
    throw new Error("This time slot is already booked.");
  }
  const appointment = { ...patient, doctor, timeSlot };
  appointments.push(appointment);
  return appointment;
};

const getAppointmentByEmail = (email) => {
  return appointments.find((a) => a.email === email);
};

const getAppointment = () => {
  return appointments;
};

const getAppointmentsByDoctor = (doctorName) => {
  return appointments.filter((a) => a.doctor === doctorName);
};

const cancelAppointment = (email, timeSlot) => {
  const index = appointments.findIndex(
    (a) => a.email === email && a.timeSlot === timeSlot
  );
  if (index === -1) throw new Error("Appointment not found.");
  appointments.splice(index, 1);
  return true;
};

const modifyAppointment = (email, newTimeSlot) => {
  const appointment = getAppointmentByEmail(email);
  if (!appointment) {
    throw new Error("Original appointment not found.");
  }
  const allAppointment = getAppointment();
  allAppointment.forEach((appointment) => {
    if (appointment.timeSlot === newTimeSlot) {
      throw new Error("This time slot is already booked.");
    }
  });
  appointment.timeSlot = newTimeSlot;
  return appointment;
};

module.exports = {
  bookAppointment,
  getAppointmentByEmail,
  getAppointmentsByDoctor,
  cancelAppointment,
  modifyAppointment,
  getAppointment,
};
