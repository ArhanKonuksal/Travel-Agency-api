const { submitQuery, camelKeys } = require("~root/lib/database");

const selectAllCustomers = () => submitQuery`
    SELECT * FROM Customers;
`;

module.exports = camelKeys(selectAllCustomers);
