// routes/review-routes.js
const express = require('express');
const router = express.Router();
const reviewController = require('../controllers/review-controller');
const { authenticateUser } = require('../middleware/auth-middleware');

// Route to add a review
router.post('/add-review', authenticateUser, reviewController.addReview);

router.get('/add-review', (req, res) => {
    res.send("Review route is working");
});

// Route to fetch all reviews
router.get('/get-reviews', reviewController.getAllReviews);



module.exports = router;
