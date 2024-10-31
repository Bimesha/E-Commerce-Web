// Form submission for create new product
document
  .getElementById("addProductForm")
  .addEventListener("submit", async function (event) {
    event.preventDefault();

    const form = event.target;
    // Validate the form before submission
    if (!form.checkValidity()) {
      form.classList.add("was-validated");
      return;
    }
    const formData = new FormData(form);

    try {
      const response = await fetch(
        "http://localhost:5500/api/products/create-product",
        {
          method: "POST",
          body: formData,
        }
      );

      if (response.ok) {
        const responseData = await response.json();
        alert(responseData.message || "Product created successfully!");
        form.reset();
        document.getElementById("imagePreview").src = "#";
      } else {
        const errorData = await response.json();
        alert(`Error: ${errorData.message || "Failed to create product"}`);
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("Product created successfully!");
    }
  });

// Load product details for edit form
let selectedProductId;
async function fetchProductDetails(productId) {
  selectedProductId = productId;
  try {
    const response = await fetch(
      `http://localhost:5500/api/products/${productId}`
    );
    if (!response.ok) {
      throw new Error("Failed to fetch product details");
    }
    const product = await response.json();

    // Populate form fields with the fetched product details
    document.getElementById("categoryEdit").value = product.category;
    document.getElementById("categoryEdit").value = product.CategoryID;
    document.getElementById("productNameEdit").value = product.Name;
    document.getElementById("priceEdit").value = product.Price;
    document.getElementById("quantityEdit").value = product.Quantity;
    document.getElementById("descriptionEdit").value = product.Description;

    // Set the product image preview
    const imagePreviewEdit = document.getElementById("imagePreviewEdit");
    if (product.ImagePath) {
      imagePreviewEdit.src = product.ImagePath;
      imagePreviewEdit.style.display = "block";
    } else {
      imagePreviewEdit.style.display = "none";
    }
  } catch (error) {
    console.error("Error fetching product details:", error);
  }
}

// Function to handle updating product details
async function updateProductDetails(selectedProductId) {
  if (!selectedProductId) {
    console.error("Product ID not found.");
    return;
  }

  // Select form elements
  const name = document.getElementById("productNameEdit").value;
  const description = document.getElementById("descriptionEdit").value;
  const price = document.getElementById("priceEdit").value;
  const quantity = document.getElementById("quantityEdit").value;
  const categoryID = document.getElementById("categoryEdit").value;
  const productImage = document.getElementById("productImageEdit").files[0];

  // Prepare form data
  const formData = new FormData();
  formData.append("name", name);
  formData.append("description", description);
  formData.append("price", price);
  formData.append("quantity", quantity);
  formData.append("categoryID", categoryID);
  if (productImage) {
    formData.append("productImage", productImage);
  }

  try {
    const response = await fetch(
      `http://localhost:5500/api/products/${selectedProductId}`,
      {
        method: "PUT",
        body: formData,
      }
    );

    if (response.ok) {
      alert("Product updated successfully!");
      closeEditModal();
      location.reload();
    } else {
      const result = await response.json();
      alert("Failed to update product: " + result.message);
    }
  } catch (error) {
    console.error("Error updating product:", error);
    alert("Product updated successfully!");
  }
}

// Attach onclick handler to the "Save Changes" button
document
  .querySelector("#editProductForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    // Check if there is an existing image preview, meaning no new image is needed
    const imageInput = document.getElementById("productImageEdit");
    const imagePreview = document.getElementById("imagePreviewEdit");

    if (!imagePreview.src || imagePreview.src === "#") {
      imageInput.setAttribute("required", "true");
    } else {
      imageInput.removeAttribute("required");
    }

    const productId = selectedProductId;
    updateProductDetails(productId);
  });
