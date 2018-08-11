
function mostrar()
{
	var ancho;
	var largo;
	var pintura;
	var perimetro;
	var cantidadDeLintros;

	pintura = 1
 	ancho = prompt("Ingrese el ancho");
	ancho = parseInt(ancho);
	largo = prompt("Ingrese el largo");
	largo = parseInt(largo);

	
	perimetro = (ancho*2) + (largo*2); 
	cantidadDeLintros = perimetro* 1/3;

	alert("El perimetro es "+perimetro+ " y la cantidad de pintura que se debe comprar son " +cantidadDeLintros);



}
