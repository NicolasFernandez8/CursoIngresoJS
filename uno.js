function mostrar()
{
	var ancho;
	var largo;
	var perimetro;

	ancho = prompt("Ingrese ancho porfavor");

	ancho = parseInt(ancho);

	largo = prompt("Ingrese largo porfavor");

	largo = parseInt(largo);

	perimetro = (2 * (ancho + largo));

	alert("El perimetro es: " +perimetro);
}
/*
Bienvenidos. 
Realizar el algoritmo que pida el ancho y el largo de un 
rectángulo por prompt y que muestre el perímetro por alert.
*/