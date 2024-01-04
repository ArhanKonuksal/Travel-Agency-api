const removeDestinationById = require("~root/actions/Destinations/removeDestinationById");
const handleAPIError = require("~root/utils/handleAPIError");

const deleteDestinationById = async (req, res) => {
  const { destinationId } = req.params;
  try {
    const { deletedDestination } = await removeDestinationById({
      destinationId
    });
    res.status(201).send({ deletedDestination });
  } catch (err) {
    handleAPIError(res, err);
  }
};
module.exports = deleteDestinationById;
