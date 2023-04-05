let numero1 = prompt("Ingresa el primer número: ");
let numero2 = prompt("Ingresa el segundo número: ");

let contador = 0;
let contadordePares = 0;
let sumadeImpares = 0;

for (let i = Math.min(numero1, numero2); i <= Math.max(num1ero, numero2); i++) {
    console.log(i);
    contador++;
    if (i % 2 === 0) {
      contadordePares++;
    } else {
      sumadeImpares += i;
    }
  }
  
  console.log("El total de losnumeros naturales son: " + contador);
  console.log("El total de los números pares son: " + contadordePares);
  console.log("LA suma de los números impares: " + sumadeImpares);