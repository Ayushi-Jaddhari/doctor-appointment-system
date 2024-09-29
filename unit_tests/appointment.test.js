const appointmentService = require('../service/appointmentService');

describe('Doctor Appintment Booking System', () => {
    it('should book a new appointment', () => {
        const appointment = appointmentService.bookAppointment(
            { firstName: 'Ayushi', lastName: 'Jaddhari', email: 'jaddharia@gmail.com' },
            'Dr. Kohli',
            '10:00 AM - 11:00 AM'
        );
        expect(appointment).toHaveProperty('email', 'jaddharia@gmail.com');
    });

    it('should throw an error if slot is already booked', () => {
        expect(() => {
            appointmentService.bookAppointment(
                { firstName: 'Pooja', lastName: 'Rao', email: 'pooja.rao@gmail.com' },
                'Dr. Raj',
                '10:00 AM - 11:00 AM'
            );
        }).toThrow('This time slot is already booked.');
    });
});
