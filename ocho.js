function mostrar()
{
	var letra;
	var numero;
	var respuesta;
	var numerosPares;
	var numerosImpares;
	var cantidadDeCeros;
	var cantidadPositivos;
	var contadorPositivos;
	var promedioNumerosPositivos;
	var contadorNegativos;
	var bandera;
	var numeroMaximo;
	var letraMaxmo;
	var numeroMinimo;
	var letraMinimo;
 	bandera=0;
	numerosPares=0;
	numerosImpares=0;
	cantidadDeCeros=0;
	cantidadPositivos=0;
	contadorPositivos=0;
	contadorNegativos=0;
 	respuesta=prompt("Ingrese si o no");
	if(respuesta!="si"&&respuesta!="no")
	{
		respuesta=prompt("Ingrese si o no");	
	}
 	while(respuesta!="no")
	{
		letra=prompt("Ingrese una letra");
		numero=prompt("Ingrese un numero por favor");
		numero=parseInt(numero);
		
		if(numero<-100||numero>100)
		{
			numero=prompt("ERROR. Ingrese un numero por favor");
			numero=parseInt(numero);
		}
 		
		if(numero%2==0)
		{
			numerosPares++;
		}
		else
		{
			numerosImpares++;
		}
		
		if(numero==0)
		{
			cantidadDeCeros++;
		}
		
		if(numero>0)
		{
			cantidadPositivos++;
			contadorPositivos=contadorPositivos+numero;
		}
		else if(numero<0)
		{
			contadorNegativos=contadorNegativos+numero;
		}
		if(bandera==0)
		{
			numeroMinimo=numero;
			letraMinimo=letra;
			numeroMaximo=numero;
			letraMinimo=letra;
			bandera++;
		}
		
		if(numero<numeroMinimo)
		{
			numeroMinimo=numero;
			letraMinimo=letra;
		}
		if(numero>numeroMaximo)
		{
			numeroMaximo=numero;
			letraMaxmo=letra;
		}
 		respuesta=prompt("Ingrese si o no");
		if(respuesta!="si"&&respuesta!="no")
		{
			respuesta=prompt("Ingrese si o no");	
		}
	}
	promedioNumerosPositivos=contadorPositivos/cantidadPositivos;
	document.write("<br> La cantidad de numeros pares es de: "+numerosPares);
	document.write("<br> La cantidad de numeros impares es de: "+numerosImpares);
	document.write("<br> La cantidad de ceros es de: "+cantidadDeCeros);
	document.write("<br> El promedio de todos los numeros postivos es de: "+promedioNumerosPositivos);
	document.write("<br> La suma de todos los numeros negativos es de: "+contadorNegativos);
	document.wrtie("<br> El numero maximo es "+numeroMaximo+" y la letra es "+letraMaxmo);
	document.write("<br> El numero minimo es "+numeroMinimo+" y la letra es "+letraMinimo);
}
