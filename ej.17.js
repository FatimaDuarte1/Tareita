let prim= parseInt(prompt("Ingresa el primer número:"));
let seg = parseInt(prompt("Ingresa el segundo número:"));

let cont = 0;
let sum = 0;

for (let i = prim; i <= seg; i++) {
  if (i % 2 === 0) {
    cont++;
    sum += i;
    console.log(i);
  }
}

console.log(`Hay ${cont} múltiplos de 2.`);
console.log(`La suma de los múltiplos de 2 es ${sum}.`);