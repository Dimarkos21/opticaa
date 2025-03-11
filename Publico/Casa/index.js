const HomeBtn = document.querySelector("#Home-btn")
const RegistroBtn = document.querySelector("#Registro-btn")
const contenedor2 = document.querySelector("#contenedor2")
const botonMenu = document.querySelector("#boton-menu")
const RegistroImg = document.querySelector("#Registro-img")
const ProductosBtn = document.querySelector("#producto-btn");
const MensajeBtn = document.querySelector("#mensaje-btn");

botonMenu.addEventListener("click" , e => {
 
const menuDesplegable = document.querySelector("#menu-desplegable")
const container2 = document.querySelector("#menu-desplegable")
if ( container2.classList.contains("visible") ===true) {
    container2.classList.remove("visible")
    console.log(menuDesplegable)
}else {  console.log("hdd")
    container2.classList.add("visible")}

})

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





//estadisticas

(async () => {
  try {
      const { data } = await axios.get('/api/todos');
      
      data.forEach(todo => {

          const tabla = document.querySelector("#datos");
          const listItem = document.createElement('div');
          listItem.id = todo.id;
          
          listItem.innerHTML += `
<p>${todo.nombre} </p>
        
           
          `;

       

          tabla.appendChild(listItem);

         
      });
  } catch (error) {
      console.error('Error al cargar tareas:', error);
      window.location.pathname = '/login';
  }
})();
