const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const userRoutes = require("./routes/userRoutes");
const errorHandler = require("./middleware/errorHandler");


dotenv.config();
const app = express();

// Enable CORS for all routes
app.use(cors()); 

app.use(express.json());

// Register routes
app.use("/api/users", userRoutes);

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