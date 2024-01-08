const { submitQuery } = require("~root/lib/database");

const deleteBookingById = ({ bookingId }) => submitQuery`
    DELETE FROM bookings WHERE booking_id = ${bookingId} 
`;

module.exports = deleteBookingById;
