const selectAllDestinations = require("./queries/selectAllDestinations");

const fetchAllDestinations = async () => {
  const destinations = await selectAllDestinations();

  return { destinations };
};

module.exports = fetchAllDestinations;
