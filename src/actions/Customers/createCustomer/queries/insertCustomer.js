const { submitQuery, getInsertId } = require("~root/lib/database");

const insertCustomer = ({
  firstName,
  lastName,
  eMail,
  phoneNumber
}) => submitQuery`
  INSERT INTO customers
  (
    first_name,
    last_name,
    email,
    phone_number
  )
  VALUES
  (
    ${firstName},
    ${lastName},
    ${eMail},
    ${phoneNumber}
  )
`;

module.exports = getInsertId(insertCustomer);
