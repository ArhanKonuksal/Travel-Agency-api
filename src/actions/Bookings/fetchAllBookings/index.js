const selectAllBookings = require("./queries/selectAllBookings");

const fetchAllBookings = async () => {
  const bookings = await selectAllBookings();
  return { bookings };
};
module.exports = fetchAllBookings;
