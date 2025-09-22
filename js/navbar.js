class NavBar extends HTMLElement {
  connectedCallback() {
    // Expected to be 'about', 'publications', or 'miscellanea'
    const page = this.getAttribute("page");

    // Add name to nav bar if we're on publications page or miscellanea page
    const nameText = page === "publications" || page === "miscellanea" ? "<a href='/' id='nav-bar-name-text'> <b>Eli</b> Friedman </a>" : "";

    // One of the three links should be highlighted to show that we're currently on that page
    const aboutHighlighted = page === "about" ? "id='highlighted-nav-link'" : "";
    const publicationsHighlighted = page === "publications" ? "id='highlighted-nav-link'" : "";
    const miscellaneaHighlighted = page === "miscellanea" ? "id='highlighted-nav-link'" : "";

    const navLinks = `
      <a ${aboutHighlighted} class="nav-link" href="/">about</a>
      <a ${publicationsHighlighted} class="nav-link" href="/publications">publications</a>
      <a ${miscellaneaHighlighted} class="nav-link" href="/miscellanea">miscellanea</a>
    `;

    this.innerHTML = `
        <header id="nav-bar">
          <div class="container main-nav-bar-container">
              ${nameText}

              <div id="horizontal-nav-links">
                ${navLinks}
              </div>

              <div id="hamburger-div">
                <div id="hamburger">
                  <div class="bar bar1"></div>
                  <div class="bar bar2"></div>
                  <div class="bar bar3"></div>
                </div>
              </div>
          </div>
          <div class="container bottom-nav-bar-container">
            <div id="vertical-nav-links">
              ${navLinks}
            </div>
          </div>
        </header>
      `;

    // Add hamburger button dropdown functionality
    this.querySelector("#hamburger").addEventListener("click", () => this.toggleMenu());
  }

  toggleMenu() {
    const hamburger = this.querySelector("#hamburger");
    const dropdownMenu = this.querySelector("#vertical-nav-links");

    // Change the styling applied to hamburger icon and dropdown menu to either open or close the menu
    hamburger.classList.toggle("open");
    dropdownMenu.classList.toggle("show");
  }
}

customElements.define("nav-bar", NavBar); // The dash in 'nav-bar' is actually required to distinguish it from regular HTML elements.
