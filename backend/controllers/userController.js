const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const User = require("../models/userModel");

const createUser = async (req, res) => {
  const { firstname, lastname, email, password } = req.body;
  // confirmPassword is omitted


  try {
    // Check if the user already exists
    const existingUser = await User.findByEmail(email);
    if (existingUser) {
      return res.status(400).json({error: "Email already exists. Please use a different email."});
    }

    // Encrypt the password
    const hashedPassword = await bcrypt.hash(password, 10);
  
    // Create the user
  await User.createUser({ firstname, lastname, email, password: hashedPassword });

  res.json("User created successfully!");
  } catch (err) {
      console.log("Error creating user:", err);
      res.status(500).send("Error creating user.");
  }
};

const loginUser = async (req, res) => {
  const { email, password } = req.body;

  try {
    // Check if the user exists
    const user = await User.findByEmail(email);
    if (!user) {
      return res.status(401).json({ message: 'Username or password incorrect' });
  }

  // Validate the password
  const isMatch = await bcrypt.compare(password, user.Password);
  if (!isMatch) {
    return res.status(401).json({ message: 'Username or password incorrect' });
  }

  // Generate a JWT token with role and user info
  const token = jwt.sign(
    { userId: user.UserID, email: user.Email, role: user.Role },
    process.env.JWT_SECRET,
    { expiresIn: "1h" }
  );

   // Send token back to client
  res.status(200).json({ 
    message: "Login successful",
    token: token,
    role: user.Role,  // Include role in response
    user: { email: user.Email, name: user.FirstName } 
  });
} catch (err) {
  console.error("Error logging in:", err);
  res.status(500).json({ message: 'Internal server error' });
}

}

module.exports = {
  createUser,
  loginUser,
};
