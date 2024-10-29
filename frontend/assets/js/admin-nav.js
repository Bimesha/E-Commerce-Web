function toggleMenu() {
  const dropdown = document.getElementById("drop-down");
  if (dropdown.style.display === "none" || dropdown.style.display === "") {
    dropdown.style.display = "block";
  } else {
    dropdown.style.display = "none";
  }
}

// Close the drop-down menu if the user clicks outside of it
window.onclick = function (event) {
  const dropdown = document.getElementById("drop-down");
  const list = document.getElementById("list");
  if (!list.contains(event.target) && !dropdown.contains(event.target)) {
    dropdown.style.display = "none";
  }
};
