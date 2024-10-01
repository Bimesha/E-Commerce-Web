function togglemenu() {
  let dropdown = document.getElementById("drop-down");
  if (dropdown.style.display === "none" || dropdown.style.display === "") {
    dropdown.style.display = "block";
  } else {
    dropdown.style.display = "none";
  }
}

function toggleSearchmenu() {
  let dropdown = document.getElementById("drop-down-list");
  if (dropdown.style.display === "none" || dropdown.style.display === "") {
    dropdown.style.display = "block";
  } else {
    dropdown.style.display = "none";
  }
}

function toggleProductsDropdown() {
  let dropdown = document.getElementById("products-dropdown");
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

  var productsDropdown = document.getElementById("products-dropdown");
  var products = document.getElementById("products");
  if (!products.contains(event.target) && !productsDropdown.contains(event.target)) {
      productsDropdown.style.display = "none";
  }

  var searchDropdown = document.getElementById("drop-down-list");
  var search = document.getElementById("list");
  if (!search.contains(event.target) && !searchDropdown.contains(event.target)) {
    searchDropdown.style.display = "none";
  }
};

// document.addEventListener('DOMContentLoaded', () => {
//   const cart = document.getElementById('cart');

//   function setActive() {
//     cart.classList.add('active');
//     localStorage.setItem('cartActive', 'true');
//   }

//   function removeActive() {
//     cart.classList.remove('active');
//     localStorage.removeItem('cartActive');
//   }

//   const isStoryPage = window.location.pathname.includes('');
  
//   if (isStoryPage) {
//     if (localStorage.getItem('cartActive') === 'true') {
//       cart.classList.add('active');
//     }
//   } else {
//     removeActive();
//   }

//   cart.addEventListener('click', () => setActive());
// });



  




