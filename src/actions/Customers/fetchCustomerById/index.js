const selectCustomerById = require("./queries/selectCustomerById");

const fetchCustomerById = async ({ customerId }) => {
  const customer = await selectCustomerById({ customerId });

  return { customer };
};

module.exports = fetchCustomerById;
