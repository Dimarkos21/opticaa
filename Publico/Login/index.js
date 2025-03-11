const Correo = document.querySelector("#Correo")
const Contraseña = document.querySelector("#Contraseña")
const form = document.querySelector('#contenedor1');

form.addEventListener('submit', async e => {
    e.preventDefault();
    // utilizamos axios para comunicar el front con el back y el try catch para que sea un evento asyncrono porque no sabemos cuando tiempo va a tardar para enviar una respuesta.
    try {
        const user = {
           email: Correo.value,
          password: Contraseña.value
        }
        await axios.post('/api/login', user);
  window.location.pathname = "/Casa"
        // rederigir al usuario a la pagina de todos cuando inicien sesion correctamente
      
    } catch (error) {
        console.log(error);
    }
    
    
   
})