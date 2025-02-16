class NavBar extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    // document.addEventListener("DOMContentLoaded", function () {
    //   // Get all the elements with the specific IDs
    //   const navIcons = document.querySelectorAll("#hamburger-icon");

    //   // Add a click event listener to each element
    //   navIcons.forEach(function (icon) {
    //     icon.addEventListener("click", function () {
    //       // Toggle the 'open' class when clicked
    //       this.classList.toggle("open");
    //     });
    //   });
    // });

    const page = this.getAttribute("page");

    const nameText = page === "publications" || page === "miscellanea" ? "<a href='/'> <span class='font-weight-bold'>Jonathan</span> Conroy </a>" : "";

    const aboutHighlighted = page === "about" ? "id='highlighted-nav-link'" : "";
    const publicationsHighlighted = page === "publications" ? "id='highlighted-nav-link'" : "";
    const miscellaneaHighlighted = page === "miscellanea" ? "id='highlighted-nav-link'" : "";

    this.innerHTML = `
        <header id="nav-bar">
          <div class="container">
              ${nameText}

              <div id="nav-links">
                <a ${aboutHighlighted} class="nav-link" href="index.html">about</a>

                <a ${publicationsHighlighted} class="nav-link" href="publications.html">publications</a>

                <a ${miscellaneaHighlighted} class="nav-link" href="miscellanea.html">miscellanea</a>
              </div>

              <div id="hamburger-icon">
                <button>TODO</button>
              </div>
          </div>
        </header>
      `;
  }

  render() {
    //   const size = this.getAttribute('btnsize') || 'medium'; // Default size
    //   // Define the button size styles based on the btnSize attribute
    //   const sizeStyles = {
    //     small: {
    //       padding: '4px 8px',
    //       fontSize: '12px'
    //     },
    //     medium: {
    //       padding: '8px 16px',
    //       fontSize: '16px'
    //     },
    //     large: {
    //       padding: '12px 24px',
    //       fontSize: '20px'
    //     }
    //   };
    //   const { padding, fontSize } = sizeStyles[size] || sizeStyles.medium;
  }
}

// Register the custom button element
customElements.define("nav-bar", NavBar);
