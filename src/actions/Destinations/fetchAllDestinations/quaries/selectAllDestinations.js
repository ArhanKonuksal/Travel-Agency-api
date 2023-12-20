const { submitQuery, camelKeys } = require("~root/lib/database");

const selectAllDestinations = () => submitQuery`
    SELECT * FROM Destinations;
`;

module.exports = camelKeys(selectAllDestinations);
