const updateDestinationById = require("./queries/updateDestinationById");

const modifyDestinationById = async ({
  destinationId,
  destinationName,
  destinationLocation,
  description,
  price
}) => {
  const destination = await updateDestinationById({
    destinationId,
    destinationName,
    destinationLocation,
    description,
    price
  });

  return { destination };
};

module.exports = modifyDestinationById;
