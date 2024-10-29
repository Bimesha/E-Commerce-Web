const db = require("../config/db");

// Function to create a user
const createUser = async ({ firstname, lastname, email, password }) => {
  const query =
    "INSERT INTO user (FirstName, LastName, Email, Password) VALUES (?, ?, ?, ?)";
  await db.execute(query, [firstname, lastname, email, password]);
};

// Function to find a user by email
const findByEmail = async (email) => {
  const query = "SELECT * FROM user WHERE Email = ?";
  const [rows] = await db.execute(query, [email]);
  return rows[0];
};

// Fetch all customer details from the database for admin page
const getCustomers = async () => {
  const query = `
        SELECT u.UserID AS customerId, 
               CONCAT(u.FirstName, ' ', u.LastName) AS name, 
               u.Email AS email, 
               u.Address AS address, 
               u.Phone AS phone
        FROM user u
    `;
  try {
    const [rows] = await db.query(query);
    return rows;
  } catch (error) {
    console.error("Error fetching customers:", error);
    throw error;
  }
};

module.exports = {
  createUser,
  findByEmail,
  getCustomers,
};
