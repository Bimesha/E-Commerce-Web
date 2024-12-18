class SpecialHeader extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
              <header id="nav-header">
                  <div class="header-container">
                      <div class="header-search">
                          <img id="search" src="./assets/images/nav-img/search.png">
                          <input type="text" placeholder="Search">
                      </div>
  
                      <div class="header-logo">
                          <img id="logo" src="./assets/images/nav-img/logo.png">
                      </div>
  
                      <div class="header-user">
                          <div id="cart"><a href="#"><i class="bi bi-cart3"></i></a></div>
                          <div id="user"><i class="bi bi-person" onClick="togglemenu()"></i></div>
                              <ul id="drop-down">
                                  <div class="box"></div>
                                  <li id="login-link"><a href="#" data-bs-toggle="modal" data-bs-target="#login">Log In</a></li>
                                  <li id="signup-link"><a href="#" data-bs-toggle="modal" data-bs-target="#createAccount">Create Account</a></li>
                                  <li id="profile-link" style="display:none;"><a href="#" data-bs-toggle="modal" data-bs-target="#myProfile">My Profile</a></li>
                                  <li id="logout-link" style="display:none;"><a href="#">Logout</a></li>
                              </ul>
                          <div id="search1" style="display: none"><i class="bi bi-search"></i></div>
                          <div id="list" style="display: none"><i class="bi bi-list" onClick="toggleSearchmenu()"></i></div>
                              <ul id="drop-down-list" style="display: none">
                                  <li id="home-link"><a href="./index.html">Home</a></li>
                                  <li id="chair-link"><a href="./product.html#chair">Chair Collection</a></li>
                                  <li id="table-link"><a href="./product.html#table">Table Collection</a></li>
                                  <li id="sofa-link"><a href="./product.html#sofa">Sofa Collection</a></li>
                                  <li id="story-link"><a href="./story.html">Our Story</a></li>
                                  <li id="contact-link"><a href="./contact.html">Contact Us</a></li>
                              </ul>
                      </div>
                  </div>
                  
             
  
                  <div class="header-menu">
                      <ul class="nav justify-content-center">
                          <li class="nav-link" id="list" style="display: none"><i class="bi bi-list"></i></li>
                          <li class="nav-link"><a href="./index.html">Home</a></li>
                          <li class="nav-link"><a href="#" onClick="toggleProductsDropdown()" id="products">Shop <i class="bi bi-caret-down-fill"></i></a>
                              <ul id="products-dropdown" style="display:none;">
                                  <li id="chair-link"><a href="./product.html#chair">Chair Collection</a></li>
                                  <li id="table-link"><a href="./product.html#table">Table Collection</a></li>
                                  <li id="sofa-link"><a href="./product.html#sofa">Sofa Collection</a></li>
                              </ul>
                          </li>
                          <li class="nav-link"><a href="./story.html">Our Story</a></li>
                          <li class="nav-link"><a href="./contact.html">Contact Us</a></li>
                      </ul>
                  </div>
  
                  <div id="modals-container">
                      <registration-form></registration-form>
                      <login-form></login-form>
                      <my-profile></my-profile>
                  </div>
              </header>
  
          `;

    this.initScrollBehavior();
  }

  initScrollBehavior() {
    let lastScrollY = window.scrollY;
    let timeoutId;

    window.addEventListener("scroll", () => {
      // Clear the timeout if the user is still scrolling
      clearTimeout(timeoutId);

      // Check if the user is scrolling down
      if (window.scrollY > lastScrollY) {
        document.getElementById("nav-header").classList.add("hide-nav");
        // Check if the user is scrolling up
      } else if (window.scrollY < lastScrollY) {
        document.getElementById("nav-header").classList.add("hide-nav");
      } else {
        // Show the navbar when scrolling upwards
        document.getElementById("nav-header").classList.remove("hide-nav");
      }

      // Set timeout to detect when the user stops scrolling
      timeoutId = setTimeout(() => {
        // Show the navbar after scrolling stops
        document.getElementById("nav-header").classList.remove("hide-nav");
      }, 200);

      // Update last scroll position
      lastScrollY = window.scrollY;
    });
  }
}

customElements.define("special-header", SpecialHeader);
