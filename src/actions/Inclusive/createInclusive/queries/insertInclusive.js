const { submitQuery, getInsertId } = require("~root/lib/database");

const insertInclusive = ({
  name,
  description,
  price,
  days,
  destination,
  inclusive_type
}) => submitQuery`
  INSERT INTO inclusive
  (
    name,
    description,
    price,
    days,
    destination,
    inclusive_type
  )
  VALUES
  (
    ${name},
    ${description},
    ${price},
    ${days},
    ${destination},
    ${inclusive_type}
  )
`;

module.exports = getInsertId(insertInclusive);
