document.addEventListener("DOMContentLoaded", function () {
  const creditCardButton = document.getElementById("creditCard");
  const cashOnDeliveryButton = document.getElementById("cashOnDelivery");
  const orderSummaryLeft = document.getElementById("orderSummaryLeft");
  const orderSummaryRight = document.getElementById("orderSummaryRight");
  const cardTitle = document.getElementById("cardTitle");
  const cardForm = document.getElementById("creditCardForm");
  const continueButton = document.getElementById("continue");

  // Initial state
  creditCardButton.classList.add("active");
  cashOnDeliveryButton.classList.add("inactive");
  continueButton.style.display = "none";

  // Credit card button
  creditCardButton.addEventListener("click", () => {
    // Show credit card form and order summary in the left side
    cardTitle.style.display = "block";
    cardForm.style.display = "block";
    orderSummaryLeft.style.display = "block";
    orderSummaryRight.style.display = "none";
    continueButton.style.display = "none";
    continueButton.style.display = "none";

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
    continueButton.style.display = "block";

    // Update button styles
    cashOnDeliveryButton.classList.add("active");
    cashOnDeliveryButton.classList.remove("inactive");
    creditCardButton.classList.add("inactive");
    creditCardButton.classList.remove("active");
  });
});


// Bootstrap for credit card form validation
(function () {
  "use strict";

  // Fetch the form and its fields
  const form = document.getElementById("creditCardForm");
  const cardNumberInput = document.getElementById("cardNumber");
  const cardNameInput = document.getElementById("cardName");
  const expiryMonthInput = document.getElementById("expiryMonth");
  const expiryYearInput = document.getElementById("expiryYear");
  const cvvInput = document.getElementById("cvv");

  // Validation functions for each field
  function validateCardNumber() {
    if (/^\d{16}$/.test(cardNumberInput.value)) {
      cardNumberInput.classList.add("is-valid");
      cardNumberInput.classList.remove("is-invalid");
      return true;
    } else {
      cardNumberInput.classList.add("is-invalid");
      cardNumberInput.classList.remove("is-valid");
      return false;
    }
  }

  function validateCardName() {
    if (
      /^[A-Za-z\s]+$/.test(cardNameInput.value) &&
      cardNameInput.value.trim().length > 0
    ) {
      cardNameInput.classList.add("is-valid");
      cardNameInput.classList.remove("is-invalid");
      return true;
    } else {
      cardNameInput.classList.add("is-invalid");
      cardNameInput.classList.remove("is-valid");
      return false;
    }
  }

  function validateExpiryMonth() {
    const month = parseInt(expiryMonthInput.value, 10);
    if (/^\d{2}$/.test(expiryMonthInput.value) && month >= 1 && month <= 12) {
      expiryMonthInput.classList.add("is-valid");
      expiryMonthInput.classList.remove("is-invalid");
      return true;
    } else {
      expiryMonthInput.classList.add("is-invalid");
      expiryMonthInput.classList.remove("is-valid");
      return false;
    }
  }

  function validateExpiryYear() {
    if (/^\d{4}$/.test(expiryYearInput.value)) {
      expiryYearInput.classList.add("is-valid");
      expiryYearInput.classList.remove("is-invalid");
      return true;
    } else {
      expiryYearInput.classList.add("is-invalid");
      expiryYearInput.classList.remove("is-valid");
      return false;
    }
  }

  function validateCVV() {
    if (/^\d{3}$/.test(cvvInput.value)) {
      cvvInput.classList.add("is-valid");
      cvvInput.classList.remove("is-invalid");
      return true;
    } else {
      cvvInput.classList.add("is-invalid");
      cvvInput.classList.remove("is-valid");
      return false;
    }
  }

  // Reset validation state on new input
  function resetValidationOnInput(input) {
    input.addEventListener("input", function () {
      input.classList.remove("is-invalid", "is-valid");
    });
  }

  // Attach reset listeners
  resetValidationOnInput(cardNumberInput);
  resetValidationOnInput(cardNameInput);
  resetValidationOnInput(expiryMonthInput);
  resetValidationOnInput(expiryYearInput);
  resetValidationOnInput(cvvInput);

  // Form submit event listener
  form.addEventListener("submit", function (event) {
    const isCardNumberValid = validateCardNumber();
    const isCardNameValid = validateCardName();
    const isExpiryMonthValid = validateExpiryMonth();
    const isExpiryYearValid = validateExpiryYear();
    const isCVVValid = validateCVV();

    // Prevent form submission if any field is invalid
    if (
      !isCardNumberValid ||
      !isCardNameValid ||
      !isExpiryMonthValid ||
      !isExpiryYearValid ||
      !isCVVValid
    ) {
      event.preventDefault();
    }
  });

  // Real-time validation for each field
  cardNumberInput.addEventListener("input", validateCardNumber);
  cardNameInput.addEventListener("input", validateCardName);
  expiryMonthInput.addEventListener("input", validateExpiryMonth);
  expiryYearInput.addEventListener("input", validateExpiryYear);
  cvvInput.addEventListener("input", validateCVV);
})();
