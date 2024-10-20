const Review = require('../models/review-model');

exports.addReview = async (req, res) => {
    const { comment } = req.body;
    const userId = req.user.userId; // Extracted from JWT token

    // Check if the comment is provided
    if (!comment) {
        return res.status(400).json({ message: 'Comment is required' });
    }

    try {
        // Add review to the database
        const result = await Review.create(userId, comment);

        // Send success response with the insertId
        return res.status(201).json({ message: 'Review added successfully', reviewId: result.insertId });
    } catch (err) {
        console.error('Error adding review:', err);
        return res.status(500).json({ message: 'Failed to add review', error: err });
    }
};

// Function to get all reviews
exports.getAllReviews = async (req, res) => {
    try {
        const reviews = await Review.findAll();
        res.status(200).json(reviews);
    } catch (err) {
        console.error('Error fetching reviews:', err);
        res.status(500).json({ message: 'Failed to fetch reviews' });
    }
};



