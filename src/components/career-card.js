import { LitElement, html, css } from 'lit';

export class CareerCard extends LitElement {
  static get properties() {
    return {
      carrera: { type: Object },
      tema: { type: String },
      digito: { type: Number }
    };
  }

  static get styles() {
    return css`
      .fondo {
        position: fixed;
        top: 0;
        left: 0;
        width: 100vw;
        height: 100vh;
        background: rgba(0, 0, 0, 0.5);
        display: flex;
        align-items: center;
        justify-content: center;
        z-index: 1000;
      }

      .modal {
        background: white;
        border-radius: 10px;
        box-shadow: 0 4px 8px rgba(0,0,0,0.2);
        max-width: 400px;
        width: 90%;
        overflow: hidden;
      }

      .cabecera {
        padding: 1rem;
        font-weight: bold;
        display: flex;
        justify-content: space-between;
        align-items: center;
      }

      .contenido {
        padding: 1rem;
      }

      .boton-cerrar {
        background: transparent;
        border: none;
        font-size: 1.2rem;
        cursor: pointer;
      }

      img {
        width: 100%;
        height: auto;
      }
    `;
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
      <div class="fondo" @click=${this._cerrarModal}>
        <div class="modal" @click=${e => e.stopPropagation()}>
          <div class="cabecera">
            ${this.carrera.nombre}
            <button class="boton-cerrar" @click=${this._cerrarModal}>✖</button>
          </div>
          <img src="${this.carrera.imagen}" alt="${this.carrera.nombre}">
          <div class="contenido">
            <p><strong>Facultad:</strong> ${this.carrera.facultad}</p>
            <p>${this.carrera.descripcion}</p>
          </div>
        </div>
      </div>
    `;
  }
}

customElements.define('career-card', CareerCard);
