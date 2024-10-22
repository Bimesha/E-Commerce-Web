(function () {
  "use strict";

  // Fetch the form and its fields
  const form = document.getElementById("contactForm");
  const emailInput = document.getElementById("contactEmail");
  const messageInput = document.getElementById("contactMessage");

  // Regex for validating the email field
  const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

  // Email validation function
  function validateEmail(email) {
    return emailRegex.test(email);
  }

  // Reset validation state on new input
  function resetValidationOnInput(input) {
    input.addEventListener("input", function () {
      input.classList.remove("is-invalid", "is-valid");
    });
  }

  resetValidationOnInput(emailInput);
  resetValidationOnInput(messageInput);

  // Function to validate the email field
  function validateEmailFuntion() {
    if (!validateEmail(emailInput.value)) {
      emailInput.classList.add("is-invalid");
      emailInput.classList.remove("is-valid");
      return false;
    } else {
      emailInput.classList.add("is-valid");
      emailInput.classList.remove("is-invalid");
      return true;
    }
  }

  // Function to validate the message field
  function validateMessage() {
    if (messageInput.value.trim()) {
      messageInput.classList.add("is-valid");
      messageInput.classList.remove("is-invalid");
      return true;
    } else {
      messageInput.classList.add("is-invalid");
      messageInput.classList.remove("is-valid");
      return false;
    }
  }

  // Form submit event listener
  form.addEventListener("submit", function (event) {
    let isEmailValid = validateEmailFuntion();
    let isMessageValid = validateMessage();

    // Prevent form submission if any field is invalid
    if (!isEmailValid || !isMessageValid) {
      event.preventDefault();
    }
  });

  // Real-time validation for email input
  emailInput.addEventListener("input", validateEmailFuntion);

  // Real-time validation for the message field
  messageInput.addEventListener("input", function () {
    validateMessage();
    validateEmailFuntion();
  });
})();
