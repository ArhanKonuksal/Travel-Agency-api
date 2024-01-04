const fetchInclusiveById = require("~root/actions/Inclusive/fetchInclusiveById");
const handleAPIError = require("~root/utils/handleAPIError");

const getInclusiveById = async (req, res) => {
  const { inclusiveId } = req.params;
  try {
    const { inclusive } = await fetchInclusiveById({
      inclusiveId
    });
    res.status(201).send({
      inclusive
    });
  } catch (err) {
    handleAPIError(res, err);
  }
};
module.exports = getInclusiveById;
