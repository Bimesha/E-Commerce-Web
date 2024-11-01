const express = require("express");
const router = express.Router();
const {
  addReview,
  getAllReviews,
  deleteReview,
} = require("../controllers/review-controller");
const { authenticateUser } = require("../middleware/auth-middleware");

// route to add a review
router.post("/add-review", authenticateUser, addReview);

// route to fetch all reviews
router.get("/get-reviews", getAllReviews);

// route to delete a review
router.delete("/:reviewId", deleteReview);

module.exports = router;
