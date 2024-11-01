// Fetch reviews from the database and display them on the page
document.addEventListener("DOMContentLoaded", function () {
  fetch("http://localhost:5500/api/reviews/get-reviews")
    .then((response) => {
      if (!response.ok) {
        throw new Error("Failed to fetch reviews");
      }
      return response.json();
    })
    .then((reviews) => {
      const reviewsContainer = document.getElementById("reviews-container");
      reviewsContainer.innerHTML = "";

      reviews.forEach((review) => {
        const reviewHTML = `
              <div class="col-lg-12 col-md-12 col-sm-12" style="border-bottom: 1px solid #C0C0C0; padding-bottom: 10px;">
                <div class="card">
                  <div class="card-body">
                    <div class="card-header">
                      <div class="card-avatar">
                        <img src="./assets/images/home-img/man-1.jpg" alt="avatar" /> <!-- Default avatar -->
                      </div>
                      <div class="card-name">
                        <h5 class="card-title">${review.FirstName} ${review.LastName}</h5> <!-- Full name -->
                      </div>
                    </div>
                    <div class="card-content">
                      <p class="card-text">
                        " ${review.Comment} "
                      </p>
                    </div>
                    <div class="review-footer">
                      <div class="add-reply">
                        <button class="btn btn-primary" onclick="openReplyModal('${review.FirstName}', '${review.LastName}', '${review.Comment}', ${review.ReviewID})")">Send Reply</button>
                      </div>
                      <div class="delete-review">
                        <button class="btn btn-primary" onclick="deleteReview(${review.ReviewID})"><i class="fa-regular fa-trash-can"></i></button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
          `;
        reviewsContainer.innerHTML += reviewHTML;
      });
    })
    .catch((error) => {
      console.error("Error:", error);
      const reviewsContainer = document.getElementById("reviews-container");
      reviewsContainer.innerHTML = "<p>Unable to load reviews.</p>";
    });
});

// Delete a review
async function deleteReview(reviewId) {
  try {
    const response = await fetch(
      `http://localhost:5500/api/reviews/${reviewId}`,
      {
        method: "DELETE",
      }
    );

    if (response.ok) {
      alert("Review deleted successfully");
      location.reload();
    } else {
      alert("Failed to delete the review");
    }
  } catch (error) {
    console.error("Error:", error);
    alert("An error occurred while deleting the review.");
  }
}

// Function to open the reply modal and set the current ReviewID
let currentReviewID;
function openReplyModal(firstName, lastName, comment, ReviewID) {
  document.getElementById(
    "reviewerName"
  ).textContent = `${firstName} ${lastName}`;
  document.getElementById("reviewComment").textContent = `" ${comment} "`;
  document.getElementById("replyText").value = "";

  // Set the global variable to the current ReviewID
  currentReviewID = ReviewID;

  new bootstrap.Modal(document.getElementById("replyModal")).show();
}

async function submitReply() {
  const replyMessage = document.getElementById("replyText").value;

  // Real-time validation for the reply textarea
  const replyText = document.getElementById("replyText");
  if (replyText.value.trim() === "") {
    replyText.classList.add("is-invalid");
    return false;
  }

  try {
    const response = await fetch(
      `http://localhost:5500/api/reviews/${currentReviewID}`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ replyMessage }),
      }
    );

    if (response.ok) {
      alert("Reply sent successfully");
      document.getElementById("replyText").value = "";
      const modalElement = document.getElementById("replyModal");
      const modal = bootstrap.Modal.getInstance(modalElement);
      modal.hide();
    } else {
      alert("Failed to send the reply");
    }
  } catch (error) {
    console.error("Error:", error);
    alert("An error occurred while sending the reply.");
  }
}

// Real-time validation for the reply textarea
document.getElementById("replyText").addEventListener("input", function () {
  if (this.value.trim() === "") {
    this.classList.add("is-invalid");
    this.classList.remove("is-valid");
  } else {
    this.classList.add("is-valid");
    this.classList.remove("is-invalid");
  }
});
