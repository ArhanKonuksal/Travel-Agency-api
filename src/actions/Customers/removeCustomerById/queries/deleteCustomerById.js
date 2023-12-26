const { submitQuery } = require("~root/lib/database");

const deleteCustomerById = ({ customerId }) => submitQuery`
    DELETE FROM customers WHERE customer_id = ${customerId} 
`;

module.exports = deleteCustomerById;
