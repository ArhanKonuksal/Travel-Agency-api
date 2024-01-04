const fetchAllInclusive = require("~root/actions/Inclusive/fetchAllInclusive");
const handleAPIError = require("~root/utils/handleAPIError");

const getAllInclusive = async (req, res) => {
  try {
    const { inclusive } = await fetchAllInclusive();
    res.status(201).send({
      inclusive
    });
  } catch (err) {
    handleAPIError(res, err);
  }
};

module.exports = getAllInclusive;
