const db = require("../config/db");

const Review = {
  // model to create review
  create: async (userId, comment) => {
    const query = "INSERT INTO review (UserID, Comment) VALUES (?, ?)";
    const [result] = await db.query(query, [userId, comment]);
    return result; // Return the result which contains the insertId
  },

  //model to get all reviews
  findAll: async () => {
    const query =
      "SELECT r.ReviewID, r.Comment, u.FirstName, u.LastName FROM review r JOIN user u ON r.UserID = u.UserID";
    const [reviews] = await db.query(query);
    return reviews;
  },

  // model to delete a review by ReviewID
  deleteById: async (reviewId) => {
    const query = "DELETE FROM review WHERE ReviewID = ?";
    const [result] = await db.query(query, [reviewId]);
    return result;
  },

  // model to fetch user email based on ReviewID and UserID
  getUserEmailByReviewId: async (reviewId) => {
    const query =
      "SELECT u.Email FROM review r JOIN user u ON r.UserID = u.UserID WHERE r.ReviewID = ?";
    const [result] = await db.query(query, [reviewId]);
    return result;
  },
};

module.exports = Review;
