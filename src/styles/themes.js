export const temas = {
  azul: {
    border: '2px solid #003366',
    headerBg: '#0055A5',
    textColor: '#FFFFFF'
  },
  verde: {
    border: '2px solid #2E7D32',
    headerBg: '#66BB6A',
    textColor: '#FFFFFF'
  },
  rojo: {
    border: '2px solid #B71C1C',
    headerBg: '#E53935',
    textColor: '#FFFFFF'
  },
  gris: {
    border: '2px solid #424242',
    headerBg: '#9E9E9E',
    textColor: '#FFFFFF'
  },
  naranja: {
    border: '2px solid #E65100',
    headerBg: '#FF9800',
    textColor: '#FFFFFF'
  },
};

export function getTema(digito) {
  const colores = {
    azul: [0, 1],
    verde: [2, 3],
    rojo: [4, 5],
    gris: [6, 7],
    naranja: [8, 9],
  };

  return Object.entries(colores).find(([key, values]) => values.includes(Number(digito)))[0];
}
