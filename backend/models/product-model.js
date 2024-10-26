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

module.exports = {
  getProducts,
};
