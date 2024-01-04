const { submitQuery, camelKeys, getFirst } = require("~root/lib/database");

const selectDestinationById = ({ destinationId }) => submitQuery`
    SELECT 
        destination_id,
        destination_name,
        destination_location,
        description,
        price
    FROM destinations
    WHERE destination_id = ${destinationId}
`;

module.exports = getFirst(camelKeys(selectDestinationById));
