const selectBookingById = require("./queries/selectBookingById");

const fetchBookingById = async ({ bookingId }) => {
  const booking = await selectBookingById({
    bookingId
  });
  return { booking };
};
module.exports = fetchBookingById;
