// Fetch customers from backend and display them in the table
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

// Fetch customers from backend and display them in the table for mobile view
document.addEventListener("DOMContentLoaded", function () {
  fetch("http://localhost:5500/api/users/all-customers")
    .then((response) => response.json())
    .then((data) => {
      const customerTable = document.getElementById("customerTable1");
      data.forEach((customer) => {
        const row = document.createElement("tr");

        row.innerHTML = `
              <td class="extra-columns">${customer.customerId}</td>
              <td>${customer.name}</td>
              <td>${customer.email}</td>
              <td class="extra-columns">${customer.address}</td>
              <td>${customer.phone}</td>
            `;
        customerTable.appendChild(row);
      });
    })
    .catch((error) => console.error("Error fetching products:", error));
});

// document.addEventListener("DOMContentLoaded", function () {
//   // Fetch products from backend and display them in the table
//   fetch("http://localhost:5500/api/users/all-customers")
//     .then((response) => response.json())
//     .then((data) => {
//       const tableBody = document.querySelector("#customerTable tbody");

//       // Loop through the data and create table rows
//       data.forEach((customer) => {
//         const row = document.createElement("tr");
//         row.innerHTML = `
//             <td>${customer.customerId}</td>
//             <td>${customer.name}</td>
//             <td>${customer.email}</td>
//             <td>${customer.address}</td>
//             <td>${customer.phone}</td>
//           `;
//         tableBody.appendChild(row);
//       });

//       // Initialize DataTables after data is populated
//       $("#customerTable").DataTable({
//         paging: true,
//         searching: true,
//         ordering: true,
//         columns: [
//           null,
//           null,
//           null,
//           null,
//           null,
//         ],
//       });
//     })
//     .catch((error) => console.error("Error fetching products:", error));
// });
