
const colum = 10;
let a = 0;
const filas = 10;

for (let i = 1; i <= filas; i++) {
  let fila = "";
  
  for (let j = 1; j <= colum; j++) {
    fila += a + "\t";

    a++;
  }
  console.log(fila);
}