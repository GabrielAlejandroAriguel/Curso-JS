/*Hola Mati!!!.Como estas?

Resumen del codigo:

De la primer entrega me quedo con la idea del e-commerce de mates,reutilizo el switch,los mates pasan de ser variables a objetos.

En esta segunda entrega,lo que me propuse como desafio es utilizar metodos de array ,como es el caso del find,el cual
utilice para comprobar que el modelo de mate que desea el cliente esta en existencia(deberia corroborarlo por el atributo 
stock y no por el atributo modelo,pero no se bien como hacerlo).En el caso de que el modelo no se encuentre,se podria utilizar 
la segunda opcion que es para realizar un pedido y que este se agregue a la COPIA de la lista de mates a traves del metodo
push.Los mates tienen valor de costo en el array original(stockDeMates) y los cambios los realizo en una copia 
de este array utilizando el metodo map (stockParaConsulta) en la cual le agrego el iva y agrego el pedido del cliente.

Saludos!
*/

console.log("Bienvenido a VIZOL, donde tu mate te encuentra a vos");

let stockDeMatesCopia=[]

class Mate {
  constructor(id, modelo, color, precio, stock) {
    this.id = id
    this.modelo = modelo
    this.color = color
    this.precio = precio
    this.stock = stock
  }
}
let stockDeMates = [{id:1,modelo:"imperial",color:"negro",precio:12000,stock:15},
                    {id:2,modelo:"camionero",color:"negro",precio:9900,stock:5},
                    {id:3,modelo:"torpedo",color:"negro",precio:11499,stock:12},
                    {id:4,modelo:"bocon",color:"negro",precio:7499,stock:7}]

let numero =prompt("Ingrese el numero :\n 1: Mates Disponibles \n 2: Hace tu pedido! \n 3: Salir")


while (numero === "" || isNaN(numero) ) {

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
      numero =console.log(prompt("Ingrese el numero :\n 1: Mates Disponibles \n 2: Hace tu pedido! \n 3: Salir"))
}
function stockParaConsulta(){
  stockDeMatesCopia=stockDeMates.map((x)=>{
    return{
      modelo:x.modelo,
      color:x.color,
      precio:x.precio *1.21
    }
  })
  console.log(stockDeMatesCopia)

  let modeloMate =prompt("Ingrese el modelo que desea").toLocaleLowerCase()
  const mateEncontrado=stockDeMatesCopia.find(x=>x.modelo==modeloMate)

  if (mateEncontrado) {
    console.log('Tenemos en Stock el mate: ', modeloMate);
  } else {
    console.log('No lo tenemos en stock,pero puede realizar un pedido');
  }
}
function pedidoDeMate(){
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