const { submitQuery } = require("~root/lib/database");

const deleteInclusiveById = ({ inclusiveId }) => submitQuery`
    DELETE FROM inclusve WHERE inclusive_id = ${inclusiveId} 
`;

module.exports = deleteInclusiveById;
