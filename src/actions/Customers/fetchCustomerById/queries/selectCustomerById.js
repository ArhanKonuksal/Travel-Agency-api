const { submitQuery, camelKeys } = require("~root/lib/database");

const selectCustomerBy_id = ({ Customer_id }) => submitQuery`
SELECT first_name, last_name, email, phone_number FROM Customers WHERE Customer_id = ${Customer_id}
`;

module.exports = camelKeys(selectCustomerBy_id);
