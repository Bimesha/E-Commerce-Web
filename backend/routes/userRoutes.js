const express = require("express");
const router = express.Router();
const userController = require("../controllers/userController");
const { validateUserCreation } = require("../middleware/validation");

// Use a descriptive route name
router.post("/create-account", validateUserCreation, userController.createUser);

// Add the login route
router.post("/login", userController.loginUser);

module.exports = router;

