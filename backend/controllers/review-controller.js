const db = require("../config/db");
const Review = require("../models/review-model");
const nodemailer = require("nodemailer");

//Controller to add review
const addReview = async (req, res) => {
  const { comment } = req.body;
  const userId = req.user.userId;

  if (!comment) {
    return res.status(400).json({ message: "Comment is required" });
  }

  try {
    // Add review to the database
    const result = await Review.create(userId, comment);

    // Send success response with the insertId
    return res.status(201).json({
      message: "Review added successfully",
      reviewId: result.insertId,
    });
  } catch (err) {
    console.error("Error adding review:", err);
    return res
      .status(500)
      .json({ message: "Failed to add review", error: err });
  }
};

// Controller to get all reviews
const getAllReviews = async (req, res) => {
  try {
    const reviews = await Review.findAll();
    res.status(200).json(reviews);
  } catch (err) {
    console.error("Error fetching reviews:", err);
    res.status(500).json({ message: "Failed to fetch reviews" });
  }
};

// Controller to delete a review
const deleteReview = async (req, res) => {
  const { reviewId } = req.params;

  try {
    const result = await Review.deleteById(reviewId);
    if (result.affectedRows === 0) {
      return res.status(404).json({ error: "Review not found" });
    }
    res.status(200).json({ message: "Review deleted successfully" });
  } catch (error) {
    res.status(500).json({ error: "Error deleting the review" });
  }
};

// Configure email transporter
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

// Function to send reply email
const sendReplyEmail = async (req, res) => {
  const { reviewId } = req.params;
  const { replyMessage } = req.body;

  try {
    // Fetch the user's email based on ReviewID and UserID
    const reviewResult = await Review.getUserEmailByReviewId(reviewId);

    if (reviewResult.length === 0) {
      return res.status(404).json({ error: "Review not found" });
    }

    const userEmail = reviewResult[0].Email;

    // Send the reply email to the user
    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: userEmail,
      subject: "Reply to Your Review of Our Online Furniture Store",
      text: replyMessage,
    };

    transporter.sendMail(mailOptions, (error) => {
      if (error) {
        return res.status(500).json({ error: "Failed to send email" });
      } else {
        return res.status(200).json({ message: "Reply sent successfully" });
      }
    });
  } catch (error) {
    console.error("Error:", error);
    res
      .status(500)
      .json({ error: "An error occurred while sending the reply" });
  }
};

module.exports = {
  addReview,
  getAllReviews,
  deleteReview,
  sendReplyEmail,
};
