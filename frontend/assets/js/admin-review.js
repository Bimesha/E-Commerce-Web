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
                        <button class="btn btn-primary" onclick="openReplyModal('${review.FirstName}', '${review.LastName}', '${review.Comment}')">Send Reply</button>
                      </div>
                      <div class="delete-review">
                        <button class="btn btn-primary"><i class="fa-regular fa-trash-can"></i></button>
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

function openReplyModal(firstName, lastName, comment) {
  document.getElementById(
    "reviewerName"
  ).textContent = `${firstName} ${lastName}`;
  document.getElementById("reviewComment").textContent = `" ${comment} "`;
  document.getElementById("replyText").value = "";
  new bootstrap.Modal(document.getElementById("replyModal")).show();
}

function submitReply() {
  const replyText = document.getElementById("replyText").value;
  if (replyText.trim() === "") {
    alert("Please enter a reply message.");
    return;
  }

  // Close the modal after sending the reply
  bootstrap.Modal.getInstance(document.getElementById("replyModal")).hide();
}
