document.addEventListener("DOMContentLoaded", function () {
  const contactForm = document.getElementById("contactForm");
  const emailInput = document.getElementById('contactEmail');

  const successModal = new bootstrap.Modal(document.getElementById('successModal'));
  const failureModal = new bootstrap.Modal(document.getElementById('failureModal'));

  contactForm.addEventListener("submit", async function (event) {
    event.preventDefault();

    const email = document.getElementById("contactEmail").value + "@gmail.com";
    const message = document.getElementById("contactMessage").value;

    try {
      const response = await fetch("http://127.0.0.1:5500/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          contactEmail: email,
          contactMessage: message,
        }),
      });

      const data = await response.json();

      if (data.message) {
        successModal.show();

        // Reset the entire form
        contactForm.reset();
        for (let input of contactForm.elements) {
          input.classList.remove("is-valid", "is-invalid");
          emailInput.style.borderColor = '';
        }
      } else {
        failureModal.show();
      }

    } catch (error) {
      console.error("Error:", error);
      failureModal.show();
    }
  });


  // When the failure modal is shown, apply blur to the email input
  document.getElementById('failureModal').addEventListener('show.bs.modal', function () {
    if (emailInput.classList.contains('is-valid')) {
      emailInput.style.backgroundColor = 'rgba(158, 157, 157, 0.1)';
      emailInput.style.borderColor = 'rgb(53, 94, 59)';
      emailInput.classList.add('blurred-transition')
      emailInput.classList.remove('unblurred-transition')
    } else {
      emailInput.style.borderColor = 'rgba(139, 0, 0, 1)';
      emailInput.style.backgroundColor = 'rgba(158, 157, 157, 0.1)';
      emailInput.classList.add('blurred-transition')
      emailInput.classList.remove('unblurred-transition')
    }
  });

  // When the modal is hidden, remove the blur effect
  document.getElementById('failureModal').addEventListener('hide.bs.modal', function () {
    if (emailInput.classList.contains('is-valid')) {
      emailInput.style.backgroundColor = '';
      emailInput.style.borderColor = 'rgba(25, 135, 84, 1)';
      emailInput.classList.remove('blurred-transition')
      emailInput.classList.add('unblurred-transition')
    } else {
      emailInput.style.backgroundColor = '';
      emailInput.style.borderColor = '';
      emailInput.classList.remove('blurred-transition')
      emailInput.classList.add('unblurred-transition')
    }
  });


  document.getElementById('createAccount').addEventListener('show.bs.modal', function () {
    if (emailInput.classList.contains('is-valid')) {
      emailInput.style.zIndex = '0';
    } else {
      emailInput.style.zIndex = '0'; 
    }
  });


  document.getElementById('login').addEventListener('show.bs.modal', function () {
    if (emailInput.classList.contains('is-valid')) {
      emailInput.style.zIndex = '0';
    } else {
      emailInput.style.zIndex = '0'; 
    }
  });


  document.getElementById('failureModal').addEventListener('show.bs.modal', function () {
    document.querySelector('.header-container').classList.add('contact-dark-background');
  });

  document.getElementById('failureModal').addEventListener('hide.bs.modal', function () {
    setTimeout(() => {
      document.querySelector('.header-container').classList.remove('contact-dark-background');
    }, 200);
  });



  document.getElementById('failureModal').addEventListener('show.bs.modal', function () {
    document.querySelector('.header-search').classList.add('contact-search-dark-background');
  });

  document.getElementById('failureModal').addEventListener('hide.bs.modal', function () {
    setTimeout(() => {
      document.querySelector('.header-search').classList.remove('contact-search-dark-background');
    }, 200);
  });

  

  document.getElementById('failureModal').addEventListener('show.bs.modal', function () {
    document.querySelector('.header-search input').classList.add('contact-input-dark-background');
  });

  document.getElementById('failureModal').addEventListener('hide.bs.modal', function () {
    setTimeout(() => {
      document.querySelector('.header-search input').classList.remove('contact-input-dark-background');
    }, 200);
  });
});









