let matriz = [];

for (let i = 0; i < 4; i++) {
  matriz[i] = [];
  for (let j = 0; j < 5; j++) {
    matriz[i][j] = Math.floor(Math.random() * 100) + 1;
  }
}
let matrizTrans= [];
for (let i = 0; i < 5; i++) {
  matrizTrans[i] = [];
  for (let j = 0; j < 4; j++) {
    matrizTrans[i][j] = matriz[j][i];
  }
}

console.log(matrizTrans);