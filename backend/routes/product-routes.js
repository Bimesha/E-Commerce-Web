const express = require("express");
const {
  getAllProducts,
  createNewProduct,
  getProductsByCategory,
  getProductDetails,
} = require("../controllers/product-controller");
const router = express.Router();
const upload = require("../middleware/multer"); // for image upload

// Route to get all products
router.get("/all-products", getAllProducts);

module.exports = router;
