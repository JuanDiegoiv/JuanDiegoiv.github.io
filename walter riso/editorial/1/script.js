const parrafo = document.getElementById("parrafo");
let contenidoAnterior = parrafo.textContent;

function agregarSaltoDeLineaSiEsIgual() {
  const nuevoContenido = parrafo.textContent;

  if (nuevoContenido === contenidoAnterior) {
    parrafo.textContent += "\n";
  } else {
    contenidoAnterior = nuevoContenido;
  }
}

setInterval(agregarSaltoDeLineaSiEsIgual, 100);