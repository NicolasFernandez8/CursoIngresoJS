function mostrar()
{
	var edad;
	var localidad;
	var nombre;
	var apellido;

	edad = prompt("Ingrese su edad");
	edad = parseInt(edad);
	localidad = prompt("Ingrese su localidad");
	nombre = prompt("Ingrese su nombre");
	apellido = prompt("Ingrese su apellido");

	alert("usted es "+nombre+ " " +apellido+ "tiene " +edad+ " años y vive en "+localidad);
}
