(function () {
    'use strict';

    // Fetch the form and its fields
    const form = document.getElementById('contactForm');
    const emailInput = document.getElementById('contactEmail');
    const emailError = document.getElementById('emailError');
    const startWithNumberError = document.getElementById('startWithNumberError');
    const messageInput = document.getElementById('contactMessage');

    // Regex for validating that the username ends with "@gmail.com" and starts with a letter
    const usernameRegex = /^[a-zA-Z][a-zA-Z0-9_]*$/;

    // Email validation function
    function validateGmail(email) {
      return usernameRegex.test(email);
    }

    // Function to check if the username starts with a number
    function startsWithNumber(username) {
      return /^[0-9]/.test(username);
    }

    // Function to check if username contains "gmail" or any other invalid portion
    function containsInvalidEmailPart(username) {
      return /gmail|\.|@/.test(username);
    }

    // Reset validation state on new input
    function resetValidationOnInput(input) {
      input.addEventListener('input', function () {
        input.classList.remove('is-invalid', 'is-valid');
        emailError.style.display = 'none';
        startWithNumberError.style.display = 'none';
      });
    }

    resetValidationOnInput(emailInput);
    resetValidationOnInput(messageInput);

    // Function to validate the email field
    function validateEmail() {
        let startsWithNum = startsWithNumber(emailInput.value);
        let containsInvalidEmail = containsInvalidEmailPart(emailInput.value);

        if (startsWithNum) {
            startWithNumberError.style.display = 'block';
            emailError.style.display = 'none';
            emailInput.classList.add('is-invalid');
            emailInput.style.borderColor = 'rgba(164, 4, 4, 0.8)';
            emailInput.classList.remove('is-valid');
            return false;
        } else if (containsInvalidEmail || !validateGmail(emailInput.value)) {
            emailError.style.display = 'block';
            startWithNumberError.style.display = 'none';
            emailInput.classList.add('is-invalid');
            emailInput.style.borderColor = 'rgba(164, 4, 4, 0.8)';
            emailInput.classList.remove('is-valid');
            return false;
        } else {
            emailError.style.display = 'none';
            startWithNumberError.style.display = 'none';
            emailInput.classList.add('is-valid');
            emailInput.style.borderColor = 'rgba(25, 135, 84, 1)';
            emailInput.classList.remove('is-invalid');
            return true;
        }
    }

    // Function to validate the message field
    function validateMessage() {
        if (messageInput.value.trim()) {
            messageInput.classList.add('is-valid');
            messageInput.classList.remove('is-invalid');
            return true;
        } else {
            messageInput.classList.add('is-invalid');
            messageInput.classList.remove('is-valid');
            return false;
        }
    }

    // Form submit event listener
    form.addEventListener('submit', function (event) {
        let isEmailValid = validateEmail();
        let isMessageValid = validateMessage();

        // Prevent form submission if any field is invalid
        if (!isEmailValid || !isMessageValid) {
        event.preventDefault();
        }
    });

    // Real-time validation for email input
    emailInput.addEventListener('input', validateEmail);

    // Real-time validation for the message field
    messageInput.addEventListener('input', function () {
        validateMessage();
        validateEmail(); 
    });
  })();