// input valor significativo
const Nombre = document.querySelector("#Nombre")

const Costo = document.querySelector("#Costo")

const Cantidad = document.querySelector("#Cantidad")
const Precio = document.querySelector("#Precio")

// demas elementos
const form = document.querySelector("#form")
const contenedor2 = document.querySelector("#contenedor2");
const botonMenu = document.querySelector("#boton-menu");
const datos1 = document.querySelector("#datos1");
const HomeBtn = document.querySelector("#Home-btn");
const RegistroBtn = document.querySelector("#Registro-btn");
const MensajeBtn = document.querySelector("#mensaje-btn");
const boton = document.querySelector("#boton");
const datos = document.querySelector("#datos");
const configDelete = document.querySelector("#config-delete");
const ProductosBtn = document.querySelector("#producto-btn");

// Agregar Producto con coste y fecha 



(async () => {
    try {
        const { data } = await axios.get('/api/productos');
        data.forEach(todo => {
            const tabla = document.querySelector("#datos");
            const listItem = document.createElement('div');
            listItem.id = todo.id;
            
            listItem.innerHTML += `

            <div id="p-datos">
               <input class="input-datos" value="${todo.nombre}"></input>
                <input class="input-datos" value="${todo.cantidad}"></input>
                <input class="input-datos" value="${todo.costo}"></input>
                  <input class="input-datos" value="${todo.precio}"></input>
                
                  
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

    if (!Nombre.value || !Cantidad.value || !Costo.value || !Precio.value) {
        return; // Detener el proceso si hay campos vacíos

        
    } else {

        try {
    
            const { data } = await axios.post('/api/productos', { nombre: Nombre.value , cantidad: Cantidad.value ,costo: Costo.value,precio: Precio.value });
        
            console.log({
                nombre: Nombre.value,
                cantidad: Cantidad.value,
                costo: Costo.value,
                precio: Precio.value
            });
            
      
          const d = [{  nombre: Nombre.value , cantidad: Cantidad.value ,costo: Costo.value, precio: Precio.value  }]
            d.forEach(todo => {
    
                const tabl2 = document.querySelector("#datos")
                const listItem = document.createElement('div');
                listItem.id = data.id; // Usar _id
               
                listItem.innerHTML += `
               
           <div id="p-datos">
                   <input class="input-datos" value="${todo.nombre}"></input>
                    <input class="input-datos" value="${todo.cantidad}"></input>
                    <input class="input-datos" value="${todo.costo}"></input>
                      <input class="input-datos" value="${todo.precio}"></input>
                    
                      
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
            
                console.error('Error al guardar el producto:', error); // Agrega este 
                }
    }
    
   })

    



   // eliminar productos  
   // 
    document.addEventListener("DOMContentLoaded", () => {
            document.addEventListener("click", async e => {
                if (e.target && (e.target.id === "config-delete" || e.target.closest('#config-delete'))) {
                    e.preventDefault(); // Evita el comportamiento predeterminado del evento
        
                    try {
                        // Obtén y muestra el padre del botón
                        const boton = e.target.closest('#config-delete');
                        const padre = boton.parentElement.parentElement;


                        console.log(padre.id); // Imprime el ID del div padre

                        await axios.delete(`/api/productos/${padre.id}`);

                        console.log
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
        botonMenu.addEventListener("click" , e => {
 
            const menuDesplegable = document.querySelector("#menu-desplegable")
            const container2 = document.querySelector("#menu-desplegable")
            if ( container2.classList.contains("visible") ===true) {
                container2.classList.remove("visible")
                console.log(menuDesplegable)
            }else {  console.log("hdd")
                container2.classList.add("visible")}
            
            })
            