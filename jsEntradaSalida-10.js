/*Debemos lograr tomar el importe por ID.
Transformarlo a entero (parseInt), luego
mostrar el importe con un Descuento del 25 %
en el cuadro de texto "RESULTADO"*/
function mostrarAumento()
{
	var sueldo;
	var importeConDescuento;
	var resultado;

	sueldo = document.getElementById('importe').value;

	sueldo = parseInt(sueldo);

	importeConDescuento = (sueldo * 25 / 100);

	resultado = (sueldo - importeConDescuento);

	document.getElementById('resultado').value = "El descuento es: " + resultado;

	resultado = parseInt(resultado);

}
