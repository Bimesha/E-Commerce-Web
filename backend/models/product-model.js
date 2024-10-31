const db = require("../config/db");

// Fetch all products function from the database for admin page
const getProducts = async () => {
  const query = `
        SELECT  p.ProductID as productId, p.Name AS name, p.Price AS price, p.Quantity AS quantity, p.ImagePath AS image,
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

// model to create product
const createProduct = async (productData) => {
  const { name, description, price, quantity, categoryID, imagePath } =
    productData;
  const query = `
        INSERT INTO product (Name, Description, Price, Quantity, CategoryID, ImagePath)
        VALUES (?, ?, ?, ?, ?, ?)
    `;
  try {
    const [result] = await db.query(query, [
      name,
      description,
      price,
      quantity,
      categoryID,
      imagePath,
    ]);
    return result.insertId;
  } catch (error) {
    console.error("Error creating product:", error);
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

// model to update a product by ID
const updateProductById = async (productId, productData) => {
  const { name, description, price, quantity, categoryID, imagePath } =
    productData;

  const query = `
    UPDATE product
    SET Name = ?, Description = ?, Price = ?, Quantity = ?, CategoryID = ?, ImagePath = ?
    WHERE ProductID = ?
  `;

  const queryParams = [
    name,
    description,
    price,
    quantity,
    categoryID,
    imagePath,
    productId,
  ];

  try {
    const [result] = await db.query(query, queryParams);
    return result;
  } catch (error) {
    console.error("Error updating product:", error);
    throw error;
  }
};

module.exports = {
  getProducts,
  createProduct,
  getProductById,
  updateProductById,
};
