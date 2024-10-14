//handle adding reviews
const Review = require('../models/review-model');

//add a new review
exports.addReview = (req, res) => {
    const {userId,comment} = req.body;

    if (!comment || comment.trim() === '') {
        return res.status(400).json({ error: 'Review comment cannot be empty.' });
    }

    Review.addReview(userId, comment, (err, result) => {
        if (err) {
          return res.status(500).json({ error: 'Failed to add review' });
        }
        res.status(201).json({ message: 'Review added successfully' });
    });    
}

//get all reviews
exports.getAllReviews = (req, res) => {
    Review.getAll((err, results) => {
        if (err) {
          return res.status(500).json({ error: 'Failed to fetch reviews.' });
        }
        res.json(results);
    });
} 