
function mostrar()
{
	var base;
	var altura;
	var superficie;
	var perimetro;

	base = prompt("Ingrese base");
	base = parseInt(base);
	
	altura = prompt("Ingrese altura");
	altura = parseInt(altura);

	superficie = base * altura/2;
	perimetro = base + altura;
	alert("La superficie es " +superficie+ " y el perimetro es " +perimetro);

}
