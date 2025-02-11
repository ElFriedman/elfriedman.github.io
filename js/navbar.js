class NavBar extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    // TODO - add 'Jonathan Conroy' on 2 of the 3 pages
    // TODO - highlight the page that we're currently on
    // TODO - hamburger icon
    this.innerHTML = `
        <div style="display:flex; gap:5px; justify-content:flex-end">
         
              <a href="index.html">about</a>
           
              <a href="publications.html">publications</a>
          
              <a href="miscellanea.html">miscellanea</a> 
          
        </div>
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
