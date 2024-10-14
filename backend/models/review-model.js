const db = require('../config/db');

// review model 
const review = {
    addReview: (UserID,Comment, callback) => {
        const query = 'INSERT INTO review (UserID, Comment) VALUES (?, ?)';
        db.query(query, [UserID,Comment], (err,result)=> {
            if (err) return callback(err);
            callback(null, result);
        })
    }
}