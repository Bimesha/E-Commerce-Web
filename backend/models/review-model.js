const db = require('../config/db');

// review model 
const Review = {
    addReview: (UserID,Comment, callback) => {
        const query = 'INSERT INTO review (UserID, Comment) VALUES (?, ?)';
        db.query(query, [UserID,Comment], (err,result)=> {
            if (err) return callback(err);
            callback(null, result);
        });
    },

    getReviewsByUserId: (UserID, callback) => {
        const query = 'INSERT INTO review WHERE UserID = ?';
        db.query(query, [UserID], (err,result)=> {
            if (err) return callback(err);
            callback(null, result);
        });
    }
}

module.exports = Review;