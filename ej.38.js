const matriz = [
    [4, 6, 8],
    [3, 5, 7],
    [2, 6, 8],
    [4, 7, 5]
  ];
  
  const aumentos = [5, 3, 1];
  
  for (let k = 0; k < aumentos.length; k++) {
    const aumento = aumentos[k];
    for (let i = aumento; i < matriz.length; i++) {
      const temp = matriz[i][0];
      let j = i;
      while (j >= aumento && matriz[j - aumento][0] > temp) {
        matriz[j][0] = matriz[j - aumento][0];
        j -= aumento;
      }
      matriz[j][0] = temp;
    }
  }
  
  console.log(matriz);