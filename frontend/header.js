class SpecialHeader extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
            <header>
                <h1>Special Header</h1>
            </header>
        `;
    }
}

customElements.define('special-header', SpecialHeader);