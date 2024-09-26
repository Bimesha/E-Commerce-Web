document.addEventListener('DOMContentLoaded', function () {
  // Function to validate the registration form
  function regFormValidation() {
      const form = document.getElementById('registrationForm');

      // Check if the form exists in the DOM
      if (form) {
          form.addEventListener('submit', function (event) {
              // Get all form fields
              const fields = form.querySelectorAll('input');

              // Loop through each field and check its validity
              fields.forEach(function (field) {
                  if (!field.checkValidity()) {
                      field.classList.add('is-invalid');
                      
                  } else {
                      field.classList.remove('is-invalid');
                      field.classList.add('is-valid');
                  }
              });

              // Custom validation for password matching
              const password = document.getElementById('password');
              const confirmPassword = document.getElementById('confirmPassword');
              
              if (password.value !== confirmPassword.value) {
                  confirmPassword.setCustomValidity("Passwords do not match");
                  confirmPassword.classList.add('is-invalid');
                  confirmPassword.classList.remove('is-valid');
              } else {
                  confirmPassword.setCustomValidity('');
                  confirmPassword.classList.remove('is-invalid');
                  confirmPassword.classList.add('is-valid');
              }

              // Prevent form submission if any field is invalid
              if (!form.checkValidity()) {
                  event.preventDefault();
                  event.stopPropagation();
              }

              
          }, false);
      }
      
  }

  // Delay validation until the modal form is opened (to ensure form exists)
  const modal = document.getElementById('createAccount');
  modal.addEventListener('shown.bs.modal', function () {
      regFormValidation();  // Call validation when the modal is fully shown
  });
});
