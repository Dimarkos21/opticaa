const nombre = document.querySelector("#Nombre")
const numero = document.querySelector("#Numero")
const cedula = document.querySelector("#Cedula")
const monto = document.querySelector("#Monto")
const contenedor2 = document.querySelector("#contenedor2")
const botonMenu = document.querySelector("#boton-menu")
const datos1 = document.querySelector("#datos1")
const HomeBtn = document.querySelector("#Home-btn")
const RegistroBtn = document.querySelector("#Registro-btn")
const MensajeBtn = document.querySelector("#mensaje-btn")
const boton = document.querySelector("#boton")
const datos = document.querySelector("#datos")
const configDelete = document.querySelector("#config-delete")
const ProductosBtn = document.querySelector("#producto-btn");

botonMenu.addEventListener("click" , e => {
 
const menuDesplegable = document.querySelector("#menu-desplegable")
const container2 = document.querySelector("#menu-desplegable")
if ( container2.classList.contains("visible") ===true) {
    container2.classList.remove("visible")
    console.log(menuDesplegable)
}else {  console.log("hdd")
    container2.classList.add("visible")}

})




const ul = document.querySelector('ul');
const form = document.querySelector('#form');

//funcion para mandar mensajes
//funcion para mandar mensajes

const opciones = document.querySelector("#opciones");
const Mensajes = document.querySelector("#Mensaje")
const info = document.querySelector("#info")
boton.addEventListener("click", e => 
{
if (Mensajes.value === "")
{console.log("no puedes enviar mensajes")}




}


)

//funcion para mandar mensajes
// Contadores de tareas



        
    // Menu despegable 

// Menu despegable 

HomeBtn.addEventListener("click", e => {
    window.location.pathname = "/Casa"

})
RegistroBtn.addEventListener("click", e => {
    window.location.pathname = "/Inventario"

})
ProductosBtn.addEventListener("click", e => {
    window.location.pathname = "/Productos"

})

MensajeBtn.addEventListener("click", e => {
    window.location.pathname = "/Mensajes"

})


        // validacion de los input que no esten vacios

