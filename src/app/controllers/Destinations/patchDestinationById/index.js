const modifyDestinationById = require("~root/actions/Destinations/modifyDestinationById");
const handleAPIError = require("~root/utils/handleAPIError");

const patchDestinationById = async (req, res) => {
  const { destinationId } = req.params;
  const { destinationName, destinationLocation, description, price } = req.body;

  try {
    const { destination } = await modifyDestinationById({
      destinationId,
      destinationName,
      destinationLocation,
      description,
      price
    });

    res.status(201).send({
      destination
    });
  } catch (err) {
    handleAPIError(res, err);
  }
};

module.exports = patchDestinationById;
