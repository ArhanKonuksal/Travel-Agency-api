const { submitQuery, sql, sqlReduce } = require("~root/lib/database");

const updateBookingById = ({
  bookingId,
  customer_id = null,
  destination_id = null,
  booking_date = null,
  departure_date = null
}) => {
  const updates = [];

  if (customer_id !== null) {
    updates.push(sql`customer_id = ${customer_id}`);
  }

  if (destination_id !== null) {
    updates.push(sql`destination_id = ${destination_id}`);
  }

  if (booking_date !== null) {
    updates.push(sql`booking_date = ${booking_date}`);
  }

  if (departure_date !== null) {
    updates.push(sql`departure_date= ${departure_date}`);
  }

  if (updates.length !== 0) {
    return submitQuery`
   UPDATE
     bookings
   SET
     ${updates.reduce(sqlReduce)}
   WHERE
     booking_id = ${bookingId};
 `;
  }
  return Promise.resolve();
};

module.exports = updateBookingById;
