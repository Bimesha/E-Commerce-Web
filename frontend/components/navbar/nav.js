function togglemenu() {
    let dropdown = document.getElementById("drop-down");
    if (dropdown.style.display === "none" || dropdown.style.display === "") {
      dropdown.style.display = "block";
    } else {
      dropdown.style.display = "none";
    }
  }
  
  // Close the drop-down menu if the user clicks outside of it
  window.onclick = function (event) {
    var dropdown = document.getElementById("drop-down");
    var avatar = document.getElementById("user");
    if (!avatar.contains(event.target) && !dropdown.contains(event.target)) {
      dropdown.style.display = "none";
    }
  };
