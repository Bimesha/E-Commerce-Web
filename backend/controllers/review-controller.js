//handle adding reviews
const Review = require('../models/review-model');

exports.addReview = (req, res) => {
    const {UserID,Comment} = req.body;

    if (!UserID || !Comment) {
        return res.status(400).json({ error: 'User ID and comment are required' });
    }
}