

function mostrar(){

	const nombre = document.getElementById("nombre");
	const apellidos = document.getElementById("apellidos");
	const dni = document.getElementById("dni");
	const estado = document.getElementById("estado");
	const hobbys = document.getElementsByName("hobby");
	const nacimiento = document.getElementById("nacimiento");
	const condiciones = document.getElementById("condiciones");
	const resultado = document.getElementById("resultado");

	let hobbyElegido = "";
	let eleccionCondiciones = "No";




	for (var i = 0, length = hobbys.length; i < length; i++) {
		if (hobbys[i].checked) {
		   hobbyElegido = hobbys[i];
		   // Sólo un radio podrá estar seleccionado, por eso al encontrarlo salimos del bucle
		   break;
		}
	}

	if(condiciones.checked){
		eleccionCondiciones = "Sí";


	resultado.value = 
	"Nombre: " + nombre.value + 
	", apellidos: " + apellidos.value + 
	", dni: " + dni.value + 
	", estado actual: " + estado.value + 
	", fecha de nacimiento: " + nacimiento.value +
	" y hobby: " + hobbyElegido.value +
	". ¿Ha aceptado las condiciones? " + eleccionCondiciones;

	return false;
} 
}
boton.onclick = Eliminar;
function Eliminar() {
if (divArea.classList.contains("oculto")) {
divArea.classList.remove("oculto");

}


let Personas []
}
