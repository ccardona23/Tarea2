'use stict'

function anadir (){

    var elemento = document.createElement("li");
    var texto= document.createTextNode(prompt("Ingresar el contenido que desea agregar",texto));
   
    
    elemento.appendChild(texto);
    
    var lista= document.getElementById("lista");
    lista.appendChild(elemento);

    }

function eliminar (){
        var cont = document.getElementById("lista");
        var hijo = cont.firstChild;
        cont.removeChild(hijo);

  }


function modificar (){

            var elemento = document.createElement("li");
            var texto= document.createTextNode(prompt("Ingresar el contenido que desea modificar",texto));
            
            elemento.appendChild(texto);

            var padre = document.getElementsByTagName("li")[2].parentNode,
            referencia =document.getElementsByTagName("li")[2];
            padre.replaceChild(elemento,referencia);

   }

