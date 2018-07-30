function mostrar()
{

	var contador=0;
	// declarar variables
	var mayor;
	var menor;
	var respuesta='si';
	//var bandera = 0;
	
	while(respuesta!='no')	
	{
		contador++;
		numero = prompt("Ingrese numero #"+contador);
		numero = parseInt(numero);

		if (contador== 1)		
		{
			menor = numero;
			mayor = numero;
			//bandera = 1;
		}
		else
		{
			if (numero < menor)		
			{		
				menor = numero;		
			}
			
			if (numero < mayor)		
			{		
				mayor = numero;		
			}
		}

		
			
		respuesta = prompt("¿Desea continuar?");
	}

	document.getElementById('maximo').value = mayor;
	document.getElementById('minimo').value = menor;


}//FIN DE LA FUNCIÓN