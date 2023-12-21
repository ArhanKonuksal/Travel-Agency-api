const selectAllDestinations = require("./quaries/selectAllDestinations");

const fetchAllDestinations = async () => {
  const Destinations = await selectAllDestinations();

  return { Destinations };
};

module.exports = fetchAllDestinations;
