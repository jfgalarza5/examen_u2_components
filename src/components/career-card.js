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
    if (!this.carrera) return html``;
    return html`
      <div class="overlay" @click=${this._cerrarModal}>
        <div class="modal" @click=${e => e.stopPropagation()}>
          <div class="header">
            ${this.carrera.nombre}
            <button @click=${this._cerrarModal}>✖</button>
          </div>
          <img src="${this.carrera.imagen}" alt="${this.carrera.nombre}">
          <div class="content">
            <p><strong>Facultad:</strong> ${this.carrera.facultad}</p>
            <p>${this.carrera.descripcion}</p>
          </div>
        </div>
      </div>
    `;
  }
}

customElements.define('career-card', CareerCard);
