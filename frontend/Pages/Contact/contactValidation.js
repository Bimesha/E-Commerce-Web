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

    // Form submit event listener
    form.addEventListener('submit', function (event) {
      // Reset validation flags
      let isUsernameValid = usernameRegex.test(emailInput.value); 
      let startsWithNum = startsWithNumber(emailInput.value);
      let containsInvalidEmail = containsInvalidEmailPart(emailInput.value);
      let isMessageValid = messageInput.value.trim() !== "";

      // Check if the username starts with a number
      if (startsWithNum) {
        startWithNumberError.style.display = 'block';
        emailInput.classList.add('is-invalid');
        event.preventDefault();
      } else if (containsInvalidEmail || !isUsernameValid) {
        emailError.style.display = 'block';
        emailInput.classList.add('is-invalid');
        event.preventDefault(); 
      } else {
        emailInput.classList.remove('is-invalid');
        emailInput.classList.add('is-valid');
      }

      // Validate message
      if (!isMessageValid) {
        messageInput.classList.add('is-invalid');
        event.preventDefault();
      } else {
        messageInput.classList.add('is-valid');
      }
    });

    // Real-time validation for email and message fields
    emailInput.addEventListener('input', function () {
    let startsWithNum = startsWithNumber(emailInput.value);
    let containsInvalidEmail = containsInvalidEmailPart(emailInput.value);

    if (startsWithNum) {
      startWithNumberError.style.display = 'block';
      emailError.style.display = 'none';
      emailInput.classList.add('is-invalid');
      emailInput.classList.remove('is-valid');
    } else if (containsInvalidEmail || !usernameRegex.test(emailInput.value)) {
      emailError.style.display = 'block';
      startWithNumberError.style.display = 'none';
      emailInput.classList.add('is-invalid');
      emailInput.classList.remove('is-valid');
    } else {
      emailError.style.display = 'none';
      startWithNumberError.style.display = 'none';
      emailInput.classList.add('is-valid');
      emailInput.classList.remove('is-invalid');
    }
  });

    messageInput.addEventListener('input', function () {
      if (messageInput.value.trim()) {
        messageInput.classList.remove('is-invalid');
        messageInput.classList.add('is-valid');
      } else {
        messageInput.classList.remove('is-valid');
        messageInput.classList.add('is-invalid');
      }
    });
  })();