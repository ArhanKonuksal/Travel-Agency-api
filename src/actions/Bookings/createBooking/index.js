const insertBooking = require("./queries/insertBooking");

const createBooking = async ({
  customerId,
  destinationId,
  bookingDate,
  departureDate
}) => {
  const bookingId = await insertBooking({
    customerId,
    destinationId,
    bookingDate,
    departureDate
  });
  return { bookingId };
};
module.exports = createBooking;
