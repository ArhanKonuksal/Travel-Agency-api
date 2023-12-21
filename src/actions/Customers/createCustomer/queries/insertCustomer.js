const { submitQuery, getInsertId } = require("~root/lib/database");

const insertCustomer = ({
  firstName,
  lastName,
  eMail,
  phoneNumber
}) => submitQuery`
INSERT INTO artists( firstName, lastName, eMail, phoneNumber)
VALUE( ${firstName}, ${lastName}, ${eMail}, ${phoneNumber});
`;
module.exports = getInsertId(insertCustomer);
