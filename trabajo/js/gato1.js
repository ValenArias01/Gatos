console.log("A)")

var cantidadDeGatos = 10;

var emojis = ["😺", "😸", "😹"];

function imprimirGatos(cantidadDeGatos) {
  for (var i = 1; i <= cantidadDeGatos; i++) {
    var emoji = emojis[(i - 1) % emojis.length];
    console.log(`Gato #${i}: ${emoji}`);
  }
}

imprimirGatos(cantidadDeGatos);
