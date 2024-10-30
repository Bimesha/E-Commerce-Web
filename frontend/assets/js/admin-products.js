// Fetch products from backend and display them in the table
document.addEventListener("DOMContentLoaded", function () {
  fetch("http://localhost:5500/api/products/all-products")
    .then((response) => response.json())
    .then((data) => {
      const productTable = document.getElementById("productTable");
      data.forEach((product) => {
        const row = document.createElement("tr");

        row.innerHTML = `
            <td>${product.name}</td>
            <td>${product.category}</td>
            <td>${product.quantity}</td>
            <td>Rs ${product.price}</td>
            <td class="actions-buttons">
              <button class="edit" onclick="fetchProductDetails(${product.productId})" ><i class="fa-solid fa-pencil" data-bs-toggle="modal" data-bs-target="#editProductModal"></i></button>
              <button class="delete" data-id="${product.id}"><i class="fa-regular fa-trash-can"></i></button>
            </td>
          `;
        productTable.appendChild(row);
      });
    })
    .catch((error) => console.error("Error fetching products:", error));
});


// Function to handle add product image and delete image
const productImageInput = document.getElementById("productImage");
const imagePreview = document.getElementById("imagePreview");
const pulseButton = document.getElementById("pulseButton");
const deleteImageBtn = document.getElementById("deleteImageBtn");
const productImageUpload = document.getElementById("productImageUpload");

// Open file dialog when the upload area is clicked
productImageUpload.addEventListener("click", () => {
  productImageInput.click();
});

// Handle image preview
productImageInput.addEventListener("change", (e) => {
  const file = e.target.files[0];
  if (file) {
    const reader = new FileReader();
    reader.onload = (event) => {
      imagePreview.src = event.target.result;
      imagePreview.style.display = "block";
      deleteImageBtn.style.display = "block";
      pulseButton.style.display = "none";
    };
    reader.readAsDataURL(file);
  }
});

// Handle delete image button
deleteImageBtn.addEventListener("click", (e) => {
  e.stopPropagation(); 
  imagePreview.style.display = "none";
  deleteImageBtn.style.display = "none";
  pulseButton.style.display = "flex";
  productImageInput.value = ""; 
});


// Function to handle edit product image and delete image
const productImageInputEdit = document.getElementById("productImageEdit");
const imagePreviewEdit = document.getElementById("imagePreviewEdit");
const pulseButtonEdit = document.getElementById("pulseButtonEdit");
const deleteImageBtnEdit = document.getElementById("deleteImageBtnEdit");
const productImageUploadEdit = document.getElementById("productImageUploadEdit");

// Open file dialog when the upload area is clicked
productImageUploadEdit.addEventListener("click", () => {
  productImageInputEdit.click();
});

// Handle image preview
productImageInputEdit.addEventListener("change", (e) => {
  const file = e.target.files[0];
  if (file) {
    const reader = new FileReader();
    reader.onload = (event) => {
      imagePreviewEdit.src = event.target.result;
      imagePreviewEdit.style.display = "block";
      deleteImageBtnEdit.style.display = "block";
      pulseButtonEdit.style.display = "none";
    };
    reader.readAsDataURL(file);
  }
});

// Handle delete image button
deleteImageBtnEdit.addEventListener("click", (e) => {
  e.stopPropagation(); 
  imagePreviewEdit.style.display = "none";
  deleteImageBtnEdit.style.display = "none";
  pulseButtonEdit.style.display = "flex";
  productImageInputEdit.value = ""; 
});


// Real-time validation function
function realTimeValidation(input) {
  if (input.checkValidity()) {
    input.classList.remove("is-invalid");
    input.classList.add("is-valid");
  } else {
    input.classList.remove("is-valid");
    input.classList.add("is-invalid");
  }
}

// Apply real-time validation to all fields in the Add Product Form
document
  .querySelectorAll(
    "#addProductForm input, #addProductForm select, #addProductForm textarea"
  )
  .forEach(function (input) {
    input.addEventListener("input", function () {
      realTimeValidation(input);
    });
  });

// Apply real-time validation to all fields in the Edit Product Form
document
  .querySelectorAll(
    "#editProductForm input, #editProductForm select, #editProductForm textarea"
  )
  .forEach(function (input) {
    input.addEventListener("input", function () {
      realTimeValidation(input);
    });
  });

// Clear form event listener to reset image preview and form in Add Product Form
document.getElementById("clearForm").addEventListener("click", function () {
  document.getElementById("addProductForm").reset();
  document.getElementById("imagePreview").style.display = "none";
  document.getElementById("deleteImageBtn").style.display = "none";
  document.getElementById("pulseButton").style.display = "flex";
  document
    .querySelectorAll(
      "#addProductForm input, #addProductForm select, #addProductForm textarea"
    )
    .forEach(function (input) {
      input.classList.remove("is-valid", "is-invalid");
    });
});

document
  .getElementById("clearMobileAddForm")
  .addEventListener("click", function () {
    document.getElementById("addProductForm").reset();
    document.getElementById("imagePreview").style.display = "none";
    document.getElementById("deleteImageBtn").style.display = "none";
    document.getElementById("pulseButton").style.display = "flex";
    document
      .querySelectorAll(
        "#addProductForm input, #addProductForm select, #addProductForm textarea"
      )
      .forEach(function (input) {
        input.classList.remove("is-valid", "is-invalid");
      });
  });

// Clear form event listener to reset image preview and form in Edit Product Form
document.getElementById("clearEditForm").addEventListener("click", function () {
  document.getElementById("editProductForm").reset();
  document.getElementById("imagePreviewEdit").style.display = "none";
  document.getElementById("deleteImageBtnEdit").style.display = "none";
  document.getElementById("pulseButtonEdit").style.display = "flex";
  document
    .querySelectorAll(
      "#editProductForm input, #editProductForm select, #editProductForm textarea"
    )
    .forEach(function (input) {
      input.classList.remove("is-valid", "is-invalid");
    });
});

document
  .getElementById("clearMobileEditForm")
  .addEventListener("click", function () {
    document.getElementById("editProductForm").reset();
    document.getElementById("imagePreviewEdit").style.display = "none";
    document.getElementById("deleteImageBtnEdit").style.display = "none";
    document.getElementById("pulseButtonEdit").style.display = "flex";
    document
      .querySelectorAll(
        "#editProductForm input, #editProductForm select, #editProductForm textarea"
      )
      .forEach(function (input) {
        input.classList.remove("is-valid", "is-invalid");
      });
  });

// Bootstrap form submission validation for Add Product Form
(function () {
  "use strict";

  const form = document.getElementById("addProductForm");

  form.addEventListener(
    "submit",
    function (event) {
      if (!form.checkValidity()) {
        event.preventDefault();
        event.stopPropagation();
      }

      form.classList.add("was-validated");
    },
    false
  );
})();

// Bootstrap form submission validation for Edit Product Form
(function () {
  "use strict";

  const form = document.getElementById("editProductForm");

  form.addEventListener(
    "submit",
    function (event) {
      if (!form.checkValidity()) {
        event.preventDefault();
        event.stopPropagation();
      }

      form.classList.add("was-validated");
    },
    false
  );
})();

