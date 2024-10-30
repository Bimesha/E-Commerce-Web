const express = require("express");
const {
  getAllProducts,
  createNewProduct,
  getProductDetails,
} = require("../controllers/product-controller");
const router = express.Router();
const upload = require("../middleware/multer"); // for image upload

// Route to get all products
router.get("/all-products", getAllProducts);

// route to create new product route
router.post("/create-product", upload.single("productImage"), createNewProduct);

module.exports = router;
