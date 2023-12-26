const { submitQuery, sql, sqlReduce } = require("~root/lib/database");

const updateCustomerById = ({
  customerId,
  firstName = null,
  lastName = null,
  eMail = null,
  phoneNumber = null
}) => {
  const updates = [];

  if (firstName !== null) {
    updates.push(sql`first_name = ${firstName}`);
  }
  if (lastName !== null) {
    updates.push(sql`last_name = ${lastName}`);
  }

  if (eMail !== null) {
    updates.push(sql`email = ${eMail}`);
  }
  if (phoneNumber !== null) {
    updates.push(sql`phone_number = ${phoneNumber}`);
  }

  if (updates.length !== 0) {
    return submitQuery`
   UPDATE
     customers
   SET
     ${updates.reduce(sqlReduce)}
   WHERE
     customer_id = ${customerId};
 `;
  }
  return Promise.resolve();
};

module.exports = updateCustomerById;
