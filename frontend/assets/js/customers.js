// Fetch products from backend and display them in the table
document.addEventListener("DOMContentLoaded", function () {
  fetch("http://localhost:5500/api/users/all-customers")
    .then((response) => response.json())
    .then((data) => {
      const customerTable = document.getElementById("customerTable");
      data.forEach((customer) => {
        const row = document.createElement("tr");

        row.innerHTML = `
                <td>${customer.customerId}</td>
                <td>${customer.name}</td>
                <td>${customer.email}</td>
                <td>${customer.address}</td>
                <td>${customer.phone}</td>
              `;
        customerTable.appendChild(row);
      });
    })
    .catch((error) => console.error("Error fetching products:", error));
});
