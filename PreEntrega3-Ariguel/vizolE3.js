/*Hola Mati!Como

PARTE DE CREACION DEL USUARIO
  Carga los datos de la persona en el sessionstorage ,estoy viendo como puedo hacer un inicio de sesion pero lo veo complicado.
  Sigo trabajando en la parte de la pregunta del stock de mates para pasarlo a un formulario y trabajarlo desde el session y para 
  una compra desde el local storage.
  */

/*FORMULARIO DE USUARIO,PROXIMO INICIO DE SESION*/

let personasCopia = []
let personas = []
let nombre = ""
let apellido = ""
let edad = ""
let telefono = ""

class Persona {
  constructor(nombre, apellido, edad, telefono) {
    this.nombre = nombre
    this.apellido = apellido
    this.edad = edad
    this.telefono = telefono
  }
}

let formulario = document.getElementById("miFormulario");
formulario.addEventListener('submit', function (event) {
  event.preventDefault();
  obtenerValores();
  guardarPersonas();
});

function obtenerValores() {
  nombre = document.getElementById("nombre").value
  apellido = document.getElementById("apellido").value
  edad = document.getElementById("edad").value
  telefono = document.getElementById("telefono").value

  const nuevaPersona = new Persona(nombre, apellido, edad, telefono)
  personas.push(nuevaPersona)
  console.log("Persona agregada:", nuevaPersona);
  console.log("Lista de personas:", personas);
}
function guardarPersonas() {
  personasCopia = personas.map((x) => {
    return {
      nombre: x.nombre,
      apellido: x.apellido,
      edad: x.edad,
      telefono: x.telefono
    }
  })
  const personasCopiaJSON = JSON.stringify(personasCopia)
  sessionStorage.setItem("personasCopia", personasCopiaJSON)
  console.log("Copia de personas: ", personasCopia)

}
function guardarFormulario() {
  localStorage.setItem("nombre", nombre.value)
  localStorage.setItem("apellido", apellido.value)
  localStorage.setItem("edad", edad.value)
  localStorage.setItem("telefono", telefono.value)
}

function obtenerPersonasDesdeSessionStorage() {
  const personasCopiaJSON = sessionStorage.getItem('personasCopia');
  const personasCopia = JSON.parse(personasCopiaJSON);

  return personasCopia;
}

const personasRecuperadas = obtenerPersonasDesdeSessionStorage();
console.log(personasRecuperadas);


/* PARTE STOCK DE MATES ,CONSULTAS Y PEDIDOS */

let stockDeMates = [
  { id: 1, modelo: "imperial", color: "negro", precio: 12000, stock: 15 },
  { id: 2, modelo: "camionero", color: "negro", precio: 9900, stock: 5 },
  { id: 3, modelo: "torpedo", color: "negro", precio: 11499, stock: 12 },
  { id: 4, modelo: "bocon", color: "negro", precio: 7499, stock: 7 }
];

document.getElementById("uno").addEventListener("click", event => {
  stockParaConsulta();
});

document.getElementById("dos").addEventListener("click", event => {
  pedidoDeMate();
});

function stockParaConsulta() {
  stockDeMatesCopia = stockDeMates.map(x => {
    return {
      modelo: x.modelo,
      color: x.color,
      precio: x.precio * 1.21
    };
  });
  console.log(stockDeMatesCopia);

  let modeloMate = prompt("Ingrese el modelo que busca").toLocaleLowerCase();

  const mateEncontrado = stockDeMatesCopia.find(x => x.modelo == modeloMate)

  if (mateEncontrado) {
    console.log('Tenemos en Stock el mate: ', modeloMate);
  } else {
    console.log('No lo tenemos en stock,pero puede realizar un pedido');
  }

  sessionStorage.setItem("stockDeMatesCopia", JSON.stringify(stockDeMatesCopia));
}

function pedidoDeMate() {
  modelo = prompt("Ingrese el modelo de mate que desea:");
  color = prompt("Ingrese el color:");
  const nuevoMate = new Mate(stockDeMatesCopia.length + 1, modelo, color, 0, 0);
  pedidoDelCliente()

  if (pedidoDelCliente(nuevoMate)) {
    console.log("Pedido realizado con éxito");
  } else {
    console.log("Error al realizar el pedido");
  }
}

function pedidoDelCliente() {
  stockDeMatesCopia.push(pedido);

  sessionStorage.setItem("stockDeMatesCopia", JSON.stringify(stockDeMatesCopia));

  return true;
}

const stockDeMatesCopiaJSON = sessionStorage.getItem("stockDeMatesCopia");
if (stockDeMatesCopiaJSON) {
  stockDeMatesCopia = JSON.parse(stockDeMatesCopiaJSON);
  console.log("Stock de mates cargado desde sessionStorage:", stockDeMatesCopia);
}