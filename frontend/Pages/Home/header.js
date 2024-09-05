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
        `;
    }
}

customElements.define('special-header', SpecialHeader);
