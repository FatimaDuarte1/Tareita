let numero = parseInt(prompt("Ingresa un número:"));
let contador = 0;

for (let i = 1; i <= numero; i++) {
  if (i % 3 == 0) {
    console.log(i);
    contador++;
  }
}

console.log("Esta es la cantidad de múltiplos de 3: " + contador);