const removeInclusiveById = require("~root/actions/Inclusive/removeInclusiveById");
const handleAPIError = require("~root/utils/handleAPIError");

const deleteInclusiveById = async (req, res) => {
  const { inclusiveId } = req.params;
  try {
    const { deletedInclusive } = await removeInclusiveById({
      inclusiveId
    });
    res.status(201).send({ deletedInclusive });
  } catch (err) {
    handleAPIError(res, err);
  }
};
module.exports = deleteInclusiveById;
