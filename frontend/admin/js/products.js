// Fetch products from backend and display them in the table
document.addEventListener("DOMContentLoaded", function () {
  fetch('http://localhost:5500/products')
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
            <button class="edit" data-id="${product.id}"><i class="bi bi-pencil"></i></button>
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
      reader.readAsDataURL(file); // Convert the file to a data URL
  }
});
