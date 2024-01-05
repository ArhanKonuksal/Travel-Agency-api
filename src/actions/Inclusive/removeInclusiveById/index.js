const deleteInclusiveById = require("./queries/deleteInclusiveById");

const removeInclusiveById = async ({ inclusiveId }) => {
  const deletedInclusive = await deleteInclusiveById({ inclusiveId });
  return { deletedInclusive };
};

module.exports = removeInclusiveById;
