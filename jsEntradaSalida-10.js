/*Debemos lograr tomar el importe por ID.
Transformarlo a entero (parseInt), luego
mostrar el importe con un Descuento del 25 %
en el cuadro de texto "RESULTADO"*/
function mostrarAumento()
{
	var importe;
	var importeConDescuento;
	var resultado;

	importe = document.getElementById('importe').value;	

	importe = parseInt(importe);

	importeConDescuento = (importe * 25 / 100);

	resultado = (importe - importeConDescuento);

	document.getElementById('resultado').value = "El descuento es: " + resultado;

	resultado = parseInt(resultado);
}