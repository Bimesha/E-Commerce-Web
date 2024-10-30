const db = require("../config/db");

// Fetch all products function from the database for admin page
const getProducts = async () => {
  const query = `
        SELECT p.Name AS name, p.Price AS price, p.Quantity AS quantity, p.ImagePath AS image,
               c.CategoryName AS category
        FROM product p
        JOIN category c ON p.CategoryID = c.CategoryID
    `;
  try {
    const [rows] = await db.query(query);
    return rows;
  } catch (error) {
    console.error("Error fetching products:", error);
    throw error;
  }
};

// model to get a product details by its ID
const getProductById = async (productId) => {
  const query = `
    SELECT p.ProductID, p.Name, p.Description, p.Price, p.Quantity, p.CategoryID, p.ImagePath,
           c.CategoryName AS category
    FROM product p
    JOIN category c ON p.CategoryID = c.CategoryID
    WHERE p.ProductID = ?
  `;
  try {
    const [rows] = await db.query(query, [productId]);
    return rows[0]; // Return the first matching product or undefined
  } catch (error) {
    console.error("Error fetching product by ID:", error);
    throw error;
  }
};

module.exports = {
  getProducts,
  getProductById,
};
