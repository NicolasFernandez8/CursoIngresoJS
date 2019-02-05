/*Debemos lograr tomar nombre y edad por ID y mostrarlos concatenados 
ej.: "Usted se llama José y tiene 66 años" 	*/
function mostrar()
{	
	var nombre;
	
	var edad;

	nombre = prompt("Ingrese su nombre porfavor");

	edad = prompt("Ingrese su edad porfavor");

	nombre = document.getElementById('elNombre').value;

	edad = document.getElementById('laEdad').value;

	edad = parseInt(edad);

	alert("Su nombre es: " +nombre+ " y su edad es: "+edad);
	
}

