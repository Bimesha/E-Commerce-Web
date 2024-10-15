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
                            <a class="nav-link text-white" href="#">Dashboard</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link text-white" href="#">Products</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link text-white" href="#">Orders</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link text-white" href="#">Customers</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link text-white" href="#">Reviews</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link text-white" href="#">Profile</a>
                        </li>
                    </ul>
                </div>
            </div>
        `;
    }
}

customElements.define('special-sidebar', SpecialSidebar);