// document.addEventListener('DOMContentLoaded', function () {
//     const contactForm = document.getElementById('contactForm');
    
//     contactForm.addEventListener('submit', async function(event) {
//     event.preventDefault();

//     const email = document.getElementById('contactEmail').value;
//     const message = document.getElementById('contactMessage').value;

//     const response = await fetch('http://127.0.0.1:5500/api/contact', {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json',
//       },
//       body: JSON.stringify({
//         contactEmail: email,
//         contactMessage: message,
//       }),
//     });

//     .then(response => response.json())
//     .then(data => {
//       if (data.message) {
//         alert(data.message || 'Message sent successfully!');

//         // Reset the entire form
//         document.getElementById('contactForm').reset(); // Assuming the form has an ID of 'contact-form'
//       } 
//     })
//     .catch(error => {
//       console.error('Error:', error);
//       alert('Failed to send message. Please try again later.');
//     }) 
//     })
//   });
  

document.addEventListener('DOMContentLoaded', function () {
  const contactForm = document.getElementById('contactForm');

  contactForm.addEventListener('submit', async function (event) {
    event.preventDefault();

    const email = document.getElementById('contactEmail').value;
    const message = document.getElementById('contactMessage').value;

    try {
      const response = await fetch('http://127.0.0.1:5500/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          contactEmail: email,
          contactMessage: message,
        }),
      });

      const data = await response.json(); // Wait for the response and convert it to JSON

      if (data.message) {
        alert(data.message || 'Message sent successfully!');

        // Reset the entire form
        contactForm.reset();
      } else {
        alert('Failed to send message. Please try again later.');
      }
    } catch (error) {
      console.error('Error:', error);
      alert('Failed to send message. Please try again later.');
    }
  });
});
