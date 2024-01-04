const selectDestinationById = require("./queries/selectDestinationById");

const fetchDestinationById = async ({ destinationId }) => {
  const destination = await selectDestinationById({
    destinationId
  });
  return { destination };
};
module.exports = fetchDestinationById;
