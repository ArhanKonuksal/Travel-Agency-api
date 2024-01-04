const handleAPIError = require("~root/utils/handleAPIError");
const createInclusive = require("~root/actions/Inclusive/createInclusive");

const postInclusive = async (req, res) => {
  const {
    name,
    description,
    price,
    days,
    destination,
    inclusive_type
  } = req.body;

  try {
    const { inclusiveId } = await createInclusive({
      name,
      description,
      price,
      days,
      destination,
      inclusive_type
    });

    res.status(201).send({
      inclusiveId
    });
  } catch (err) {
    handleAPIError(res, err);
  }
};

module.exports = postInclusive;
