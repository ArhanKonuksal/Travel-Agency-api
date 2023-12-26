const deleteCustomerById = require("./queries/deleteCustomerById");

const removeCustomerById = async ({ customerId }) => {
  const deletedCustomer = await deleteCustomerById({ customerId });
  return { deletedCustomer };
};

module.exports = removeCustomerById;
