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
                        <div id="cart"><a href="#"><i class="bi bi-cart3"><span id="cart-count">10</span></i></a></div>
                        <div id="user"><i class="bi bi-person" onClick="togglemenu()"></i></div>
                            <ul id="drop-down">
                                <div class="box"></div>
                                <li id="login-link"><a href="#">Log In</a></li>
                                <li id="signup-link"><a href="#">Create Account</a></li>
                                <li id="profile-link" style="display:none;"><a href="#">My Profile</a></li>
                                <li id="logout-link" style="display:none;"><a href="#">Logout</a></li>
                            </ul>
                    </div>
                </div>
            </header>

            <div class="header-menu">
                <ul class="nav justify-content-center">
                    <li class="nav-link"><a href="#">Home</a></li>
                    <li class="nav-link"><a href="#" onClick="toggleProductsDropdown()" id="products">Shop <i class="bi bi-caret-down-fill"></i></a>
                        <ul id="products-dropdown" style="display:none;">
                            <li id="chair-link"><a href="#">Chair Collection</a></li>
                            <li id="table-link"><a href="#">Table Collection</a></li>
                            <li id="sofa-link"><a href="#">Sofa Collection</a></li>
                        </ul>
                    </li>
                    <li class="nav-link"><a href="#">Our Story</a></li>
                    <li class="nav-link"><a href="#">Contact Us</a></li>
                </ul>
            </div>
        `;
    }
}

customElements.define('special-header', SpecialHeader);


