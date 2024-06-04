const matriz = document.getElementById('matriz');

const caracteres = [
  ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '!', '@', '#', '$', '%', '&', '*', '+', '-', '=', '/', '\\', '|', '?', '.', ',', ':', ';', '(', ')', '[', ']', '{', '}', '<', '>', '~', '`'],
  ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', '!', '@', '#', '$', '%', '&', '*', '+', '-', '=', '/', '\\', '|', '?', '.', ',', ':', ';', '(', ')', '[', ']', '{', '}', '<', '>', '~', '`']
];


function obtenerCaracterAleatorio() {
  const filaAleatoria = Math.floor(Math.random() * caracteres.length);
  const columnaAleatoria = Math.floor(Math.random() * caracteres[filaAleatoria].length);
  return caracteres[filaAleatoria][columnaAleatoria];
}


function generarMatriz() {
  for (let i = 0; i < 17; i++) {
    for (let j = 0; j < 4; j++) {
      const span = document.createElement('span');
      span.textContent = obtenerCaracterAleatorio();
      matriz.appendChild(span);
    }
  }
}


function cambiacaracteres() {
  let index = 0;
  const totalFilas = 17;
  const totalColumnas = 4;

  const intervaloFila = setInterval(() => {
    const filaActual =  Math.floor(index / totalFilas);
    const columnaActual = index % totalFilas;

    const span = matriz.children[index];
    span.textContent = obtenerCaracterAleatorio();

    index++;

    if (index >= totalFilas * totalColumnas) {
      clearInterval(intervaloFila);
      cambiacaracteresVertical();
    }
  }, 50); // Cambio cada 0.5 segundos (500 milisegundos)

  
  
}


function cambiacaracteresVertical() {
    let fila = 0;
    let columna = 0;
    const totalFilas = 17;
    const totalColumnas = 4;
    let cambioHorizontal = false; // Variable para alternar entre vertical y horizontal
  
    const intervaloFila = setInterval(() => {
      const span = matriz.children[fila * totalColumnas + columna];
      span.textContent = obtenerCaracterAleatorio();
  
      if (cambioHorizontal) {
        columna++; // Cambio horizontal
      } else {
        fila++; // Cambio vertical
      }
  
      if (fila >= totalFilas) {
        fila = 0; // Reinicia la fila al llegar al final
        columna++; // Mueve a la siguiente columna
      }
  
      if (columna >= totalColumnas) {
        clearInterval(intervaloFila); // Detiene el intervalo al completar todas las columnas
        if (!cambioHorizontal) {
          setTimeout(cambiacaracteres, 100); // Espera 0.1 segundo antes de cambiar horizontalmente
        }
        cambioHorizontal = !cambioHorizontal; // Cambia a horizontal después de vertical
      }
    }, 35); // Cambio cada 0.5 segundos (500 milisegundos)
}


window.addEventListener('DOMContentLoaded', () => {
  generarMatriz();
  cambiacaracteresVertical();
  
});
