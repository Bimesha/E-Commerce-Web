function togglemenu() {
  let dropdown = document.getElementById("drop-down");
  if (dropdown.style.display === "none" || dropdown.style.display === "") {
    dropdown.style.display = "block";
  } else {
    dropdown.style.display = "none";
  }
}

// Close the drop-down menu if the user clicks outside of it
window.onclick = function (event) {
  var dropdown = document.getElementById("drop-down");
  var avatar = document.getElementById("user");
  if (!avatar.contains(event.target) && !dropdown.contains(event.target)) {
    dropdown.style.display = "none";
  }
};

// Active class for the cart and user icons
document.addEventListener('DOMContentLoaded', () => {
  const cart = document.getElementById('cart');
  const user = document.getElementById('user');
  const links = document.querySelectorAll('#drop-down li a');

  function setActive(element) {
      // Remove 'active' class from all icons and links
      cart.classList.remove('active');
      user.classList.remove('active');
      links.forEach(link => link.parentElement.classList.remove('active'));

      // Add 'active' class to the clicked element
      if (element.id === 'cart' || element.id === 'user') {
          element.classList.add('active');
      } else if (element.tagName === 'A') {
          element.parentElement.classList.add('active');
      }
  }

  cart.addEventListener('click', () => setActive(cart));
  user.addEventListener('click', () => setActive(user));

  links.forEach(link => {
      link.addEventListener('click', (event) => {
          event.preventDefault(); 
          setActive(link);
      });
  });
});

