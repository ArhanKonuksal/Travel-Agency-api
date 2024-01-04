const { submitQuery, sql, sqlReduce } = require("~root/lib/database");

const updateDestinationById = ({
  destinationId,
  destinationName = null,
  destinationLocation = null,
  description = null,
  price = null
}) => {
  const updates = [];

  if (destinationName !== null) {
    updates.push(sql`destination_name = ${destinationName}`);
  }
  if (destinationLocation !== null) {
    updates.push(sql`destination_location = ${destinationLocation}`);
  }

  if (description !== null) {
    updates.push(sql`description = ${description}`);
  }
  if (price !== null) {
    updates.push(sql`price = ${price}`);
  }

  if (updates.length !== 0) {
    return submitQuery`
   UPdATE
     destinations
   SET
     ${updates.reduce(sqlReduce)}
   WHERE
     destination_id = ${destinationId};
 `;
  }
  return Promise.resolve();
};

module.exports = updateDestinationById;
