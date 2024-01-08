const { submitQuery, camelKeys } = require("~root/lib/database");

const selectAllBookings = () => submitQuery`
    SELECT * FROM bookings;
`;

module.exports = camelKeys(selectAllBookings);
