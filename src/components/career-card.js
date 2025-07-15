import { LitElement, html } from 'lit';

export class CareerCard extends LitElement {
  static get properties() {
    return {
      carrera: { type: Object },
      tema: { type: String },
      digito: { type: Number }
    };
  }

  constructor() {
    super();
    this.carrera = null;
    this.digito = 1;
  }

  _cerrarModal() {
    this.carrera = null;
  }

  render() {
    return html`<p></p>`;
  }
}

customElements.define('career-card', CareerCard);
