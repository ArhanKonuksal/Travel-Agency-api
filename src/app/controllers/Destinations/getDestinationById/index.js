const fetchDestinationById = require("~root/actions/Destinations/fetchDestinationById");
const handleAPIError = require("~root/utils/handleAPIError");

const getDestinationById = async (req, res) => {
  const { destinationId } = req.params;
  try {
    const { destination } = await fetchDestinationById({
      destinationId
    });
    res.status(201).send({
      destination
    });
  } catch (err) {
    handleAPIError(res, err);
  }
};
module.exports = getDestinationById;
