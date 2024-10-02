document.addEventListener('DOMContentLoaded', function () {
    // Function to validate a single field
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
      form.addEventListener('submit', async function (event) {
        // Prevent default form submission
        event.preventDefault();

        let isValid = true;
         
         // Validate each field and check validity
        fields.forEach(function (field) {
          validateField(field);
          if (!field.checkValidity()) {
            isValid = false;
          }
        });
  
        // If the form is valid, proceed with form submission
      if (isValid) {
        const formData = {
          firstname: document.getElementById('firstName').value,
          lastname: document.getElementById('lastName').value,
          email: document.getElementById('email').value,
          password: document.getElementById('password').value,
          confirmPassword: document.getElementById('confirmPassword').value,
        };

        try {
          const response = await fetch('http://localhost:5500/api/users/create-account', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData),
          });

          if (!response.ok) {
            // // If response is not ok, throw an error
            // throw new Error(`HTTP error! Status: ${response.status}`);
            const result = await response.json();

            // Check if the error is due to email already existing
        if (result.error === 'Email already exists') {
          const emailField = document.getElementById('email');
          emailField.classList.add('is-invalid');
          emailField.classList.remove('is-valid');

          // Display the error message below the email field
          let errorElement = document.getElementById('emailError');
          if (!errorElement) {
            errorElement = document.createElement('div');
            errorElement.id = 'emailError';
            errorElement.className = 'invalid-feedback';
            emailField.parentNode.appendChild(errorElement);
          }
          errorElement.textContent = 'Email already exists. Please use a different email.';

          // Redirect to error page
          // window.location.href = 'error.html';
        } else {
          // If some other error occurred
          throw new Error(result.error || 'Unknown error');
        }
        } else {
            const result = await response.json();
            console.log(result);
            // Proceed with success flow (e.g., redirect user, show success message)

            // Redirect to success page when account is created successfully
            // window.location.href = 'successAccount.html';
          }
        } catch (err) {
          console.error('Error submitting form:', err.message);
          alert(err.message);
        }
      }
      });
    }
});



