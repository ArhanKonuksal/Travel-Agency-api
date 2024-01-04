const { submitQuery, camelKeys, getFirst } = require("~root/lib/database");

const selectInclusiveById = ({ inclusiveId }) => submitQuery`
    SELECT 
        inclusive_id,
        name,
        description,
        price,
        days,
        destination,
        inclusive_type
    FROM inclusive
    WHERE inclusive_id = ${inclusiveId}
`;

module.exports = getFirst(camelKeys(selectInclusiveById));
