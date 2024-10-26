const db = require('../config/db'); 
const { getProducts } = require('../models/product-model');

// Controller to fetch all products to the admin page
const getAllProducts = async (req, res) => {
  try {
    const products = await getProducts();
    res.json(products);
  } catch (err) {
    console.error('Error in getAllProducts controller:', err);
    res.status(500).json({ error: 'Database error' });
  }
};

module.exports = {
    getAllProducts
};
