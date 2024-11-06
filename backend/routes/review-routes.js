const express = require("express");
const router = express.Router();
const {
  addReview,
  getAllReviews,
  deleteReview,
  deleteReviewForUser,
  sendReplyEmail,
} = require("../controllers/review-controller");
const { authenticateUser } = require("../middleware/auth-middleware");

// route to add a review
router.post("/add-review", authenticateUser, addReview);

// route to fetch all reviews
router.get("/get-reviews", getAllReviews);

// route to delete a review
router.delete("/:reviewId", deleteReview);

// route for user to delete their own review
router.delete("/user/:reviewId", authenticateUser, deleteReviewForUser);

// route to send a reply email
router.post("/:reviewId", sendReplyEmail);

module.exports = router;
