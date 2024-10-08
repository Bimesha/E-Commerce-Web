document.addEventListener("DOMContentLoaded", function () {
  const contactForm = document.getElementById("contactForm");

  contactForm.addEventListener("submit", async function (event) {
    event.preventDefault();

    const email = document.getElementById("contactEmail").value + "@gmail.com";
    const message = document.getElementById("contactMessage").value;

    console.log("Email:", email);

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
        alert(data.message || "Message sent successfully!");

        // Reset the entire form
        contactForm.reset();
        for (let input of contactForm.elements) {
          input.classList.remove("is-valid", "is-invalid");
        }

      } else {
        alert("Failed to send message. Please try again later.");
      }
    } catch (error) {
      console.error("Error:", error);
      alert("Failed to send message. Please try again later.");
    }
  });
});


