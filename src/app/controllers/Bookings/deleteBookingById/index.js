const removeBookingById = require("~root/actions/Bookings/removeBookingById");
const handleAPIError = require("~root/utils/handleAPIError");

const deleteBookingById = async (req, res) => {
  const { bookingId } = req.params;

  try {
    const { deletedBooking } = await removeBookingById({
      bookingId
    });

    res.status(201).send({ deletedBooking });
  } catch (err) {
    handleAPIError(res, err);
  }
};

module.exports = deleteBookingById;
