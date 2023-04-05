let num = parseInt(prompt("Ingresa un número entre 0 y 10:"));

if (num < 0 || num > 10) {
  console.log("El número que ingreso no esta dentro del rango");
} 
else {
  console.log("Número de la tabla de multiplicar" + num + ":");
  for (let i = 1; i <= 10; i++) {
    console.log(num + " x " + i + " = " + (num * i));
  }
}