const updateInclusiveById = require("./queries/updateInclusiveById");

const modifyInclusiveById = async ({
  inclusiveId,
  name,
  description,
  price,
  days,
  inclusive_type
}) => {
  const inclusive = await updateInclusiveById({
    inclusiveId,
    name,
    description,
    price,
    days,
    inclusive_type
  });

  return { inclusive };
};

module.exports = modifyInclusiveById;
