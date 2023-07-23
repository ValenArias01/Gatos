console.log("C)")

var cantidadDeGatos = 10;
var cantidadDePasos = 4;

function generarPasos(cantidadDePasos) {
  var pasos = '🐾';
  return pasos.repeat(cantidadDePasos);
}

for (var i = 1; i <= cantidadDeGatos; i++) {
  var gato = i % 2 === 0 ? '🐈‍⬛' : '🐈';
  var pasos = generarPasos(cantidadDePasos);
  console.log('Gato #' + i + ': ' + gato + ' ' + pasos);
}
