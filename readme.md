# Doctor Appointment System

## Setup
1. Clone the repository.
2. Run `npm install` to install dependencies.
3. Run `npm test` to execute unit tests.
4. Run `npx nodemon src/index.js` to start the server.

## API Endpoints
- `POST /api/appointments` - Book an appointment.
- `GET /api/appointments/:email` - View an appointment by email.
- `GET /api/appointments/doctor/:doctorName` - View all appointments by doctor.
- `DELETE /api/appointments` - Cancel an appointment.
- `PUT /api/appointments` - Modify an appointment.

## Curl

- `POST /api/appointments` 

    * > curl -X POST http://localhost:3000/api/appointments \
        -H "Content-Type: application/json" \
        -d '{
            "firstName": "Ayushi",
            "lastName": "Jaddhari",
            "email": "jaddharia@gmail.com",
            "doctor": "Dr. Raj",
            "timeSlot": "10:00 AM - 11:00 AM"
        }'


- `GET /api/appointments` - View all appointment.

    * > curl -X GET http://localhost:3000/api/appointments


- `GET /api/appointments/:email` - View an appointment by email.

    * > curl -X GET http://localhost:3000/api/appointments/jaddharia@gmail.com


- `GET /api/appointments/doctor/:doctorName` - View all appointments by doctor.

    * > curl -X GET http://localhost:3000/api/appointments/doctor/Dr.%20Raj


- `DELETE /api/appointments` - Cancel an appointment.

    * > curl -X DELETE http://localhost:3000/api/appointments \
        -H "Content-Type: application/json" \
        -d '{
            "email": "jaddharia@gmail.com",
            "timeSlot": "10:00 AM - 11:00 AM"
        }'


- `PUT /api/appointments` - Modify an appointment.

    * > curl -X PUT http://localhost:3000/api/appointments \
        -H "Content-Type: application/json" \
        -d '{
            "email": "jaddharia@gmail.com",
            "newTimeSlot": "12:00 PM - 01:00 PM"
        }'



