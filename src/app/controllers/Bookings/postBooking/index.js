const handleAPIError = require("~root/utils/handleAPIError");
const createBooking = require("~root/actions/Bookings/createBooking");

const postBooking = async (req, res) => {
  const { customerId, destinationId, bookingDate, departureDate } = req.body;

  try {
    const { bookingId } = await createBooking({
      customerId,
      destinationId,
      bookingDate,
      departureDate
    });

    res.status(201).send({
      bookingId
    });
  } catch (err) {
    handleAPIError(res, err);
  }
};

module.exports = postBooking;
