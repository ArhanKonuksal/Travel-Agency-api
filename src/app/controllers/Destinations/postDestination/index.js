const handleAPIError = require("~root/utils/handleAPIError");
const createDestination = require("~root/actions/Destinations/createDestination");

const postDestination = async (req, res) => {
  const { destinationName, destinationLocation, description, price } = req.body;

  try {
    const { destinationId } = await createDestination({
      destinationName,
      destinationLocation,
      description,
      price
    });

    res.status(201).send({
      destinationId
    });
  } catch (err) {
    handleAPIError(res, err);
  }
};

module.exports = postDestination;
