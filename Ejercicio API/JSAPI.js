let URLpersonajes= 'https://www.breakingbadapi.com/api/characters';
let urlFiltrarCategoria = 'https://www.breakingbadapi.com/api/characters?category=Better+Call+Saul';
let urlFiltrarNombre = 'https://www.breakingbadapi.com/api/characters?name=Walter+White';

const buscador = document.getElementById("buscador");
const selectCategorias = document.getElementById("categorias");
const contenedorPersonajes = document.getElementById('contenedorPersonajes');
const formulario = document.getElementById("formularioBusqueda");

async function obtenerJSON(url){
  const respuesta = await fetch(url);
  const json = await respuesta.json();
  return json;
}

function recargarListaPersonajes(personajes){
	contenedorPersonajes.innerHTML = "";

	personajes.forEach((personaje) => {
		const personajeElement = document.createElement("div");
		personajeElement.classList.add("receta");

		
			personajeElement.innerHTML = `
			<h3 class="titleReceta">${personaje.name}</h3>
			<img class="imgReceta" src=${personaje.img}></img>
		`;

		contenedorPersonajes.appendChild(personajeElement);

	});
}

function filtrarPorCategoria(){

	var categoria = selectCategorias.value;

	obtenerJSON(urlFiltrarCategoria + categoria).then(json => { 
		console.log(json);
		recargarListaPersonajes(json);
	});
}
function filtrarPorNombre(palabra){

	obtenerJSON(urlFiltrarNombre + palabra).then(json => { 
		console.log(json);
		recargarListaPersonajes(json);
	});
}

	formulario.addEventListener("submit", (event) => {
	event.preventDefault(); //Previene autorecargar la página
	const palabra = buscador.value;
	if(palabra){
		filtrarPorNombre(palabra);
		palabra.value = "";
	}
});


 obtenerJSON(URLpersonajes).then(json => { 
	for(var i=0; i<json.length; i++){

		var valor = json[i].name;
		var opcion = document.createElement('option');
		opcion.appendChild( document.createTextNode(valor) );
		opcion.value = valor;
		selectCategorias.appendChild(opcion);

	}
	filtrarPorCategoria();

});


