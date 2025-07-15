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

  connectedCallback() {
    super.connectedCallback();
    this.cargarCarreras();
  }

  async cargarCarreras() {
    const response = await fetch('./data/carreras.json');
    this.carreras = await response.json();
  }

  render() {
    return html`
      <ul>
        ${this.carreras.map(
          (carrera) => html`
            <li @click=${() => this.seleccionarCarrera(carrera)}>
              ${carrera.nombre}
            </li>
          `
        )}
      </ul>
    `;
  }

  seleccionarCarrera(carrera) {
    this.dispatchEvent(new CustomEvent('career-selected', {
      detail: carrera,
      bubbles: true,
      composed: true
    }));
  }
}

customElements.define('career-selector', CareerSelector);
