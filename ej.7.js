let f = 0;
while (true) {
  const frase = prompt("Introduce una frase (escribe 'salte' para terminar): ");
  if (frase === "salte") {
    break;
    f++;
  }
}
console.log("La cantidad de frases que ingresaste son: " + f);