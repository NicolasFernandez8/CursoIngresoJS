function mostrar()
{
	var contador;
	var acumulador;
	var mumeroRecibido;

	contador = 0;
	acumulador = 0;
	numeroRecibido = 0;

	while(contador < 5)
	{
		numeroRecibido = prompt("Dame el numero " + contador + ": ");

		numeroRecibido = parseInt(numeroRecibido);

		acumulador = acumulador + mumeroRecibido;

		contador++;

		respuesta = "si";
	}

	document.getElementById('suma').value = acumulador;
	
	document.getElementById('promedio').value = acumulador / 5;
}