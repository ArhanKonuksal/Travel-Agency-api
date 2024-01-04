const insertInclusive = require("./queries/insertInclusive");

const createInclusive = async ({
  name,
  description,
  price,
  days,
  destination,
  inclusive_type
}) => {
  const inclusiveId = await insertInclusive({
    name,
    description,
    price,
    days,
    destination,
    inclusive_type
  });
  return { inclusiveId };
};

module.exports = createInclusive;
