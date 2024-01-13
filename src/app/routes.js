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
const getAllDestinations = require("./controllers/Destinations/getAllDestinations");
const getDestinationById = require("./controllers/Destinations/getDestinationById");
const deleteDestinationById = require("./controllers/Destinations/deleteDestinationById");
const patchDestinationById = require("./controllers/Destinations/patchDestinationById");
const postDestination = require("./controllers/Destinations/postDestination");
const patchInclusiveById = require("./controllers/Inclusive/patchInclusiveById");
const deleteInclusiveById = require("./controllers/Inclusive/deleteInclusiveById");
const postBooking = require("./controllers/Bookings/postBooking");
const deleteBookingById = require("./controllers/Bookings/deleteBookingById");
const getBookingById = require("./controllers/Bookings/getBookingById");
const patchBookingById = require("./controllers/Bookings/patchBookingById");
const getAllBookings = require("./controllers/Bookings/getAllBookingsById");

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

router.post("/Customer", postCustomer); //çalışmaz

router.patch("/Customer/:customerId", patchCustomerById);

router.delete("/Customer/:customerId", deleteCustomerById);

// Desinations

router.get("/Destinations", getAllDestinations);

router.get("/Destination/:destinationId", getDestinationById);

router.post("/Destination", postDestination);

router.patch("/Destination/:destinationId", patchDestinationById);

router.delete("/Destination/:destinationId", deleteDestinationById);

// Inclusive

router.get("/Inclusives", getAllInclusive);

router.get("/Inclusive/:inclusiveId", getInclusiveById);

router.post("/Inclusive", postInclusive); //çalışmaz

router.patch("/Inclusive/:inclusiveId", patchInclusiveById);

router.delete("Inclusive/:inclusiveId", deleteInclusiveById);

// Bookings

router.get("/Bookings", getAllBookings);

router.get("/Booking/:bookingId", getBookingById);

router.post("/Booking", postBooking); //çalışmaz

router.patch("/Booking/:bookingId", patchBookingById);

router.delete("/Booking/:bookingId", deleteBookingById);

module.exports = router;
