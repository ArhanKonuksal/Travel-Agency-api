const handleAPIError = require("~root/utils/handleAPIError");
const createCustomer = require("~root/actions/Customers/createCustomer");

const postCustomer = async (req, res) => {
  const { firstName, lastName, eMail, phoneNumber } = req.body;

  try {
    const { CustomerId } = await createCustomer({
      firstName,
      lastName,
      eMail,
      phoneNumber
    });

    res.status(201).send({
      CustomerId
    });
  } catch (err) {
    handleAPIError(res, err);
  }
};

module.exports = postCustomer;
