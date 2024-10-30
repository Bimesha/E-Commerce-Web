const cloudinary = require("../config/cloudinary");
const fs = require("fs");
const {
  createProduct,
  getProducts,
  getProductById,
} = require("../models/product-model");

// Controller to fetch all products to the admin page
const getAllProducts = async (req, res) => {
  try {
    const products = await getProducts();
    res.json(products);
  } catch (err) {
    console.error("Error in getAllProducts controller:", err);
    res.status(500).json({ error: "Database error" });
  }
};

// Controller to create a new product in the database
const createNewProduct = async (req, res) => {
  const { name, description, price, quantity, categoryID } = req.body;
  const imageFile = req.file;

  if (
    !name ||
    !description ||
    !price ||
    !quantity ||
    !categoryID ||
    !imageFile
  ) {
    return res.status(400).json({ message: "All fields are required" });
  }

  try {
    // Upload image to Cloudinary
    const uploadResult = await cloudinary.uploader.upload(imageFile.path, {
      folder: "products",
    });

    // Get the image URL to store in the database
    const imagePath = uploadResult.secure_url;

    // Delete the image file from the temp folder after Cloudinary upload
    fs.unlinkSync(imageFile.path);

    const productData = {
      name,
      description,
      price,
      quantity,
      categoryID,
      imagePath,
    };

    await createProduct(productData);
    res.status(201).json({ message: "Product created successfully" });
  } catch (err) {
    console.error("Error creating product:", err);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

// Controller to get a product details by its ID
const getProductDetails = async (req, res) => {
  try {
    const { id } = req.params;
    const product = await getProductById(id);

    if (!product) {
      return res.status(404).json({ message: "Product not found" });
    }

    res.status(200).json(product);
  } catch (err) {
    console.error("Error fetching product by ID:", err);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

module.exports = {
  getAllProducts,
  createNewProduct,
  getProductDetails,
};
