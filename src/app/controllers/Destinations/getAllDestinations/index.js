const fetchAllDestinations = require("~root/actions/Destinations/fetchAllDestinations/index");
const handleAPIError = require("~root/utils/handleAPIError");

const getAllDestinations = async (req, res) => {
  try {
    const { Destinations } = await fetchAllDestinations();
    res.status(201).send({
      Destinations
    });
  } catch (err) {
    handleAPIError(res, err);
  }
};

module.exports = getAllDestinations;
