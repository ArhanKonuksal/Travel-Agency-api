const fetchCustomerById = require("~root/actions/Customers/fetchCustomerById");
const handleAPIError = require("~root/utils/handleAPIError");

const getCustomerBy_id = async (req, res) => {
  const { Customer_id } = req.params;
  try {
    const { Customer } = await fetchCustomerById({
      Customer_id
    });
  } catch (err) {
    handleAPIError(res, err);
  }
};

module.exports = getCustomerBy_id;
