const { submitQuery, getInsertId } = require("~root/lib/database");

const insertBooking = async ({
  customerId,
  destinationId,
  bookingDate,
  departureDate
}) => submitQuery`
    INSERT INTO bookings (customer_id, destination_id, booking_date, departure_date)
    VALUES (${customerId}, ${destinationId}, ${destinationId},${bookingDate}, ${departureDate});
`;

module.exports = getInsertId(insertBooking);
