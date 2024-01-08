const fetchBookingById = require("~root/actions/Bookings/fetchBookingById");
const handleAPIError = require("~root/utils/handleAPIError");

const getBookingById = async (req, res) => {
  const { bookingId } = req.params;
  try {
    const { booking } = await fetchBookingById({
      bookingId
    });
    res.status(201).send({
      booking
    });
  } catch (err) {
    handleAPIError(res, err);
  }
};
module.exports = getBookingById;
