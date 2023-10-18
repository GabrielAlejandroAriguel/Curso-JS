/*PARTE DE CREACION DEL USUARIO
  No lo tengo terminado aun porque estoy practicando css y html que es nuevo para mi,pero de a poco.Esta puesto en la aplicacion web
  pero sigue en desarrollo.
  */

let personasCopia = []
let personas = []


class Persona {
  constructor(nombre, apellido, edad, telefono) {
    this.nombre = nombre
    this.apellido = apellido
    this.edad = edad
    this.telefono = telefono
  }
}
function saludar() {
  console.log("Bienvenido")
}
let formulario = document.querySelector("form");
formulario.addEventListener('submit', function (event) {
  event.preventDefault();
  obtenerValores();
});

for (let i = 0; i < boton.length; i++) {
  boton[i].addEventListener('click', saludar)
};

function obtenerValores() {
  let nombre = document.getElementById("nombre").value
  let apellido = document.getElementById("apellido").value
  let edad = document.getElementById("edad").value
  let telefono = document.getElementById("telefono")

  const nuevaPersona = new Persona(nombre, apellido, edad, telefono)
  personas.push(nuevaPersona)

  console.log("Persona agregada:", nuevaPersona);
  console.log("Lista de personas:", personas);
  copiaPersonas();
}

function copiaPersonas() {
  personasCopia = personas.map((x) => {       /*Creo una copia de la lista de personas para trabajar en una copia y agregarle direccion*/
    return {
      nombre: x.nombre,
      apellido: x.apellido,
      edad: x.edad,
      telefono: x.telefono
    }
  })
  console.log("Copia de personas:", personasCopia);

}

/* ENTREGA 2 CON DOM,EVENTOS, JSON y STORAGE */
let numero = prompt("Ingrese el numero :\n 1: Mates Disponibles \n 2: Hace tu pedido! \n 3: Salir")

let stockDeMatesCopia = []

class Mate {
  constructor(id, modelo, color, precio, stock) {
    this.id = id
    this.modelo = modelo
    this.color = color
    this.precio = precio
    this.stock = stock
  }
}
let stockDeMates = [{ id: 1, modelo: "imperial", color: "negro", precio: 12000, stock: 15 },
{ id: 2, modelo: "camionero", color: "negro", precio: 9900, stock: 5 },
{ id: 3, modelo: "torpedo", color: "negro", precio: 11499, stock: 12 },
{ id: 4, modelo: "bocon", color: "negro", precio: 7499, stock: 7 }]

for (const x of stockDeMates) {
  let contenedor = document.createElement("div");

  contenedor.innerHTML = `<h3> ID: ${x.id}</h3>
                          <p>  Producto: ${x.modelo}</p>
                          <b> $ ${x.precio}</b>`;
  document.body.appendChild(contenedor);

  let uno = document.getElementsByClassName("uno").value
  let dos = document.getElementsByClassName("dos").value
  let tres = document.getElementsByClassName("tres").value

  let numero = document.getElementById("numero").value
  while (numero === "" || isNaN(numero)) {

    console.log("Vuelva a intentarlo")
    break

  }

  switch (numero) {
    case "1":
      stockParaConsulta()
      break

    case "2":
      pedidoDeMate()
      console.log("Su pedido ha sido procesado")
      break

    case "3":
      console.log("Nos vemos,que tenga un buen dia")
      break

    default:
      console.log("Entrada no valida")
  }
  function stockParaConsulta() {
    stockDeMatesCopia = stockDeMates.map((x) => {
      return {
        modelo: x.modelo,
        color: x.color,
        precio: x.precio * 1.21
      }
    })
    console.log(stockDeMatesCopia)

    let modeloMate = prompt("Ingrese el modelo que desea").toLocaleLowerCase()
    const mateEncontrado = stockDeMatesCopia.find(x => x.modelo == modeloMate)

    if (mateEncontrado) {
      console.log('Tenemos en Stock el mate: ', modeloMate);
    } else {
      console.log('No lo tenemos en stock,pero puede realizar un pedido');
    }
  }
  function pedidoDeMate() {
    const modelo = prompt("Ingrese el modelo de mate que desea:")
    const color = prompt("Ingrese el color:")
    const nuevoMate = new Mate(stockDeMates.length + 1, modelo, color, 0, 0);

    if (pedidoDelCliente(nuevoMate)) {
      console.log("Pedido realizado con éxito");
    } else {
      console.log("Error al realizar el pedido");
    }
  }

  function pedidoDelCliente(pedido) {
    stockDeMatesCopia.push(pedido)
    return true;
  }
  console.log(stockDeMatesCopia)



}

