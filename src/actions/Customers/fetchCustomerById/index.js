const selectCustomerById = require("./queries/selectCustomerById");

const fetchCustomerById = async ({ CustomerId }) => {
  const Customer = await selectCustomerById({ CustomerId });

  return { Customer };
};

module.exports = fetchCustomerById;
