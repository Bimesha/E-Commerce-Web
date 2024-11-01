const db = require("../config/db");

const Review = {
  // Function to create a review
  create: async (userId, comment) => {
    const query = "INSERT INTO review (UserID, Comment) VALUES (?, ?)";
    // Destructure the first element of the result array which contains the actual result
    const [result] = await db.query(query, [userId, comment]);
    return result; // Return the result which contains the insertId
  },

  // Function to get all reviews
  findAll: async () => {
    const query =
      "SELECT r.ReviewID, r.Comment, u.FirstName, u.LastName FROM review r JOIN user u ON r.UserID = u.UserID";
    const [reviews] = await db.query(query);
    return reviews;
  },

  // Model to delete a review by ReviewID
  deleteById: async (reviewId) => {
    const query = "DELETE FROM review WHERE ReviewID = ?";
    const [result] = await db.query(query, [reviewId]);
    return result;
  },
};

module.exports = Review;
