const { submitQuery, camelKeys } = require("~root/lib/database");

const selectAllInclusive = () => submitQuery`
    SELECT * FROM inclusive;
`;

module.exports = camelKeys(selectAllInclusive);
