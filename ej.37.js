function cargarCalificaciones(numerodeCursos, numerodeAlumnos) {
    let calificaciones = [];
  
    for (let i = 0; i < numerodeCursos; i++) {
      calificaciones[i] = [];
      for (let j = 0; j < numerodeAlumnos; j++) {
        let nota = prompt(`Ingrese la calificacion del alumno ${j+1} del curso ${i+1}:`);
        calificaciones[i][j] = Number(calificaciones);
      }
    }
  
    return calificaciones;
  }
  
  let notas = cargarCalificaciones(3, 5);

  console.log(calificaciones);