/*Voy a realizar el inicio de mi proyecto, un E commerce de mates.La tienda va a contar con diferentes
de mates y variedad de colores.Luego cada mate va a tener si precio y se le va a agregar el precio del
IVA*/

let imperial = 8999;
let camionero = 8499;
let torpedo = 7999;
let bocon = 6499;
let valorFinal=0
let descuentoAplicado = 0.9;

alert("Bienvenido a VIZOL,donde tu mate te encuentra");

alert("Que mate estas buscando?");

let numero =prompt("Ingrese el numero del tipo de mate que desea:\n 1: Imperial \n 2: Camionero \n 3: Torpedo \n 4: Bocon \n 5: Salir")

while (numero == true) {
  switch (numero) {
    case "1":
      alert("Selecciono imperial")
      descuento()
      break

    case "2":
      alert("Selecciono camionero")
      descuento()
      break

    case "3":
      alert("Selecciono torpedo")
      descuento()
      break

    case "4":
      alert("Selecciono bocon")
      descuento()
      break

    case "5":
      alert("Nos vemos,que tenga un buen dia")
      break

    default:
      alert("No ha elegido ningun tipo de mate,seleccione uno")
      break
  }
}

function descuento() {
    if(numero == 1) {
      let valorFinal = imperial * descuentoAplicado;
      numero="a"
      alert("El valor del mate imperial es de:  " + valorFinal );
  } else if (numero == 2) {
      let valorFinal = camionero * descuentoAplicado;
      numero="a"
      alert("El valor del mate camionero es de: " + valorFinal);
  } else if (numero == 3) {
      let valorFinal = torpedo * descuentoAplicado;
      numero="a"
      alert("El valor del mate del torpedo es de: " + valorFinal);
  } else if (numero == 4) {
      let valorFinal = bocon * descuentoAplicado;
      numero="a"
      alert("El valor del mate bocon es de: " + valorFinal);
    }else {
      alert("El numero seleccionado es incorrecto")
    }
} 

