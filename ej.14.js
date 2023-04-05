let num = [];
for (let i = 1; i <= 5; i++) {
  let numero = prompt("Ingresa el número " + i + ": ");
  num.push(Number(numero));
}

let mayor = num[0]; 
let menor = num[0];

for(let i = 1; i < num.length; i++){
  if(num[i] > mayor){ 
    mayor = numeros[i]; 
  }
  if(num[i] < menor){ 
    menor = num[i]; 
  }
}

console.log("El número mayor es: " + mayor);
console.log("El número menos es " + menor);