function mostrar()
{
	// Opcion 1 por ID

	var nombre;
	var localidad;

	nombre = document.getElementById('elNombre').value;

	localidad = document.getElementById('laLocalidad').value;

	alert("usted es " +nombre+ " y vive en la localidad de " +localidad);

	// Opcion 2 por PROMPT
	
	/*

	var nombre;
	var localidad;

	nombre = prompt("Ingrese su nombre porfavor");

	localidad = prompt("Ingrese su localidad porfavor");
  
  	alert("usted es " +nombre+ " y vive en la localidad de " +localidad);

  	*/
}
