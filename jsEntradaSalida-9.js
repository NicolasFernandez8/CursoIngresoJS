/*Debemos lograr tomar el importe por ID ,
transformarlo a entero (parseInt), luego
mostrar el importe con un aumento del 10 %
en el cuadro de texto "RESULTADO".*/
function mostrarAumento()
{
	var sueldo;
	var resultado;
	sueldo=parseInt(document.getElementById('sueldo').value);
	resultado=parseInt(document.getElementById('resultado').value);
	resultado= sueldo + sueldo*0.1;
	alert (resultado);

}