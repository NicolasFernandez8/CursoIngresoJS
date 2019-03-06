function mostrar()
{
	//Variable
	var letra;
	var numero;
	var respuesta = true;
	var acumuladorPositivos = 0;
	var acumuladorNegativos = 0;
	var bandera = false;
	var maximo = 0;
	var minimo = 0;
	var letraMaximo;
	var letraMinimo;
	var promedioPositivos;

	//Contador
	var contador = 0;
	var contadorImpares = 0;
	var contadorPares = 0;
	var contadorCeros = 0;
	var contadorPositivos = 0;
	var contadorNegativos = 0;
	
	while (respuesta == true)
	{
		contador++;

		letra = prompt("Ingrese una letra")

		while (isNaN(letra) == false)
		{
			letra = prompt("La letra es incorrecta ingrese otra");
		}

		numero = prompt("Ingrese un numero (entre -100 y 100) " +contador+ ": ");

		numero = parseInt(numero);

		while (isNaN(numero) == true || numero < -100 || numero > 100)
		{
			numero = prompt ("El numero ingresado es incorrecto, ingrese nuevamente un numero entre -100 y 100");
		
			numero = parseInt(numero);
		}
		
		if (bandera == false)
		{
			maximo = numero;

			minimo = numero;

			bandera = true;
		}
			
		if (numero > maximo)
		{
			maximo = numero;

			letraMaximo = letra;
		}

		if(numero < minimo)
		{
			minimo = numero;

			letraMinimo = letra;
		}

		if (numero == 0)
		{
			contadorCeros++;	
		}
				
		if (numero % 2 == 0)
		{
			contadorPares++;
		}

		else
		{
			contadorImpares++;
		}

		if (numero > 0)
		{
			acumuladorPositivos = (acumuladorPositivos + numero);

			contadorPositivos++;

			promedioPositivos = (acumuladorPositivos / contadorPositivos);
		}
			
		else
		{
			contadorNegativos++;

			acumuladorNegativos = (acumuladorNegativos + numero);	
		}

		respuesta = confirm("¿Quieres ingresar otro numero?");	
	}

	document.write("<br> La cantidad de numeros pares es: " +contadorPares);
	document.write("<br> La cantidad de numeros Impares es: " +contadorImpares);
	document.write("<br> La cantidad de ceros es: " +contadorCeros);
	document.write("<br> El promedio de todos los numeros positovos ingresados es: " +promedioPositivos);
	document.write("<br> La suma de todos los numeros negativos es: " +acumuladorNegativos);
	document.write("<br> El número es: " +maximo+ " y la letra es: " +letraMaximo+ " del maximo.");
	document.write("<br> El número es: " +minimo+ " y la letra es: " +letraMinimo+ " del minimo.");
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