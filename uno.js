function mostrar()
{
	var medida;
	var perimetro;

	medida = prompt("Ingrese las medida, de un triangulo equilatero");

	medida = parseInt(medida);

	perimetro = (3 * (medida));

	alert("El perimetro es : " +perimetro);
}
