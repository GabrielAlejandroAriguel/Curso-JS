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

// function stock() {
//   fetch(`stockDeMates.json`)
//     .then((respuesta) => respuesta.json())
//     .then((data) => {
//       stockDeMates = data.stockDeMates;
//       stockDeMates.forEach((x) => {
//         const id = x.id;
//         const modelo = x.modelo;
//         const color = x.color;
//         const precio = x.precio;
//         const stock = x.stock;

//         stockDeMates.push(id, modelo, color, precio, stock);
//       });
//     })
//     .catch((error) => {
//       console.error("Error al crear el stock de mates:", error);
//     });
// }

let stockDeMates = [
  { id: 1, modelo: "Imperial", color: "negro", precio: 12000, stock: 15 },
  { id: 2, modelo: "Camionero", color: "negro", precio: 9900, stock: 5 },
  { id: 3, modelo: "Torpedo", color: "negro", precio: 11499, stock: 12 },
  { id: 4, modelo: "Bocón", color: "negro", precio: 7499, stock: 7 }
];

let carrito = [];

document.addEventListener('DOMContentLoaded', function () {
  const botonComprar = document.getElementById('boton-comprar');

  if (botonComprar) {
    botonComprar.addEventListener('click', function () {
      mostrarResumenCompra(carrito);
    });
  } else {
    console.error("El elemento 'boton-comprar' no se encontró en el DOM.");
  }

  function mostrarResumenCompra(carrito) {
    let resumen = "Resumen de su compra:\n";
    let total = 0;

    carrito.forEach(item => {
      resumen += `${item.modelo} x${item.cantidad} - $${item.precio * item.cantidad}\n`;
      total += item.precio * item.cantidad;
    });

    resumen += `\nTotal: $${total.toFixed(2)}`;

    Swal.fire({
      title: 'Resumen de Compra',
      text: resumen,
      showCancelButton: true,
      cancelButtonText: 'Salir',
      confirmButtonText: 'Comprar',
      confirmButtonColor: '#1b5541',
      cancelButtonColor: 'black',
    }).then((result) => {
      if (result.isConfirmed) {
        finalizarCompra();
      }
    });
  }


  function finalizarCompra() {
    Swal.fire({
      title: 'Compra Realizada',
      text: '¡Gracias por su compra!',
      confirmButtonText: 'Salir',
      confirmButtonColor: '#1b5541',
    }).then(() => {
      carrito = [];
      actualizarCarrito();
    });
  }

  document.getElementById('vaciar-carrito').addEventListener('click', function () {
    carrito = [];
    actualizarCarrito();
  });

  function agregarAlCarrito(id) {
    const mate = stockDeMates.find(x => x.id === id);

    if (mate && mate.stock > 0) {

      const index = carrito.findIndex(x => x.id === id);

      if (index !== -1) {
        carrito[index].cantidad++;
      } else {
        carrito.push({
          id: mate.id,
          modelo: mate.modelo,
          precio: mate.precio,
          cantidad: 1
        });
      }

      mate.stock--;

      stockParaConsulta();
      actualizarCarrito();
    } else {
      Swal.fire({
        title:
          'Stock agotado. Puede realizar un pedido o esperar al jueves de la semana que viene, en una de esas llega. Somos una página sincera.',
        showClass: {
          popup: 'animate__animated animate__fadeInDown'
        },
        hideClass: {
          popup: 'swal2-hide',
          backdrop: 'swal2-backdrop-hide',
          icon: 'swal2-icon-hide',
        }
      });
    }
  }

  function actualizarCarrito() {
    const listaCarrito = document.getElementById('lista-carrito');
    const totalElement = document.getElementById('total');

    listaCarrito.innerHTML = "";

    let total = 0;

    carrito.forEach(item => {
      const listItem = document.createElement('li');
      listItem.textContent = `${item.modelo} x${item.cantidad} - $${item.precio * item.cantidad}`;
      listaCarrito.appendChild(listItem);
      total += item.precio * item.cantidad;
    });

    totalElement.textContent = `Total: $${total.toFixed(2)}`;
  }

  function stockParaConsulta() {
    console.log("Stock actualizado:", stockDeMates);
  }

  function manejarClick(id) {
    Swal.fire({
      title: '¿Desea agregarlo al carrito?',
      icon: 'question',
      showCancelButton: true,
      confirmButtonColor: '#1b5541',
      cancelButtonColor: 'black',
      confirmButtonText: 'Confirmar'
    }).then((result) => {
      if (result.isConfirmed) {
        agregarAlCarrito(id);
      }
    });
  }

  document.getElementById('agregarImperial').addEventListener('click', function () {
    manejarClick(1);
  });

  document.getElementById('agregarCamionero').addEventListener('click', function () {
    manejarClick(2);
  });

  document.getElementById('agregarTorpedo').addEventListener('click', function () {
    manejarClick(3);
  });

  document.getElementById('agregarBocon').addEventListener('click', function () {
    manejarClick(4);
  });

  const botonPedido = document.querySelector(".dos");

  if (botonPedido) {
    botonPedido.addEventListener('click', function () {
      realizarPedido();
    });
  } else {
    console.error("El elemento 'dos' no se encontró en el DOM.");
  }

  function realizarPedido() {
    const modelo = document.getElementById("modelo").value;
    const color = document.getElementById("color").value;

    Swal.fire({
      title: 'Pedido Realizado',
      text: 'Su pedido fue procesado con éxito, le pediremos unos datos de contacto',
      confirmButtonText: 'Ingresar Datos',
    }).then((result) => {
      if (result.isConfirmed) {
        const formularioPersona = document.getElementById("miFormulario");
        formularioPersona.style.display = "block";

        document.getElementById("enviarFormulario").addEventListener('click', function () {
          enviarFormulario();
        });
      } else {
        const formularioPersona = document.getElementById("miFormulario");
        formularioPersona.style.display = "none";
        Swal.close();
      }
    });
  }

  function enviarFormulario() {
    const nombre = document.getElementById("nombre").value;
    const apellido = document.getElementById("apellido").value;
    const edad = document.getElementById("edad").value;
    const telefono = document.getElementById("telefono").value;
    obtenerValores();
    guardarPersonas();

    Swal.fire({
      title: 'Datos enviados',
      text: '¡Gracias por proporcionar tus datos!',
    }).then(() => {
      const formularioPersona = document.getElementById("miFormulario");
      formularioPersona.style.display = "none";
      Swal.close();
    })
  }
});
