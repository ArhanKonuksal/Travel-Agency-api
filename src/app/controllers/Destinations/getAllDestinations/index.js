const fetchAllDestinations = require("~root/actions/Destinations/fetchAllDestinations");
const handleAPIError = require("~root/utils/handleAPIError");

const getAllDestinations = async (req, res) => {
  try {
    const { destinations } = await fetchAllDestinations();
    res.status(201).send({
      destinations
    });
  } catch (err) {
    handleAPIError(res, err);
  }
};

module.exports = getAllDestinations;
