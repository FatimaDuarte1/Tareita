let b = 0;
for (let i = 1; i <= 100; i++) {
  if (i % 2 === 0 || i % 3 === 0) {
    console.log(i);
    contador++;
  }
}

console.log("Total de multiplos de dos o tres: " + b);