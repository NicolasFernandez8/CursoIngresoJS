function mostrar()
{
	var numeroUno;
	var numeroDos;
	var dividir;
	var suma;
	var mensaje;

	numeroUno = prompt("Ingrese el 1° numero");

	numeroUno = parseInt(numeroUno);

	numeroDos = prompt("Ingrese el 2° numero");

	numeroDos = parseInt(numeroDos);

	if (numeroUno == numeroDos)
	{
		mensaje = numeroUno+ "" +numeroDos; 
	}
	
	if (numeroUno > numeroDos)
	{
		dividir = (numeroUno / numeroDos);

		mensaje = "El resultado es: " +dividir;
	}

	else
	{
		suma = (numeroUno + numeroDos);

		mensaje = "El resultado es: " +suma;
	
		if (suma < 50)
		{		
			mensaje = "La suma es: " +suma+ " y es menor a 50";
		}	
	}
	
	alert(mensaje);
}

/*
Bienvenidos. 
(IF)Pedir dos números y mostrar el resultado: 
Si son iguales los muestro concatenados.
Si el primero es mayor, los divido, 
de lo contrario los sumo. 
Si la suma es menor a 50 ,además de mostrar el resultado, muestro el mensaje 
"la suma es xxx y es menor a 50".
*/