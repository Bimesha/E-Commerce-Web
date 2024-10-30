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
async function fetchProductDetails(productId) {
  try {
    const response = await fetch(
      `http://localhost:5500/api/products/${productId}`
    );
    if (!response.ok) {
      throw new Error("Failed to fetch product details");
    }
    const product = await response.json();

    // Populate form fields with the fetched product details
    document.getElementById("categoryEdit").value =
      product.category.toLowerCase();
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
