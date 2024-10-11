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

  // ------------------------ REGISTRATION FORM VALIDATION ------------------------

  // Real-time validation for each input field in registration form
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



  // ------------------------ LOGIN FORM VALIDATION ------------------------

  // Real-time validation for the login form
  const loginForm = document.getElementById('loginForm');
  
  if (loginForm) {
    const loginEmail = document.getElementById('loginEmail');
    const loginPassword = document.getElementById('loginPassword');
    
    // Validate email on input
    loginEmail.addEventListener('input', function () {
      validateField(loginEmail);
    });

    // Validate password on input
    loginPassword.addEventListener('input', function () {
      validateField(loginPassword);
    });

    // Validate login form on submission
    loginForm.addEventListener('submit', async function (event) {
      // Prevent default form submission
      event.preventDefault();

      let isValid = true;

      // Validate email and password fields
      if (!loginEmail.checkValidity()) {
        validateField(loginEmail);
        isValid = false;
      }
      
      if (!loginPassword.checkValidity()) {
        validateField(loginPassword);
        isValid = false;
      }

      // If the form is valid, proceed with the API call
      if (isValid) {
        const loginData = {
            email: document.getElementById('loginEmail').value,
            password: document.getElementById('loginPassword').value
        };

        try {
            // Send a POST request to the login API
            const response = await fetch('http://localhost:5500/api/users/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(loginData)
            });

            // Handle the response from the server
            if (response.ok) {
                const result = await response.json();
                console.log(result); // Handle successful login

                // Redirect or perform actions on successful login
                // window.location.href = '/dashboard'; // Example redirect
            } else {
                const error = await response.json();
                // Handle errors, such as invalid credentials
                alert(error.message || 'Login failed. Please try again.');
            }
        } catch (err) {
            console.error('Error during login:', err);
            alert('An error occurred. Please try again later.');
        }
      }
    });
  }     
});