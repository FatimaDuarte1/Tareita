function fact(num) {
    if(num === 0) {
      return 1;
    } 
    else {
      return num* fact(num - 1);
    }
  }
  
  const num = prompt("Introduce un número para calcular su factorial:");
  
  const res = fact(num);
  
  console.log("El factorial de " + num + " es " + res);