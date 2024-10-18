const express = require('express');
const productsController = require('../controllers/products-controller');
const router = express.Router();

// Route to get all products
router.get('/', productsController.getAllProducts);

module.exports = router;