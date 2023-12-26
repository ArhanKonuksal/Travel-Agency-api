const insertCustomer = require("./queries/insertCustomer");

const createCustomer = async ({ firstName, lastName, eMail, phoneNumber }) => {
  const customerId = await insertCustomer({
    firstName,
    lastName,
    eMail,
    phoneNumber
  });
  return { customerId };
};

module.exports = createCustomer;
