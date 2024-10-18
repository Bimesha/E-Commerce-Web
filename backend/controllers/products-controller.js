const db = require('../config/db'); 

// Function to get all products from the database for the admin page
const getAllProducts = async (req, res) => {
    try {
      const [rows] = await db.query(`
        SELECT p.Name as name, p.Price as price, p.Quantity as quantity, c.CategoryName as category 
        FROM product p
        JOIN category c ON p.CategoryID = c.CategoryID
      `);
      
      res.json(rows);
    } catch (err) {
      console.error('Error fetching products:', err);
      res.status(500).json({ error: 'Database error' });
    }
};

module.exports = {
    getAllProducts
};
