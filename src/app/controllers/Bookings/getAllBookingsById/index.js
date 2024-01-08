const fetchAllBookings = require("~root/actions/Bookings/fetchAllBookings");
const handleAPIError = require("~root/utils/handleAPIError");

const getAllBookings = async (req, res) => {
  try {
    const { bookings } = await fetchAllBookings();
    res.status(201).send({
      bookings
    });
  } catch (err) {
    handleAPIError(res, err);
  }
};
module.exports = getAllBookings;
