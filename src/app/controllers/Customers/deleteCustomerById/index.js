const removeCustomerById = require("~root/actions/Customers/removeCustomerById");
const handleAPIError = require("~root/utils/handleAPIError");

const deleteCustomerById = async (req, res) => {
  const { customerId } = req.params;

  try {
    const { deletedCustomer } = await removeCustomerById({
      customerId
    });

    res.status(201).send({ deletedCustomer });
  } catch (err) {
    handleAPIError(res, err);
  }
};

module.exports = deleteCustomerById;
