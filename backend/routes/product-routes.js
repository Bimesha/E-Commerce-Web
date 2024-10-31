const express = require("express");
const {
  getAllProducts,
  createNewProduct,
  getProductDetails,
  updateProductDetails,
} = require("../controllers/product-controller");
const router = express.Router();
const upload = require("../middleware/multer"); // for image upload

// Route to get all products
router.get("/all-products", getAllProducts);

// route to create new product route
router.post("/create-product", upload.single("productImage"), createNewProduct);

//route to get a product by ID
router.get("/:id", getProductDetails);

// route to update a product details by its ID
router.put("/:id", upload.single("productImage"), updateProductDetails);

module.exports = router;
