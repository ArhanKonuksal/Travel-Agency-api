const { submitQuery, getInsertId } = require("~root/lib/database");

const insertDestination = ({
  destinationName,
  destinationLocation,
  description,
  price
}) => submitQuery`
  INSERT INTO destinations
  (
    destination_name,
    destination_location,
    description,
    price
  )
  VALUES
  (
    ${destinationName},
    ${destinationLocation},
    ${description},
    ${price}
  )
`;

module.exports = getInsertId(insertDestination);
