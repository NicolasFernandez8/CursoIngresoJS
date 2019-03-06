function mostrar()
{
	var numeroUno;
	var numeroDos;
	var resta;
	var suma;
	var mensaje;

	numeroUno = prompt("Ingrese el primer numero");

	numeroUno = parseInt(numeroUno);

	numeroDos = prompt("Ingrese el segundo numero");

	numeroDos = parseInt(numeroDos);


	if (numeroUno == numeroDos)
	{
		mensaje = numeroUno+ "" +numeroDos;
	}

	else if (numeroUno > numeroDos)
	{
		resta = (numeroUno - numeroDos);
		
		mensaje = "El resultado de la resta es: " +resta;
	}

	else 
	{
		suma = (numeroUno + numeroDos);

		mensaje = "El resultado de la suma es: " +suma;
	}

	if (resta > 10)
	{
		mensaje = mensaje + " y supero el 10";
	}

	alert(mensaje);
}
 
/*
 Bienvenidos (IF). 
Pedir dos números y mostrar el resultado: 
Si son iguales los muestro concatenados. 
Si el primero es mayor, los resto, 
de lo contrario los sumo. 
Si la resta es mayor a 10 ,además de mostrar el resultado, muestro el mensaje 
"la resta es xxx y supero el 10".
*/