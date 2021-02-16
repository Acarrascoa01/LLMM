 function eliminarIcono(elemento){
 	//Esta función elimina el icono del html
 	elemento.remove();
 	 }

 	boton.onclick = ocultarBoton;


 	function ocultarBoton(){

 	 	
 	 	boton.remove();
 	 	setInterval (insertarIcono, 300);


}



 	
 function insertarIcono(){
//boton.classList.add("oculta");
 	//Creamos un nuevo elemento en el documento
 
const icono = document.createElement("div");
//Le añado al elemento la clase icono
icono.classList.add("icono");
//Añadir al contenido del elemento el icono
icono.innerHTML = "🎈";	
//Le asigno una posicion aleatoria
icono.style.left = Math.random() * 100 + "vw";

//Le asigno a cada icono una duracion aleatoria
icono.style.left = Math.random() * 2 + 3 + "s";



//Insertar el elemento creado dentro de la etiqueta body
document.body.appendChild(icono);
//Se va a llamar una sola vez a la funcion eliminarIcono
//a los 4 segundos de crearse
//y le va a pasar como parámetro el elemento icono
setTimeout (eliminarIcono, 3000, icono);

}

