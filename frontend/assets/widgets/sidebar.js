class SpecialSidebar extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
                <div class="sidebar-container">
                    <div class="sidebar-logo">
                        <img src="./assets/images/sidebar-img/logo.png" alt="Logo" />
                    </div>
                    <div id="sidebar" class="bg-dark text-white text-center">
                        <div class="sidebar-header">
                            <div class="sidebar-image">
                                <img src="./assets/images/sidebar-img/man.jpg" alt="User" />
                            </div>
                            <div class="sidebar-title">
                                <h4>Welcome</h4>
                            </div>
                        </div>
                        <ul class="nav flex-column">
                            <li class="nav-item">
                                <a class="nav-link" href="./dashboard.html"><i class="fa-solid fa-house-chimney"></i>Dashboard</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="./admin-products.html"><i class="fa-solid fa-bag-shopping"></i>Products</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#"><i class="fa-solid fa-truck"></i>Orders</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="./customers.html"><i class="fa-solid fa-users"></i>Customers</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#"><i class="fa-solid fa-quote-left"></i>Reviews</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#"><i class="fa-solid fa-user"></i>Profile</a>
                            </li>
                        </ul>
                    </div>
                </div>
            `;
  }
}

customElements.define("special-sidebar", SpecialSidebar);
