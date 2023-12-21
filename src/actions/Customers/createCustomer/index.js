const insertCustomer = require("./queries/insertCustomer");

const createCustomer = async ({ firstName, lastName, eMail, phoneNumber }) => {
  const CustomerId = await insertCustomer({
    firstName,
    lastName,
    eMail,
    phoneNumber
  });
  return { CustomerId };
};

module.exports = createCustomer;
