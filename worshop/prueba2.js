


    
const formularioUI = document.getElementById('formulario');
const formularioUI1 = document.getElementById('formulario1');
const formularioUI2 = document.getElementById('formulario2');
const formularioUI3 = document.getElementById('formulario3');
const alumno = document.getElementById('alumno'); // para mostrar
const alumnoDni = document.getElementById('alumnoDni'); // para mostrar
const nombre = document.getElementById('nombre'); // para obtener del INPUT de  nombre
const dni = document.getElementById('dni'); // para obtener del INPUT de dni
const apellido = document.getElementById('apelldi'); // para obtener del INPUT de apellido
const email = document.getElementById('email'); // para obtener del INPUT de email
const buscar = document.getElementById('buscar'); // para obtener del INPUT de buscar
const listaDeActividades = document.getElementById('listaDeActividades');
const listaDeActividades1 = document.getElementById('listaDeActividades1');
const botonEliminar = document.getElementById('eliminar');
const botonAgregar = document.getElementById('agregar');
const botonBuscar = document.getElementById('botonBuscar')
const eliminarDni = document.getElementById('eliminarDni');



//console.log(alumno);
let = arrayDe = []; //array de objetos

    
   // FUNCIONES

function eliminar(){
     let eliminarDni = document.getElementById('eliminarDni').value;
     let indice;
     let eliminado;
     //console.log(eliminarDni)
    
     formularioUI1.reset();


     arrayDe.forEach(function(element, indexArray){
          //console.log(element.dni);
          if(element.dni === eliminarDni){
              // console.log('eliminar2');
               indice = indexArray; // contener la osicion del vector
              // console.log(indice);  
              eliminado = element.dni;  
          }
          
     });

     if(eliminado === eliminarDni){
          arrayDe.splice(indice,1);
          GuardarDB();
     }
     
     botonEliminar.disabled = true;
}
   
   
const CrearItem = (nombre, dni, apellido, email) => {
     let = item = { //objetos
          nombre: nombre,
          dni: dni,
          apellido : apellido,
          email: email              
     }

     arrayDe.push(item); // colocar los objetos al final del array

     return item;
     
}

const GuardarDB = () => {
    
     localStorage.setItem('key', JSON.stringify(arrayDe)); // JSON.stringify(arrayDe)) para llevarlo a texto pero en formato JSON
     LeerLS();
}

const LeerLS = () => {
    
     listaDeActividades.innerHTML = ''; // para limpiar el div donde se encuetra los id para mostrar alumno y
   
     arrayDe = JSON.parse(localStorage.getItem('key'));
     //console.log(arrayDe);

     if(arrayDe === null){
          arrayDe = [];
     }else{

          arrayDe.forEach(element => { // ciclo for
              //console.log(element.nombre);
              //console.log(element.dni);
                                  
                    listaDeActividades.innerHTML += `<h6 id="alumno"> <b>Nombre:</b>  ${element.nombre}  ${element.apellido}</h6> 
                    <div></div><h7 id="alumnoDni">  <b> DNI:</b> ${element.dni}</h7></div>
                    <div><h7 id="alumnoDni"> <b> email:</b> ${element.email}</h7></div>`; //string literales             
                  
          });
      }     
}
     

     botonAgregar.addEventListener('click', evento);


          
          function evento(){
         // evento.preventDefault(); // para que no refresque la pagina
          let nombre = document.getElementById('nombre').value;  // .value para capturar el valor del input
          let dni = document.getElementById('dni').value;
          let apellido = document.getElementById('apellido').value;
          let email = document.getElementById('email').value;
         // let buscar = document.getElementById('buscar').value;
          let botonAgregar = document.getElementById('agregar');


          CrearItem(nombre, dni, apellido, email); // mandar ambas variables a la funcion
          //CrearItem(dni);
          GuardarDB();
          
          //formularioUI.reset();
          //formularioUI1.reset();
          formularioUI2.reset();
         document.getElementById('valid').innerHTML = "Invalido"; // para deshabilitar el boton de nuevo
         botonAgregar.disabled = true;
          
          }
     
function buscarPalabra(){
     
     //console.log('buscar1');
     let buscar = document.getElementById('buscar').value;
     let encontrar, index2, encontrar1;

     
     listaDeActividades1.innerHTML = '';
    

     arrayDe.forEach(function(element, indexArray){
         // console.log(element.nombre);
         // console.log(buscar);
        
          encontrar = element.nombre.indexOf(buscar); // variable para validar si encontro una coincidencia
          encontrar1 = element.apellido.indexOf(buscar); // si conidice variable = 0, caso contario = -1
          
         // console.log(index1);
          if((encontrar === 0 && buscar.length !== 0) || (encontrar1 === 0 && buscar.length !== 0)){
              // console.log("Encontro algo");
               index2 = indexArray;
              // console.log("index" + index2);
               listaDeActividades1.innerHTML += ` <form id = "formulario3" >  <h6 id="alumno"> Nombre: <b> ${element.nombre}</b> <b> ${element.apellido}</b> </h6> 
               <div></div><h7 id="alumnoDni">  DNI: ${element.dni}</h7></div>
               <div><h7 id="alumnoDni">  email: ${element.email}</h7></div>  </form> `; //string literales

          }

          
     });
     

}

email.addEventListener('keyup', () => {  // evento para habilitar el boton

     if(nombre.value.length >= 3 && dni.value.length >= 2 && dni.value >= 2 && document.getElementById('valid').innerHTML === "Valid" && email.value.length >= 2){
          botonAgregar.disabled = false;
     }else{
          botonAgregar.disabled = true;
     }

});

email.addEventListener('keyup', () => {  // evento para evaluar email

     
   
     let regx = /^[a-zA-Z0-9.-]{3,30}@[a-zA-Z]{2,10}\.[a-z]{2,6}$/; //caracteres validos para el input email
     let y;
     //
     if(regx.test(email.value)){
          console.log("prueba");
          document.getElementById('valid').innerHTML = "Valid";
          document.getElementById('valid').style.visibility = "visible";
          document.getElementById('valid').style.color = "white";
          y = 1;
          console.log(regx.test(email.value));

     }else{
          console.log("prueba 2");
          
          document.getElementById('valid').innerHTML = "Invalido";
          document.getElementById('valid').style.visibility = "visible";
          document.getElementById('valid').style.color = "red";  
          console.log(regx.test(email.value));
         
     }

});


eliminarDni.addEventListener('keyup', () => {  // evento para habilitar el boton de agregar alumnos
     
     
     if(eliminarDni.value.length >= 4 && eliminarDni.value >= 4){
          botonEliminar.disabled = false;
     }else{
          botonEliminar.disabled = true;
     }

});


     
document.addEventListener('DOMContentLoaded', LeerLS);

botonEliminar.addEventListener('click', eliminar); // procedimiento para eliminar

botonBuscar.addEventListener('click', buscarPalabra); // procedimiento para buscar
          




     