document.addEventListener("DOMContentLoaded", function () {
  const creditCardButton = document.getElementById("creditCard");
  const cashOnDeliveryButton = document.getElementById("cashOnDelivery");
  const orderSummaryLeft = document.getElementById("orderSummaryLeft");
  const orderSummaryRight = document.getElementById("orderSummaryRight");
  const cardTitle = document.getElementById("cardTitle");
  const cardForm = document.getElementById("creditCardForm");

  // Initial state
  creditCardButton.classList.add("active");
  cashOnDeliveryButton.classList.add("inactive");

  // Credit card button
  creditCardButton.addEventListener("click", () => {
    // Show credit card form and order summary in the left side
    cardTitle.style.display = "block";
    cardForm.style.display = "block";
    orderSummaryLeft.style.display = "block";
    orderSummaryRight.style.display = "none";

    // Update button styles
    creditCardButton.classList.add("active");
    creditCardButton.classList.remove("inactive");
    cashOnDeliveryButton.classList.add("inactive");
    cashOnDeliveryButton.classList.remove("active");
  });

  // Cash on delivery button
  cashOnDeliveryButton.addEventListener("click", () => {
    // Show order summary on the right side and hide it from the left side
    cardTitle.style.display = "none";
    cardForm.style.display = "none";
    orderSummaryLeft.style.display = "none";
    orderSummaryRight.style.display = "block";

    // Update button styles
    cashOnDeliveryButton.classList.add("active");
    cashOnDeliveryButton.classList.remove("inactive");
    creditCardButton.classList.add("inactive");
    creditCardButton.classList.remove("active");
  });
});
