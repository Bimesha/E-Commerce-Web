// Fetch products from backend and display them in the table
document.addEventListener("DOMContentLoaded", function () {
  fetch('http://localhost:5500/api/all-products')
    .then(response => response.json())
    .then(data => {
      const productTable = document.getElementById('productTable');
      data.forEach(product => {
        const row = document.createElement('tr');
          
        row.innerHTML = `
          <td>${product.name}</td>
          <td>${product.category}</td>
          <td>${product.quantity}</td>
          <td>Rs ${product.price}</td>
          <td class="actions-buttons">
            <button class="edit" data-id="${product.id}"><i class="bi bi-pencil" data-bs-toggle="modal" data-bs-target="#editProductModal"></i></button>
            <button class="delete" data-id="${product.id}"><i class="bi bi-trash3"></i></button>
          </td>
        `;
          productTable.appendChild(row);
      });
    })
      .catch(error => console.error('Error fetching products:', error));
});



// Image Preview for Product Image in Add Product Form
document.getElementById('productImage').addEventListener('change', function(event) {
    const file = event.target.files[0];
    if (file) {
        const reader = new FileReader();
        reader.onload = function(e) {
            const imagePreview = document.getElementById('imagePreview');
            imagePreview.src = e.target.result;
            imagePreview.style.display = 'block'; 
        }
        reader.readAsDataURL(file); 
    }
});

// Image Preview for Product Image in Edit Product Form
document.getElementById('productChangeImage').addEventListener('change', function(event) {
  const file = event.target.files[0];
  if (file) {
      const reader = new FileReader();
      reader.onload = function(e) {
          const imageChangePreview = document.getElementById('imageChangePreview');
          imageChangePreview.src = e.target.result;
          imageChangePreview.style.display = 'block'; 
      }
      reader.readAsDataURL(file); 
  }
});



// Real-time validation function
function realTimeValidation(input) {
  if (input.checkValidity()) {
      input.classList.remove('is-invalid');
      input.classList.add('is-valid');
  } else {
      input.classList.remove('is-valid');
      input.classList.add('is-invalid');
  }
}

// Apply real-time validation to all fields in the Add Product Form
document.querySelectorAll('#addProductForm input, #addProductForm select, #addProductForm textarea').forEach(function (input) {
    input.addEventListener('input', function () {
        realTimeValidation(input);
    });
});

// Apply real-time validation to all fields in the Edit Product Form
document.querySelectorAll('#editProductForm input, #editProductForm select, #editProductForm textarea').forEach(function (input) {
  input.addEventListener('input', function () {
      realTimeValidation(input);
  });
});

// Clear form event listener to reset image preview and form
document.getElementById('clearForm').addEventListener('click', function() {
  document.getElementById('addProductForm').reset();
  document.getElementById('imagePreview').style.display = 'none';
  document.querySelectorAll('#addProductForm input, #addProductForm select, #addProductForm textarea').forEach(function (input) {
      input.classList.remove('is-valid', 'is-invalid');
  });
});

// Bootstrap form submission validation for Add Product Form
(function () {
  'use strict'

  const form = document.getElementById('addProductForm');

  form.addEventListener('submit', function (event) {
      if (!form.checkValidity()) {
          event.preventDefault();
          event.stopPropagation();
      }

      form.classList.add('was-validated');
  }, false);
})();

// Bootstrap form submission validation for Edit Product Form
(function () {
  'use strict'

  const form = document.getElementById('editProductForm');

  form.addEventListener('submit', function (event) {
      if (!form.checkValidity()) {
          event.preventDefault();
          event.stopPropagation();
      }

      form.classList.add('was-validated');
  }, false);
})();
  