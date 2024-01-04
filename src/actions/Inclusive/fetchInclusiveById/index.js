const selectInclusiveById = require("./queries/selectInclusiveById");

const fetchInclusiveById = async ({ inclusiveId }) => {
  const inclusive = await selectInclusiveById({
    inclusiveId
  });
  return { inclusive };
};
module.exports = fetchInclusiveById;
