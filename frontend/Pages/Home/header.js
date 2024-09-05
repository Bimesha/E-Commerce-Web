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
                        <img id="user" src="../../assets/user.png" onClick="togglemenu()">
                            <ul id="drop-down">
                                <div class="box"></div>
                                <li id="login-link"><a href="#">Log In</a></li>
                                <li id="signup-link"><a href="#">Create Account</a></li>
                                <li id="profile-link" style="display:none;"><a href="#">My Profile</a></li>
                                <li id="logout-link" style="display:none;"><a href="#" onclick="logout()">Logout</a></li>
                            </ul>
                    </div>
                </div>
            </header>

            <div class="header-menu">
                <ul class="nav nav-pills justify-content-center">
                    <li class="nav-item">
                        <a class="nav-link" aria-current="page" href="#">Home</a>
                    </li>
                    <li class="nav-item dropdown">
                        <a class="nav-link dropdown-toggle" data-bs-toggle="dropdown" href="#">Shop</a>
                            <ul class="dropdown-menu">
                                <li><a class="dropdown-item" href="#">Chair Collection</a></li>
                                <li><a class="dropdown-item" href="#">Table Collection</a></li>
                                <li><a class="dropdown-item" href="#">Sofa Collection</a></li>
                            </ul>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">Our Story</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">Contact Us</a>
                    </li>
                </ul>
            </div>
        `;
    }
}

customElements.define('special-header', SpecialHeader);
