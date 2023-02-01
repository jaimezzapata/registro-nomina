let cedulas = [];
let nombres = [];
let cargos = [];
let salarios = [];
let repetir = true;

let cedula, nombre, cargo, salario;

while (repetir) {
  let opcion = prompt(
    "Seleccione según corresponda: \n1 - Registrar Nomina empleado \n2 - Mostrar todos los empleados \n3 - Buscar un empleado \n4 - Cerrar Sesión"
  );

  switch (opcion) {
    case "1":
      while (repetir) {
        cedula = prompt("Ingrese la cedula del empleado: ");
        nombre = prompt("Ingrese el nombre del empleado: ");
        cargo = prompt("Ingrese el cargo del empleado: ");
        salario = prompt("Ingrese el salario del empleado: ");
        cedulas.unshift(cedula);
        nombres.unshift(nombre);
        cargos.unshift(cargo);
        salarios.unshift(salario);
        opcion = prompt("Desea registrar un nuevo empleado? \n1 - Si \n2 - No");
        if (opcion == "2") {
          repetir = false;
        }
      }
      repetir = true;
      break;
    case "2":
      for (let index = 0; index < cedulas.length; index++) {
        alert(
          `Información Empleado: \nCedula: ${cedulas[index]}\nNombre: ${nombres[index]} \nCargo: ${cargos[index]} \nSalario: ${salarios[index]}`
        );
      }
      break;
    case "3":
      cedula = prompt("Ingrese la cédula del empleado: ");
      for (let index = 0; index < cedulas.length; index++) {
        if (cedula === cedulas[index]) {
          alert(
            `Información Empleado: \nCedula: ${cedulas[index]}\nNombre: ${nombres[index]} \nCargo: ${cargos[index]} \nSalario: ${salarios[index]}`
          );
        }
      }
      break;
    case "4":
      repetir = false;
      break;
    default:
      alert("La opción no existe");
      break;
  }
}
