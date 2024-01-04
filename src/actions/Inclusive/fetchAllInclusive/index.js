const selectAllInclusive = require("./queries/selectAllInclusive");

const fetchAllInclusive = async () => {
  const inclusive = await selectAllInclusive();

  return { inclusive };
};

module.exports = fetchAllInclusive;
