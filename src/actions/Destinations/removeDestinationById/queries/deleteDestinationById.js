const { submitQuery } = require("~root/lib/database");

const deleteDestinationById = ({ destinationId }) => submitQuery`
    DELETE FROM destinations WHERE destination_id = ${destinationId} 
`;

module.exports = deleteDestinationById;
