function createTable(tipo, id, array) {
  let ele = document.createElement(tipo);
  ele.id = id;

  document.body.appendChild(ele);
  let getID = document.getElementById(id);

  for (let i = 0; i < 4; i++) {
    // Insertar fila en la tabla
    let row = getID.insertRow();

    for (let j = 0; j < 6; j++) {
      let dateIndex = i * 6 + j;
      // Verificar que aún hay fechas en el array
      if (dateIndex < array.length) {
        let convertir = array[dateIndex].getDate() + "-" + (array[dateIndex].getMonth() + 1) + "-" + array[dateIndex].getFullYear();
        // Insertar celda en la fila
        let cell = row.insertCell();
        // Establecer contenido de la celda
        cell.textContent = convertir;
        // Establecer estilo de la celda
        cell.style.border = "1px solid lightgray";
        cell.style.padding = "3px";
      } else {
        // Si no hay más fechas en el array, salir del bucle interno
        break;
      }
    }
  }