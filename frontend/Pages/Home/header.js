class SpecialHeader extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
            <header>
                <div class="header-container">
                    <div class="header-search">
                        <img id="search" src="../../assets/search.png">
                        <input type="text" placeholder="Search">
                    </div>

                    <div class="header-logo">
                        <img id="logo" src="../../assets/logo.png">
                    </div>

                    <div class="header-user">
                        <img id="cart" src="../../assets/cart.png">
                        <img id="user" src="../../assets/user.png">
                    </div>
                </div>
            </header>
        `;
    }
}

customElements.define('special-header', SpecialHeader);
