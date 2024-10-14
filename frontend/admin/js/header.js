class SpecialHeader extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
            <header id="nav-header">
                <div class="header-container">
                        <ul class="nav justify-content-end">
                            <li class="nav-item" id="search">
                                <a class="nav-link" href="#"><i class="bi bi-search"></i></a>
                            </li>
                            <li class="nav-item" id="bell">
                                <a class="nav-link" href="#"><i class="bi bi-bell"></i></a>
                            </li>
                            <li class="nav-item" id="person">
                                <a class="nav-link" href="#"><i class="bi bi-person"></i></a>
                            </li>
                        </ul>
                </div>
            </header>
        `;
    }
}

customElements.define('special-header', SpecialHeader);