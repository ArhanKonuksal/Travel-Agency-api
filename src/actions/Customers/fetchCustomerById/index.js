const selectCustomerById = require("./queries/selectCustomerById");

const fetchCustomerById = async ({ CustomerId }) => {
  const artist = await selectCustomerById({ CustomerId });

  return { artist };
};

module.exports = fetchCustomerById;
