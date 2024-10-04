document.addEventListener('DOMContentLoaded', function () {
  
  // Function to validate individual fields
  function validateField(field) {
    if (!field.checkValidity()) {
      field.classList.add('is-invalid');
      field.classList.remove('is-valid');
    } else {
      field.classList.remove('is-invalid');
      field.classList.add('is-valid');
    }
  }

  // Password matching validation in real-time (used in registration form)
  function validatePasswordMatch(passwordField, confirmPasswordField) {
    if (passwordField.value !== confirmPasswordField.value) {
      confirmPasswordField.setCustomValidity("Passwords do not match");
      confirmPasswordField.classList.add('is-invalid');
      confirmPasswordField.classList.remove('is-valid');
    } else {
      confirmPasswordField.setCustomValidity('');
      confirmPasswordField.classList.remove('is-invalid');
      confirmPasswordField.classList.add('is-valid');
    }
  }

  // REGISTRATION FORM VALIDATIONS

  const registrationForm = document.getElementById('registrationForm');
  
  if (registrationForm) {
    const registrationFields = registrationForm.querySelectorAll('input');

    // Real-time validation for each field in the registration form
    registrationFields.forEach(function (field) {
      field.addEventListener('input', function () {
        validateField(field);
      });
    });

    // Password matching validation in real-time
    const password = document.getElementById('password');
    const confirmPassword = document.getElementById('confirmPassword');

    if (confirmPassword) {
      confirmPassword.addEventListener('input', function () {
        validatePasswordMatch(password, confirmPassword);
      });
    }

    // Validate the registration form on submission
    registrationForm.addEventListener('submit', function (event) {
      registrationFields.forEach(function (field) {
        validateField(field);
      });

      if (!registrationForm.checkValidity()) {
        event.preventDefault();  // Prevent form submission if validation fails
        event.stopPropagation();
      } else {
        // Prevent multiple submissions
        document.querySelector('.btn-submit').disabled = true;
      }
    });
  }

  // LOGIN FORM VALIDATIONS

  const loginForm = document.getElementById('loginForm');
  
  if (loginForm) {
    const loginFields = loginForm.querySelectorAll('input');

    // Real-time validation for each field in the login form
    loginFields.forEach(function (field) {
      field.addEventListener('input', function () {
        validateField(field);
      });
    });

    // Validate the login form on submission
    loginForm.addEventListener('submit', function (event) {
      loginFields.forEach(function (field) {
        validateField(field);
      });

      if (!loginForm.checkValidity()) {
        event.preventDefault();  // Prevent form submission if validation fails
        event.stopPropagation();
      } else {
        // Prevent multiple submissions
        document.querySelector('.btn-submit').disabled = true;
      }
    });
  }
});
