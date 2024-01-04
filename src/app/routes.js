const express = require("express");

const postLogin = require("./controllers/users/login");
const postUser = require("./controllers/users/register");
const putUserDetails = require("./controllers/users/putUserDetails");
const authentication = require("./middlewares/authentication");
const authorise = require("./middlewares/authorisation");
const getUserTypes = require("./controllers/users/userTypes");
const { ADMIN } = require("~root/constants/userTypes");
const getAllCustomers = require("./controllers/Customers/getAllCustomers");
const getCustomerById = require("./controllers/Customers/getCustomerById");
const postCustomer = require("./controllers/Customers/postCustomer");
const deleteCustomerById = require("./controllers/Customers/deleteCustomerById");
const patchCustomerById = require("./controllers/Customers/patchCustomerById");
const getAllInclusive = require("./controllers/Inclusive/getAllInclusive");
const getInclusiveById = require("./controllers/Inclusive/getInclusiveById");
const postInclusive = require("./controllers/Inclusive/postInclusive");

const router = express.Router();

// USER MANAGEMENT
router.post("/login", postLogin);
router.post(
  "/register",
  authentication,
  authorise({ roles: [ADMIN] }),
  postUser
);
router.put("/edit/user", authentication, putUserDetails);

router.get("/user-types", getUserTypes);

// Customers

router.get("/Customers", getAllCustomers);

router.get("/Customer/:customerId", getCustomerById);

router.post("/Customer", postCustomer);

router.patch("/Customer/:customerId", patchCustomerById);

router.delete("/Customer/:customerId", deleteCustomerById);

// Desinations

// inclusive

router.get("/Inclusive", getAllInclusive);

router.get("/Inclusive/:inclusiveId", getInclusiveById);

router.post("/Inclusive", postInclusive);

module.exports = router;
