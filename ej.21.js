let sumadepares = 0;
let sumdeimpares = 0;

for(let i = 1; i <= 1000; i++) {
  if(i % 2 === 0) {
    sumadepares += i;
  } 
  else {
    sumadeimpares += i;
  }
}

console.log("La suma de números pares: " + sumadepares);
console.log("La suma de números impares: " + sumadeimpares);