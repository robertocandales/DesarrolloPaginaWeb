
/**
     * Array con las imagenes y enlaces que se iran mostrando en la web
     */
    var imagenes=new Array(
        ['picture/1.jpg','picture/4.jpg'],
        ['picture/2.jpg','picture/3.jpg'],
        ['picture/3.jpg','picture/3.jpg'],
        ['picture/4.jpg','picture/4.jpg/']
    );
      

    var contador=0;
 
    /**
     * Funcion para cambiar la imagen y link
     */
    function rotarImagenes()
    {
        // cambiamos la imagen y la url
        contador++
        document.getElementById("imagen").src=imagenes[contador%imagenes.length][0];
        document.getElementById("link").href=imagenes[contador%imagenes.length][1];
    }
 
    /**
     * Función que se ejecuta una vez cargada la página
     */
    onload=function()
    {
        // Cargamos una imagen aleatoria
        rotarImagenes();
 
        // Indicamos que cada 5 segundos cambie la imagen
        setInterval(rotarImagenes,2000);
    } 

    var boton1 = document.getElementById("boton1");
    boton1.addEventListener('mouseout', CambioColor); //evento ocurre al alejarse el mouse del boton

    function CambioColor(){
        
            boton1.style.backgroundColor = "white";
            boton1.style.color = "blue";
            boton1.style.fontWeight = "bold";
            console.log("se aleja del raton") ;
            //return boton1.style.backgroundColor;  

            if (boton2.style.backgroundColor === "grey"){

                boton2.style.backgroundColor = "black";
                boton2.style.color = "blue";
                
    
            }
         
    }

    var boton2 = document.getElementById("boton2"); //evento ocurre al hacer click en boton
    boton2.addEventListener('click', CambioColor1);

    function CambioColor1(){

        boton2.style.backgroundColor= "grey";
        boton2.style.color = "white";

        
        console.log("click raton");

        if (boton1.style.backgroundColor === "white"){

            boton1.style.backgroundColor = "black";
            boton1.style.color = "snow";
            boton1.style.fontWeight = "lighter";

        }
    }

    // todo esto se usa para leer un archivo externo
    var contenido = document.querySelector('#contenido')
    function traer(){
        fetch('texto.txt')
        .then(data => data.text()) //transformamos el dato en formato que se pueda leer
        .then(data=>{  // ya data tiene el txt en un formato que se puede leer
            console.log(data)
        })
    }

    // todo esto se usa para leer un archivo externo
   // var contenido = document.querySelector('#contenido') // querySelector Devuelve el primer elemento del documento
    //function traer(){
    //    fetch('texto.txt')
      //  .then(data => data.text()) //transformamos el dato en formato que se pueda leer
        //.then(data=>{  // ya data tiene el txt en un formato que se puede leer
         //   console.log(data)
       // })
   // }

    // todo esto se usa para leer api publico
   var contenido = document.querySelector('#contenido')
    function traer(){
        fetch('https://randomuser.me/api/')
        .then(res => res.json()) //transformamos el dato en formato que se pueda leer
        .then(data => {  // ya data tiene el txt en un formato que se puede leer
            console.log(data.results['0'])
            contenido.innerHTML = ` <img src="${data.results['0'].picture.large}" width="100px" class="img-fluid rounded-circle" >
            <p >
            Name: ${data.results['0'].name.first} 
            
            </p>
            <p >
            Last Name: ${data.results['0'].name.last} 
            </p>

            <p >
            Coutry: ${data.results['0'].location.country} 
            </p> `
        })
    }

    // Uso de localStorage
    // SET => Guardando
    // GET => Obtener

    const nombre = 'Roberto';
    localStorage.setItem('nombreUsuario',nombre); // a nombreUsuario le pasamos la variable nombre



   // var myElement = document.getElementById("boton1");
    //myElement.innerHTML = "Cambio";
    //myElement.innerHTML = "Boton";

   

