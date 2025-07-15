import { LitElement, html } from 'lit';

export class CareerSelector extends LitElement {
  static get properties() {
    return {
      carreras: { type: Array }
    };
  }

  constructor() {
    super();
    this.carreras = [];
  }

  render() {
    return html`
      <p>Componente CareerSelector</p>
    `;
  }
}

customElements.define('career-selector', CareerSelector);
