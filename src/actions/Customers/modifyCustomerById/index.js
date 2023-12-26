const updateCustomerById = require("./queries/updateCustomerById");

const modifyCustomerById = async ({
  customerId,
  firstName,
  lastName,
  eMail,
  phoneNumber
}) => {
  const customer = await updateCustomerById({
    customerId,
    firstName,
    lastName,
    eMail,
    phoneNumber
  });

  return { customer };
};

module.exports = modifyCustomerById;
