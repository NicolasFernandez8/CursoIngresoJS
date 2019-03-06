function mostrar()
{
	var letra;
	var numero;
	var contador=0;
	var rta=true;
	var bandera=false;
	var contadorDePares=0;
	var contadorDeImpares=0;
	var contadorDeCeros=0;
	var contadorDePositivos=0;
	var acumuladorDePositivos=0;
	var acumuladorDeNegativos=0;
	var promedioDePositivos;
	var numeroMaximo;
	var numeroMinimo;
	var letraMaxima;
	var letraMinima;

	while(rta==true)
	{
		contador=contador+1;

		letra=prompt(contador+"- Ingrese una letra");

		while(isNaN(letra)==false)
		{
			letra=prompt(contador+"- Error - Ingrese nuevamente una letra");
		}

		numero=prompt(contador+"- Ingrese un numero entre -100 y 100");
		numero=parseInt(numero);

		while(isNaN(numero)==true || numero<-100 || numero>100)
		{
			numero=prompt(contador+"- Error - Ingrese nuevamente un numero entre -100 y 100");
			numero=parseInt(numero);
		}

		rta=confirm("¿Quiere ingresar nuevamente los datos pedidos?");


		if (numero==0) 
		{
			contadorDeCeros=contadorDeCeros+1;
		}
		else if (numero%2==0) 
		{
			contadorDePares=contadorDePares+1;
		}
		else
		{
			contadorDeImpares=contadorDeImpares+1;
		}

		if (numero>0) 
		{
			contadorDePositivos=contadorDePositivos+1;

			acumuladorDePositivos=acumuladorDePositivos+numero;

			promedioDePositivos=acumuladorDePositivos/contadorDePositivos;
		}
		else
		{
			acumuladorDeNegativos=acumuladorDeNegativos+numero;
		}

		if(bandera==false)
		{
			numeroMaximo=numero;
			numeroMinimo=numero;

			letraMaxima=letra;
			letraMinima=letra;

			bandera=true;
		}

		if (numeroMaximo<numero) 
		{
			numeroMaximo=numero;
			letraMaxima=letra;
		}

		if (numeroMinimo>numero) 
		{
			numeroMinimo=numero;
			letraMinima=numero;
		}
	}

	document.write("</br> Cantidad de numeros pares: "+contadorDePares);
	document.write("</br> Cantidad de numeros impares: "+contadorDeImpares);
	document.write("</br> Cantidad de ceros: "+contadorDeCeros);
	document.write("</br> Promedio de numeros positivos: "+promedioDePositivos);
	document.write("</br> Suma de numeros negativos: "+acumuladorDeNegativos);
	document.write("</br> Numero maximo y su letra: "+numeroMaximo+letraMaxima);
	document.write("</br> Numero minimo y su letra: "+numeroMinimo+letraMinima);


}
/*Enunciado:
Bienvenidos. 
Realizar el algoritmo que permita iterar el ingreso de dos datos,
 una letra y un número entre -100 y 100 (validar)
  hasta que el usuario quiera e informar al terminar el ingreso por document.write: 
a) La cantidad de números pares. x
b) La cantidad de números impares. x
c) La cantidad de ceros. x
d) El promedio de todos los números positivos ingresados. x
e) La suma de todos los números negativos. x
f) El número y la letra del máximo y el mínimo.x
