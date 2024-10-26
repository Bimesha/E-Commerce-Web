const express = require('express');
const productsController = require('../controllers/product-controller');
const router = express.Router();

// Route to get all products
router.get('/all-products', productsController.getAllProducts);

module.exports = router;