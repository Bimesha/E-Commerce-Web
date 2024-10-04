const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");

const userRoutes = require("./routes/userRoutes");
const contactRoutes = require('./routes/contactRoutes');
const errorHandler = require("./middleware/errorHandler");


dotenv.config();
const app = express();

// Enable CORS for all routes
app.use(cors());      

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Register routes
app.use("/api/users", userRoutes); 

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
