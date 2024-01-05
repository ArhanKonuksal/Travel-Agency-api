const { submitQuery, sql, sqlReduce } = require("~root/lib/database");

const updateInclusiveById = ({
  inclusiveId,
  name = null,
  description = null,
  price = null,
  days = null,
  inclusive_type = null
}) => {
  const updates = [];

  if (name !== null) {
    updates.push(sql`name = ${name}`);
  }
  if (description !== null) {
    updates.push(sql`description = ${description}`);
  }
  if (price !== null) {
    updates.push(sql`price = ${price}`);
  }
  if (days !== null) {
    updates.push(sql`days = ${days}`);
  }
  if (inclusive_type !== null) {
    updates.push(sql`inclusive_type = ${inclusive_type}`);
  }

  if (updates.length !== 0) {
    return submitQuery`
   UPdATE
   inclusive
   SET
     ${updates.reduce(sqlReduce)}
   WHERE
   inclusive_id = ${inclusiveId};
 `;
  }
  return Promise.resolve();
};

module.exports = updateInclusiveById;
