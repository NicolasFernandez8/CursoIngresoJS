function mostrar()
{
	var contador;
	var acumulador;
	var respuesta;
	var numeroRecibido;

	contador = 0;
	acumulador = 0
	numeroRecibido = 0 
	respuesta = "si"


	while (respuesta == "si")
	{
		numeroRecibido = prompt("Queres ingresar otro numero " +contador+ ": ");

		numeroRecibido = parseInt(numeroRecibido);

		respuesta = prompt("Quiere ingresar otro numero si/no");

		acumulador = (acumulador + numeroRecibido);

		contador++;
	}

	document.getElementById('suma').value = acumulador;
	document.getElementById('promedio').value = acumulador / contador;
}