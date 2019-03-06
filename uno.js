function mostrar()
{
	var ancho;
	var largo;
	var perimetro;

	largo = prompt("Ingrese largo");

	largo = parseInt(largo);

	ancho = prompt("Ingrese ancho");

	ancho = parseInt(ancho);

	perímetro = (2 * (ancho + largo));

	alert("El perimetro es: " +perimetro);
}

/*
Bienvenidos. 
Realizar el algoritmo que pida el ancho y el largo de 
un rectángulo por prompt y que muestre el perímetro por alert.
*/