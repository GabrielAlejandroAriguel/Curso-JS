/*Voy a realizar el inicio de mi proyecto, va a ser un E commerce de mates.La tienda va a contar con diferentes
tipos de mates.Luego cada mate va a tener su precio ,se le va a realizar un descuento sobre el mismo.*/

let imperial = 8999;
let camionero = 8499;
let torpedo = 7999;
let bocon = 6499;
let valorFinal=0
let descuentoAplicado = 0.9;

alert("Bienvenido a VIZOL, donde tu mate te encuentra a vos");

alert("¿Que mate estas buscando?");

let numero =prompt("Ingrese el numero :\n 1: Imperial \n 2: Camionero \n 3: Torpedo \n 4: Bocon \n 5: Salir")


while (numero === "" || isNaN(numero) ) {

    numero= prompt("Ingresa un valor válido")

    }

  switch (numero) {
    case "1":
      alert("Seleccionaste imperial")
      descuento()
      break

    case "2":
      alert("Seleccionaste camionero")
      descuento()
      break

    case "3":
      alert("Seleccionaste torpedo")
      descuento()
      break

    case "4":
      alert("Seleccionaste bocon")
      descuento()
      break

    case "5":
      alert("Nos vemos,que tenga un buen dia")
      break

    default:
      alert("No ha elegido ningun tipo de mate,seleccione uno")
      numero =prompt("Ingrese el numero :\n 1: Imperial \n 2: Camionero \n 3: Torpedo \n 4: Bocon \n 5: Salir")
      descuento(numero)
}

function descuento() {
    if(numero == 1) {
      let valorFinal = imperial * descuentoAplicado;
      alert("El valor del mate imperial es de :" + imperial + " .Pero solo por hoy llevalo con un 10% de descuento.te quedaria en : " + valorFinal ); 
      alert("Muchas gracias por su compra,que lo disfrutes")
  } else if (numero == 2) {
      let valorFinal = camionero * descuentoAplicado;
      alert("El valor del mate camionero es de :" + camionero + " .Pero solo por hoy llevalo con un 10% de descuento.te quedaria en : " + valorFinal ); 
      alert("Muchas gracias por su compra,que lo disfrutes")
  } else if (numero == 3) {
      let valorFinal = torpedo * descuentoAplicado;
      alert("El valor del mate torpedo es de :" + torpedo + " .Pero solo por hoy llevalo con un 10% de descuento.te quedaria en : " + valorFinal ); 
      alert("Muchas gracias por su compra,que lo disfrutes")
  } else if (numero == 4) {
      let valorFinal = bocon * descuentoAplicado;
      alert("El valor del mate bocon es de :" + bocon + " .Pero solo por hoy llevalo con un 10% de descuento.te quedaria en : " + valorFinal ); 
      alert("Muchas gracias por su compra,que lo disfrutes")
  }
}