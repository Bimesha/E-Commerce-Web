const express = require('express');
const router = express.Router();
const reviewController = require('../controllers/review-controller');
const authMiddleware = require('../middleware/auth-middleware');

// Route for adding a review (requires user to be logged in)
router.post('/add', authMiddleware, reviewController.addReview);

// Route for fetching all reviews (accessible by everyone)
router.get('/', reviewController.getAllReviews);

module.exports = router;
