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
