// document.addEventListener('DOMContentLoaded', function () {
//     // Function to validate a single field
//     function validateField(field) {
//       if (!field.checkValidity()) {
//         field.classList.add('is-invalid');
//         field.classList.remove('is-valid');
//       } else {
//         field.classList.remove('is-invalid');
//         field.classList.add('is-valid');
//       }
//     }
  
//     // Real-time validation for each input field
//     const form = document.getElementById('registrationForm');
    
//     if (form) {
//       const fields = form.querySelectorAll('input');
  
//       // loop for Validate each field on input
//       fields.forEach(function (field) {
//         field.addEventListener('input', function () {
//           validateField(field);
//         });
//       });
  
//       // Password matching validation in real-time
//       const password = document.getElementById('password');
//       const confirmPassword = document.getElementById('confirmPassword');
  
//       confirmPassword.addEventListener('input', function () {
//         if (password.value !== confirmPassword.value) {
//           confirmPassword.setCustomValidity("Passwords do not match");
//           confirmPassword.classList.add('is-invalid');
//           confirmPassword.classList.remove('is-valid');
//         } else {
//           confirmPassword.setCustomValidity('');
//           confirmPassword.classList.remove('is-invalid');
//           confirmPassword.classList.add('is-valid');
//         }
//       });
  
//       // Validate the entire form on submission
//       form.addEventListener('submit', async function (event) {
//         // Prevent default form submission
//         event.preventDefault();

//         let isValid = true;

//         fields.forEach(function (field) {
//           validateField(field);
//           if (!field.checkValidity()) {
//             isValid = false;
//           }
//         });
  
//         // If the form is valid, proceed with form submission
//       if (isValid) {
//         const formData = {
//           firstname: document.getElementById('firstName').value,
//           lastname: document.getElementById('lastName').value,
//           email: document.getElementById('email').value,
//           password: document.getElementById('password').value,
//           confirmPassword: document.getElementById('confirmPassword').value,
//         };

//         try {
//           const response = await fetch('http://localhost:5500/api/users/create-account', {
//             method: 'POST',
//             headers: {
//               'Content-Type': 'application/json',
//             },
//             body: JSON.stringify(formData),
//           });

//           if (!response.ok) {
//             // If response is not ok, throw an error
//             throw new Error(`HTTP error! Status: ${response.status}`);
//           } else {
//             const result = await response.json();
//             console.log(result);

//           }
//         } catch (err) {
//           console.error('Error submitting form:', err.message);
//           alert(`Error: ${err.message}`);
//         }
//       }
//       });
//     }
// });


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
