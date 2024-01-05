const modifyInclusiveById = require("~root/actions/Inclusive/modifyInclusiveById");
const handleAPIError = require("~root/utils/handleAPIError");

const patchInclusiveById = async (req, res) => {
  const { inclusiveId } = req.params;
  const {
    name,
    description,
    price,
    days,
    destination,
    inclusive_type
  } = req.body;

  try {
    const { inclusive } = await modifyInclusiveById({
      inclusiveId,
      name,
      description,
      price,
      days,
      destination,
      inclusive_type
    });

    res.status(201).send({
      inclusive
    });
  } catch (err) {
    handleAPIError(res, err);
  }
};

module.exports = patchInclusiveById;
