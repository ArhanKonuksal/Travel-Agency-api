const fetchAllCustomers = require("~root/actions/Customers/fetchAllCustomers");
const handleAPIError = require("~root/utils/handleAPIError");

const getAllCustomers = async (req, res) => {
  try {
    const { Customers } = await fetchAllCustomers();
    res.status(201).send({
      Customers
    });
  } catch (err) {
    handleAPIError(res, err);
  }
};

module.exports = getAllCustomers;
