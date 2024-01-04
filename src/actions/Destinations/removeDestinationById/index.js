const deleteDestinationById = require("./queries/deleteDestinationById");

const removeDestinationById = async ({ destinationId }) => {
  const deletedDestination = await deleteDestinationById({ destinationId });
  return { deletedDestination };
};

module.exports = removeDestinationById;
