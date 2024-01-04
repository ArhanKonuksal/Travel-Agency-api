const { submitQuery, camelKeys } = require("~root/lib/database");

const selectAllDestinations = () => submitQuery`
    SELECT * FROM destinations;
`;

module.exports = camelKeys(selectAllDestinations);
