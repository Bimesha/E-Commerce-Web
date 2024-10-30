const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const userRoutes = require("./routes/user-routes");
const contactRoutes = require("./routes/contact-routes");
const productRoutes = require("./routes/product-routes");
const reviewRoutes = require("./routes/review-routes");
const errorHandler = require("./middleware/error-handler");
const path = require("path");

dotenv.config();
const app = express();

// Enable CORS for all routes
app.use(
  cors({
    origin: "http://127.0.0.1:5504", // Allow this frontend origin
    credentials: true, // Allow credentials (cookies)
  })
);

app.use(cookieParser());

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Serve static files (for image uploads)
app.use("/uploads", express.static(path.join(__dirname, "uploads")));

app.get("/", (req, res) => {
  res.send("Welcome to the e-commerce backend API!");
});

// Register routes
app.use("/api/users", userRoutes);
// Use the contact routes
app.use("/api", contactRoutes);

app.use("/api/reviews", reviewRoutes); // Use the review routes

// use products routes
app.use("/api/products", productRoutes);

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
