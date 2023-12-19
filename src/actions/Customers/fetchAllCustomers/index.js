const selectAllCustomers = require("./queries/selectAllCustomer");

const fetchAllCustomers = async () => {
  const Customers = await selectAllCustomers();

  return { Customers };
};

module.exports = fetchAllCustomers;
