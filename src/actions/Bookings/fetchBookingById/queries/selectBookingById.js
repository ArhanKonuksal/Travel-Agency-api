const { submitQuery, camelKeys } = require("~root/lib/database");

const selectBookingById = ({ bookingId }) => submitQuery`
    SELECT booking_id, customer_id, destination_id, booking_date, departure_date FROM bookings WHERE booking_id = ${bookingId}
    `;
module.exports = camelKeys(selectBookingById);
