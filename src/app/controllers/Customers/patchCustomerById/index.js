const modifyCustomerById = require("~root/actions/Customers/modifyCustomerById");
const handleAPIError = require("~root/utils/handleAPIError");

const patchCustomerById = async (req, res) => {
  const { customerId } = req.params;
  const { firstName, lastName, eMail, phoneNumber } = req.body;

  try {
    const { customer } = await modifyCustomerById({
      customerId,
      firstName,
      lastName,
      eMail,
      phoneNumber
    });

    res.status(201).send({
      customer
    });
  } catch (err) {
    handleAPIError(res, err);
  }
};

module.exports = patchCustomerById;
