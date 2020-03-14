


    var nombre1 = document.getElementById("nombre");
    var DNI1 = document.getElementById("DNI");
    var agregar1 = document.getElementById("agregar")
    agregar1.addEventListener('click', CambioColor); //evento ocurre al alejarse el mouse del boton
    
    function CambioColor(){
        
            agregar1.style.backgroundColor = "white";
            agregar1.style.color = "blue";
            agregar1.style.fontWeight = "bold";
            console.log("se aleja del raton") ;
    
    
    }
    
    function entrada(nombre1, DNI1){
        return 'hola' +nombre1 + DNI1;
        console.log("asdasdas");
    }
    alumno.innerHTML = "entrada(nombre)";
    console.log("ass");
    console.log(nombre1);
    console.log(DNI1);
    localStorage.setItem("Nombre",nombre1);
    localStorage.setItem("DNI",DNI1);