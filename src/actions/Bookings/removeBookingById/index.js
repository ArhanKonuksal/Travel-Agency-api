const deleteBookingById = require("./queries/deleteBookingById");

const removeBookingById = async ({ bookingId }) => {
  const deletedBooking = await deleteBookingById({ bookingId });
  return { deletedBooking };
};

module.exports = removeBookingById;
