document.addEventListener('DOMContentLoaded', function () {
    // Function to validate single fields
    function validateField(field) {
      if (!field.checkValidity()) {
        field.classList.add('is-invalid');
        field.classList.remove('is-valid');
      } else {
        field.classList.remove('is-invalid');
        field.classList.add('is-valid');
      }
    }
  
    // Real-time validation for each input field
    const form = document.getElementById('registrationForm');
    
    if (form) {
      const fields = form.querySelectorAll('input');
  
      // loop for Validate each field on input
      fields.forEach(function (field) {
        field.addEventListener('input', function () {
          validateField(field);
        });
      });
  
      // Password matching validation in real-time
      const password = document.getElementById('password');
      const confirmPassword = document.getElementById('confirmPassword');
  
      confirmPassword.addEventListener('input', function () {
        if (password.value !== confirmPassword.value) {
          confirmPassword.setCustomValidity("Passwords do not match");
          confirmPassword.classList.add('is-invalid');
          confirmPassword.classList.remove('is-valid');
        } else {
          confirmPassword.setCustomValidity('');
          confirmPassword.classList.remove('is-invalid');
          confirmPassword.classList.add('is-valid');
        }
      });
  
      // Validate the entire form on submission
      form.addEventListener('submit', function (event) {
        fields.forEach(function (field) {
          validateField(field);
        });
  
        if (!form.checkValidity()) {
          event.preventDefault();  // Prevent form submission if validation fails
          event.stopPropagation();
        }
      });
    }
  });
