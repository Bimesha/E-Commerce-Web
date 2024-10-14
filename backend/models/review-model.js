const db = require('../config/db');

// review model 
const Review = {
    addReview: (userId,comment, callback) => {
        const query = 'INSERT INTO review (UserID, Comment) VALUES (?, ?)';
        db.query(query, [userId,comment], (err,result)=> {
            if (err) return callback(err);
            callback(null, result);
        });
    },

    getAllReviews: (callback) => {
        const query = 'SELECT * FROM review';
        db.query(query, (err,results)=> {
            if (err) return callback(err);
            callback(null, results);
        });
    },

    getReviewsByUserId: (userId, callback) => {
        const query = 'SELECT * FROM review WHERE UserID = ?';
        db.query(query, [userId], (err, results) => {
          if (err) return callback(err);
          callback(null, results);
        });
    }
}

module.exports = Review;