/*Debemos lograr tomar el importe por ID ,
transformarlo a entero (parseInt), luego
mostrar el importe con un aumento del 10 %
en el cuadro de texto "RESULTADO".*/
function mostrarAumento()
{
	var sueldo;
	var importeConAumento;
	var resultado;

	sueldo = document.getElementById('sueldo').value;

	sueldo = parseInt(sueldo);

	importeConAumento = (sueldo * 10 / 100);

	resultado = (sueldo + importeConAumento);

	document.getElementById('resultado').value = "El Aumento es de: " + resultado;

	resultado = parseInt(resultado);	
	
}
