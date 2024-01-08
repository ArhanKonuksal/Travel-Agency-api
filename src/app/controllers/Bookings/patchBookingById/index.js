const modifyBookingById = require("~root/actions/Bookings/modifyBookingById");
const handleAPIError = require("~root/utils/handleAPIError");

const patchBookingById = async (req, res) => {
  const { bookingId } = req.params;
  const {
    customer_id,
    destination_id,
    booking_date,
    departure_date
  } = req.body;

  try {
    const { booking } = await modifyBookingById({
      bookingId,
      customer_id,
      destination_id,
      booking_date,
      departure_date
    });

    res.status(201).send({
      booking
    });
  } catch (err) {
    handleAPIError(res, err);
  }
};

module.exports = patchBookingById;
