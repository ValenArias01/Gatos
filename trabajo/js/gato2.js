console.log("B)")

var cantidadDeGatos = 5;
var cantidadDePasos = 3;

function generarPasos(cantidadDePasos) {
  var pasos = '🐾';
  return pasos.repeat(cantidadDePasos);
}

for (var i = 1; i <= cantidadDeGatos; i++) {
  var gato = '🐈';
  var pasos = generarPasos(cantidadDePasos);
  console.log('Gato #' + i + ': ' + gato + ' ' + pasos);
}
