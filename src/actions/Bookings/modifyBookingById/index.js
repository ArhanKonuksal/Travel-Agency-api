const updateBookingById = require("./queries/updateBookingById");

const modifyBookingById = async ({
  booking_id,
  customer_id,
  destination_id,
  booking_date,
  departure_date
}) => {
  const booking = await updateBookingById({
    booking_id,
    customer_id,
    destination_id,
    booking_date,
    departure_date
  });

  return { booking };
};

module.exports = modifyBookingById;
