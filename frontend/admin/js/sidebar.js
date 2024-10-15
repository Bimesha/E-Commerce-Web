class SpecialSidebar extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
            <div class="sidebar-container">
                <div class="sidebar-logo">
                    <img src="../assets/sidebar-img/logo.png" alt="Logo" />
                </div>
                <div id="sidebar" class="bg-dark text-white text-center">
                    <div class="sidebar-image">
                        <img src="../assets/sidebar-img/man.avif" alt="User" />
                    </div>
                    <ul class="nav flex-column">
                        <li class="nav-item">
                            <a class="nav-link text-white" href="#">Home</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link text-white" href="#">About</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link text-white" href="#">Services</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link text-white" href="#">Contact</a>
                        </li>
                    </ul>
                </div>
            </div>
        `;
    }
}

customElements.define('special-sidebar', SpecialSidebar);