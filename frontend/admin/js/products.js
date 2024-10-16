// Fetch products from backend and display them in the table
document.addEventListener("DOMContentLoaded", function () {
    fetch('/products')
      .then(response => response.json())
      .then(data => {
        const productTable = document.getElementById('productTable');
        data.forEach(product => {
          const row = document.createElement('tr');
          
          row.innerHTML = `
            <td>${product.name}</td>
            <td>${product.category}</td>
            <td>${product.quantity > 0 ? 'Yes' : 'No'}</td>
            <td>$${product.price}</td>
            <td>
              <button class="btn btn-primary btn-sm edit" data-id="${product.id}">Edit</button>
              <button class="btn btn-danger btn-sm delete" data-id="${product.id}">Delete</button>
            </td>
          `;
          productTable.appendChild(row);
        });
      })
      .catch(error => console.error('Error fetching products:', error));
  });
  