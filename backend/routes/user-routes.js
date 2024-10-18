const express = require("express");
const router = express.Router();
const userController = require("../controllers/user-controller");
const { validateUserCreation } = require("../middleware/validation");

// Use a descriptive route name
router.post("/create-account", validateUserCreation, userController.createUser);

// Add the login route
router.post("/login", userController.loginUser);

router.get('/login', (req, res) => {
    res.send("Log in route is working");
});
module.exports = router;     

