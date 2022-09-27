class Footer extends HTMLElement {
    constructor() {
      super();
    }
  
    connectedCallback() {
      this.innerHTML = `
      <style>
      .footer-menu {
        position: fixed;
        bottom: 0;
        width: 100%;
        height: 40px;   /* Height of the footer */
        background: #6cf;
        text-align: center;
      }
      
    </style>
    <footer class="footer-menu">
    <p>All Rights Reserved © Saroj Khadka</p>
    </footer>
      `;
    }
  }
  
  customElements.define('footer-component', Footer);