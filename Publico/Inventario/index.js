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


// Contadores de tareas

(async () => {
    try {
        const { data } = await axios.get('/api/todos');
        data.forEach(todo => {
            const tabla = document.querySelector("#datos");
            const listItem = document.createElement('div');
            listItem.id = todo.id;
            
            listItem.innerHTML += `

            
            <div id="p-datos">
               <input class="input-datos" value="${todo.nombre}"></input>
                <input class="input-datos" value="${todo.numero}"></input>
                <input class="input-datos" value="${todo.cedula}"></input>
                  <input class="input-datos" value="${todo.monto}"></input>
                
                  
                 <div id="config-container">



 
 </div>

 
 <button id="config-delete"> 
                 <script src="https://cdn.lordicon.com/lordicon.js"></script>
<lord-icon
    src="https://cdn.lordicon.com/zxvuvcnc.json"
    trigger="hover"
    style="width:30px;height:30px">
</lord-icon>
 </button>

  <button id="config">   


<script src="https://cdn.lordicon.com/lordicon.js"></script>
<lord-icon
    src="https://cdn.lordicon.com/lomfljuq.json"
    trigger="hover"
    style="width:30px;height:30px">
</lord-icon>

 </button>
                </div>
               
                
             
            `;

         

            tabla.appendChild(listItem);

           
        });
    } catch (error) {
        console.error('Error al cargar tareas:', error);
        window.location.pathname = '/login';
    }
})();








// Cargar las tareas desde el servidor cuando se inicia la aplicación


form.addEventListener("submit", async e => {
    e.preventDefault();


    try {
    
        const { data } = await axios.post('/api/todos', { nombre: nombre.value , numero: numero.value ,cedula: cedula.value ,monto: monto.value });

  
      const d = [{ nombre: nombre.value , numero: numero.value ,cedula: cedula.value ,monto: monto.value }]
        d.forEach(todo => {

            const tabl2 = document.querySelector("#datos")
            const listItem = document.createElement('div');
            listItem.id = data.id; // Usar _id
           
            listItem.innerHTML += `
           
       <div id="p-datos">
               <input class="input-datos" value="${todo.nombre}"></input>
                <input class="input-datos" value="${todo.numero}"></input>
                <input class="input-datos" value="${todo.cedula}"></input>
                  <input class="input-datos" value="${todo.monto}"></input>
                
                  
                 <div id="config-container">


 
 
 </button>
 
 </div>
<button id="config-delete"> 
                 <script src="https://cdn.lordicon.com/lordicon.js"></script>
<lord-icon
    src="https://cdn.lordicon.com/zxvuvcnc.json"
    trigger="hover"
    style="width:30px;height:30px">
</lord-icon>
 </button>

  <button id="config">   


<script src="https://cdn.lordicon.com/lordicon.js"></script>
<lord-icon
    src="https://cdn.lordicon.com/lomfljuq.json"
    trigger="hover"
    style="width:30px;height:30px">
</lord-icon>


                </div>

            `; 

            tabl2.appendChild(listItem);
           
            }
      
      
    );
    document.querySelector('#form').reset();
    } catch (error) {
        console.error('Error al agregar tarea:', )}})

        
        document.addEventListener("DOMContentLoaded", () => {
            document.addEventListener("click", async e => {
                if (e.target && (e.target.id === "config-delete" || e.target.closest('#config-delete'))) {
                    e.preventDefault(); // Evita el comportamiento predeterminado del evento
        
                    try {
                        // Obtén y muestra el padre del botón
                        const boton = e.target.closest('#config-delete');
                        const padre = boton.parentElement.parentElement;


                        console.log(padre.id); // Imprime el ID del div padre

                        await axios.delete(`/api/todos/${padre.id}`);
                      padre.remove();
                    } catch (error) {
                        console.error(error);
                    }
                }
            });
        });
        
        
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


    