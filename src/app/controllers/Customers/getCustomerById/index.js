const fetchCustomerById = require("~root/actions/Customers/fetchCustomerById");
const handleAPIError = require("~root/utils/handleAPIError");

const getCustomerById = async (req, res) => {
  const { CustomerId } = req.params;
  try {
    const { Customer } = await fetchCustomerById({
      CustomerId
    });
    res.status(201).send({
      Customer
    });
  } catch (err) {
    handleAPIError(res, err);
  }
};

module.exports = getCustomerById;
