document.addEventListener("DOMContentLoaded", function () {
  const contactForm = document.getElementById("contactForm");

  const successModal = new bootstrap.Modal(
    document.getElementById("successModal")
  );
  const failureModal = new bootstrap.Modal(
    document.getElementById("failureModal")
  );

  contactForm.addEventListener("submit", async function (event) {
    event.preventDefault();

    const email = document.getElementById("contactEmail").value;
    const message = document.getElementById("contactMessage").value;

    console.log(email);

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
        }
      } else {
        failureModal.show();
      }
    } catch (error) {
      console.error("Error:", error);
      failureModal.show();
    }
  });

  document
    .getElementById("failureModal")
    .addEventListener("show.bs.modal", function () {
      document
        .querySelector(".header-container")
        .classList.add("contact-dark-background");
    });

  document
    .getElementById("failureModal")
    .addEventListener("hide.bs.modal", function () {
      setTimeout(() => {
        document
          .querySelector(".header-container")
          .classList.remove("contact-dark-background");
      }, 200);
    });

  document
    .getElementById("failureModal")
    .addEventListener("show.bs.modal", function () {
      document
        .querySelector(".header-search")
        .classList.add("contact-search-dark-background");
    });

  document
    .getElementById("failureModal")
    .addEventListener("hide.bs.modal", function () {
      setTimeout(() => {
        document
          .querySelector(".header-search")
          .classList.remove("contact-search-dark-background");
      }, 200);
    });

  document
    .getElementById("failureModal")
    .addEventListener("show.bs.modal", function () {
      document
        .querySelector(".header-search input")
        .classList.add("contact-input-dark-background");
    });

  document
    .getElementById("failureModal")
    .addEventListener("hide.bs.modal", function () {
      setTimeout(() => {
        document
          .querySelector(".header-search input")
          .classList.remove("contact-input-dark-background");
      }, 200);
    });

  document
    .getElementById("successModal")
    .addEventListener("show.bs.modal", function () {
      document
        .querySelector(".header-container")
        .classList.add("contact-dark-background");
    });

  document
    .getElementById("successModal")
    .addEventListener("hide.bs.modal", function () {
      setTimeout(() => {
        document
          .querySelector(".header-container")
          .classList.remove("contact-dark-background");
      }, 200);
    });

  document
    .getElementById("successModal")
    .addEventListener("show.bs.modal", function () {
      document
        .querySelector(".header-search")
        .classList.add("contact-search-dark-background");
    });

  document
    .getElementById("successModal")
    .addEventListener("hide.bs.modal", function () {
      setTimeout(() => {
        document
          .querySelector(".header-search")
          .classList.remove("contact-search-dark-background");
      }, 200);
    });

  document
    .getElementById("successModal")
    .addEventListener("show.bs.modal", function () {
      document
        .querySelector(".header-search input")
        .classList.add("contact-input-dark-background");
    });

  document
    .getElementById("successModal")
    .addEventListener("hide.bs.modal", function () {
      setTimeout(() => {
        document
          .querySelector(".header-search input")
          .classList.remove("contact-input-dark-background");
      }, 200);
    });
});
