function mostrar()
{
	//Variables
	var letra;
	var numero;
	var numeroMinimo = 0;
	var numeroMaximo = 0;
	var letraNumeroMaximo;
	var letraNumeroMinimo;
	var promedioPositivos;

	//Variedad
	var bandera = false;
	var respuesta = true;
	var acumuladorPositivos = 0;
	var acumuladorNegativos = 0;

	//Contador
	var contador = 0;
	var contadorPositivos = 0;
	var contadorPares = 0;
	var contadorImpares = 0;
	var contadorCeros = 0;


	while (respuesta == true)
	{
		contador++;

		letra = prompt("Ingrese una letra");

		while (isNaN(letra) == false)
		{
			letra = prompt("La letra ingresada es incorrecta, ingresela nuevamente");
		}

		numero = prompt("Ingrese un numero (entre -100 y 100) " +contador+ ": ");

		numero = parseInt(numero);

		while (isNaN(numero) == true || numero < -100 || numero > 100)
		{
			numero = prompt("El numero ingresado es incorrecto, ingreselo nuevamente entre -100 y 100");

			numero = parseInt(numero);
		}

		if (numero == 0)
		{
			contadorCeros++;
		}

		if (bandera == false)
		{
			numeroMaximo = numero;

			numeroMinimo = numero;

			letraNumeroMaximo = letra;

			letraNumeroMinimo = letra;

			bandera = true;
		}

		if ( numero > numeroMaximo)
		{
			numeroMaximo = numero;

			letraNumeroMaximo = letra;
		}

		if (numero < numeroMinimo)
		{
			numeroMinimo = numero;

			letraNumeroMinimo = letra;
		}

		if (numero > 0)
		{
			contadorPositivos++;

			acumuladorPositivos = (acumuladorPositivos + numero);

			promedioPositivos = (acumuladorPositivos / contadorPositivos);
		}

		if (numero < 0)
		{
			acumuladorNegativos = (acumuladorNegativos + numero);
		}

		if (numero % 2 == 0)
		{
			contadorPares++;
		}
		else
		{
			contadorImpares++;
		}

		respuesta = confirm("¿Quiere ingresar otro numero?");
	}

	document.write("<br> La cantidad de números pares es: " +contadorPares);
	document.write("<br> La cantidad de números impares es: " +contadorImpares);
	document.write("<br> La cantidad de ceros es: " +contadorCeros);
	document.write("<br> El promedio de todos los números positivos ingresados es : " +promedioPositivos);
	document.write("<br> La suma de todos los números negativos es: " +acumuladorNegativos);
	document.write("<br> El numero del maximo es: " +numeroMaximo+ " y la letra es: " +letraNumeroMaximo);
	document.write("<br> El numero del minimo es: " +numeroMinimo+ " y la letra es: " +letraNumeroMinimo);
}

/*
Bienvenidos. 
Realizar el algoritmo que permita iterar el ingreso de dos datos, una letra y un número entre -100 y 100 (validar) 
hasta que el usuario quiera e informar al terminar el ingreso por document.write: 
a) La cantidad de números pares. 
b) La cantidad de números impares. 
c) La cantidad de ceros. 
d) El promedio de todos los números positivos ingresados. 
e) La suma de todos los números negativos. 
f) El número y la letra del máximo y el mínimo.
*/
