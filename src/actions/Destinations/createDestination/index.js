const insertDestination = require("./queries/insertDestination");

const createDestination = async ({
  destinationName,
  destinationLocation,
  description,
  price
}) => {
  const destinationId = await insertDestination({
    destinationName,
    destinationLocation,
    description,
    price
  });
  return { destinationId };
};

module.exports = createDestination;
