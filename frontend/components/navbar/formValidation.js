















/* // Function to initialize form validation
function regFormValidation() {
    const form = document.getElementById('registrationForm');

    form.addEventListener('submit', function (event) {
      // Prevent form submission if not valid
      if (!form.checkValidity()) {
        event.preventDefault();
        event.stopPropagation();
      }

      // Custom validation for password matching
      const password = document.getElementById('password');
      const confirmPassword = document.getElementById('confirmPassword');
      
      // Check if passwords match
      if (password.value !== confirmPassword.value) {
        confirmPassword.setCustomValidity("Passwords do not match");
        confirmPassword.classList.add('is-invalid');
      } else {
        confirmPassword.setCustomValidity('');
        confirmPassword.classList.remove('is-invalid');
      }

      // Add Bootstrap's validation styles
      form.classList.add('was-validated');

      // Prevent submission if form is invalid
      if (!form.checkValidity()) {
        event.preventDefault();
        event.stopPropagation();
      }
    }, false);
  }
*/