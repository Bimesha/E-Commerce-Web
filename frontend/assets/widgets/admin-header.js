class SpecialHeader extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
                <header id="nav-header">
                    <div class="header-container">
                            <div class="nav mobile-logo" style="display: none">
                                <li><img src="./assets/images/sidebar-img/logo.png" alt="Logo" /></li>
                            </div>
                            <ul class="nav justify-content-end">
                                <li class="nav-item" id="search">
                                    <a class="nav-link" href="#"><i class="fa-solid fa-magnifying-glass"></i></a>
                                </li>
                                <li class="nav-item" id="bell">
                                    <a class="nav-link" href="#"><i class="fa-regular fa-bell"></i></a>
                                </li>
                                <li class="nav-item" id="person">
                                    <a class="nav-link" href="#"><i class="fa-regular fa-user"></i></a>
                                </li>
                                <li id="list" style="display: none"><i class="fa-solid fa-bars" onClick="toggleMenu()"></i>
                                    <ul id="drop-down" style="display: none">
                                        <li id="home-link"><a href="./dashboard.html">Dashboard</a></li>
                                        <li id="products-link"><a href="./admin-products.html">Products</a></li>
                                        <li id="orders-link"><a href="#">Orders</a></li>
                                        <li id="customers-link"><a href="./customers.html">Customers</a></li>
                                        <li id="reviews-link"><a href="#">Reviews</a></li>
                                        <li id="profile-link"><a href="#">Profile</a></li>
                                    </ul>
                                </li>
                            </ul>
                    </div>
                </header>
            `;
  }
}

customElements.define("special-header", SpecialHeader);
