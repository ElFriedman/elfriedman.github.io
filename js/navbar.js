class NavBar extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    const page = this.getAttribute("page");

    const nameText = page === "publications" || page === "miscellanea" ? "<a href='/' id='nav-bar-name-text'> <b>Jonathan</b> Conroy </a>" : "";

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
          <div class="container large-nav-bar-container">
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
          <div class="container small-nav-bar-container">
            <div id="vertical-nav-links">
              ${navLinks}
            </div>
          </div>
        </header>
      `;

    this.querySelector("#hamburger").addEventListener("click", () => this.toggleMenu());
  }

  toggleMenu() {
    const hamburger = this.querySelector("#hamburger");
    const dropdownMenu = this.querySelector("#vertical-nav-links");

    hamburger.classList.toggle("open");
    dropdownMenu.classList.toggle("show");
  }
}

customElements.define("nav-bar", NavBar);
