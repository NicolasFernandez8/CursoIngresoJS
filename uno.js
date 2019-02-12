function mostrar()
{
	var ancho;
	var largo;
	var perimetro;

	ancho = prompt("Ingrese el ancho porfavor");
	
	ancho = parseInt(ancho);

	largo = prompt("Ingrese el largo porfavor");

	largo = parseInt(largo);

	perimetro = 2 * (ancho + largo);

	alert("El perimetro es: "+perimetro);
}
