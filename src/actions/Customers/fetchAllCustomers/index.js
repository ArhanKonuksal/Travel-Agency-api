const selectAllCustomers = require("./queries/selectAllCustomer");

const fetchAllCustomers = async () => {
  const customers = await selectAllCustomers();

  return { customers };
};

module.exports = fetchAllCustomers;
