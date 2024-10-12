const db = require("../config/db");

// Function to create a user
const createUser = async ({ firstname, lastname, email, password }) => {
  const query = "INSERT INTO user (FirstName, LastName, Email, Password) VALUES (?, ?, ?, ?)";
  await db.execute(query, [firstname, lastname, email, password]);
};

// Function to find a user by email
const findByEmail = async (email) => {
  const query = "SELECT * FROM user WHERE Email = ?";
  const [rows] = await db.execute(query, [email]);
  return rows[0];
};

module.exports = {
  createUser,
  findByEmail,    
};
