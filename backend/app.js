const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const userRoutes = require("./routes/user-routes");
const contactRoutes = require('./routes/contact-routes');
const productRoutes = require('./routes/products-routes');
const errorHandler = require("./middleware/error-handler");
const { authenticateUser, authorizeAdmin } = require('./middleware/auth-middleware');
const reviewRoutes = require('./routes/review-routes');

dotenv.config();
const app = express();

// Enable CORS for all routes
app.use(cors()); 

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
  res.send('Welcome to the e-commerce backend API!');
});

app.use("/api/users", userRoutes);// Register routes
app.use('/api', contactRoutes); // Use the contact routes
app.use('/api/reviews', reviewRoutes); // Use the review routes

// Example protected route (Admin Dashboard)
app.get('/api/admin/dashboard', authenticateUser, authorizeAdmin, (req, res) => {
  res.json({ message: 'Welcome to the admin dashboard!' });
});

// Example protected route (Home Page for logged-in users)
app.get('/api/home', authenticateUser, (req, res) => {
  res.json({ message: 'Welcome to your home page!', user: req.user });
});

// Use the contact routes
app.use('/api', contactRoutes);

// Error handler middleware
app.use(errorHandler);


const PORT = process.env.PORT || 5500;
app.listen(PORT, (err) => {
  if (err) {
    console.log(err);
  } else {
    console.log(`Server is running on port ${PORT}`);
  }
});