class SpecialSidebar extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
            <div class="sidebar-container">
                <div class="sidebar-logo">
                    <img src="../assets/sidebar-img/logo.png" alt="Logo" />
                </div>
                <div id="sidebar" class="bg-dark text-white text-center">
                    <div class="sidebar-header">
                        <div class="sidebar-image">
                            <img src="../assets/sidebar-img/man.jpg" alt="User" />
                        </div>
                        <div class="sidebar-title">
                            <h4>Welcome</h4>
                        </div>
                    </div>
                    <ul class="nav flex-column">
                        <li class="nav-item">
                            <a class="nav-link" href="../html/index.html"><i class="bi bi-house-door"></i>Dashboard</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="../html/products.html"><i class="bi bi-bag-dash"></i>Products</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#"><i class="bi bi-truck"></i>Orders</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#"><i class="bi bi-people"></i>Customers</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#"><i class="bi bi-quote"></i>Reviews</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#"><i class="bi bi-person"></i>Profile</a>
                        </li>
                    </ul>
                </div>
            </div>
        `;
    }
}

customElements.define('special-sidebar', SpecialSidebar);