function ejecutarCalculadora() {
    let operacion = prompt("Ingrese la operación que desea realizar:\n1. Suma\n2. Resta\n3. Multiplicación\n4. División");
  
    operacion = parseInt(operacion);
  
    if (operacion >= 1 && operacion <= 4) {
      let numero1 = parseFloat(prompt("Ingrese el primer número:"));
      let numero2 = parseFloat(prompt("Ingrese el segundo número:"));
      let resultado = 0;
  
      switch (operacion) {
        case 1:
          resultado = numero1 + numero2;
          alert(`El resultado de la suma es: ${resultado}`);
          break;
        case 2:
          resultado = numero1 - numero2;
          alert(`El resultado de la resta es: ${resultado}`);
          break;
        case 3:
          resultado = numero1 * numero2;
          alert(`El resultado de la multiplicación es: ${resultado}`);
          break;
        case 4:
          if (numero2 !== 0) {
            resultado = numero1 / numero2;
        alert(`El resultado de la división es: ${resultado}`);
          } else {
            alert("Error: No se puede dividir por cero.");
          }
          break;
        default:
            alert("Opción no válida.");
          break;
      }
    } else {
        alert("Opción no válida. Ingrese un número del 1 al 4.");
    }
  }
  
  ejecutarCalculadora();