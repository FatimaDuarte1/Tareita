const paginas = 3;
const columnas = 5;
const filas = 4;

let contador = 1;

for (let p = 1; p <= paginas; p++) {
  console.log(`Página ${p}:`);
  for (let i = 1; i <= filas; i++) {
    let fila = "";
    for (let j = 1; j <= columnas; j++) {
      fila += contador + "\t";
      contador++;
    }
    console.log(fila);
  }
  console.log("\n");
}