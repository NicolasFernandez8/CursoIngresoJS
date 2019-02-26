function mostrar()
{
	var contador;
	var numero;
	var numeroMaximo;
	var numeroMinimo;
	var respuesta;
	var bandera;

	respuesta = true;
	contador = 0;
	bandera = true;

	while(respuesta	== true)
	{
		numero = prompt("ingresar numero " +contador+ ": ");

		numero = parseInt(numero);

		contador++;

		respuesta = confirm("Quiere ingresar otro numero");

		if (bandera == true)
		{
			numeroMaximo = numero;

			numeroMinimo = numero;

			bandera = false;
		}

		else 
		{
			if (numero > numeroMaximo)
			{
				numeroMaximo = numero;
			}
		
			if (numero < numeroMinimo)
			{
				numeroMinimo = numero;	
			}
		}		
	}
	
	document.getElementById('maximo').value = numeroMaximo;

	document.getElementById('minimo').value = numeroMinimo;
}