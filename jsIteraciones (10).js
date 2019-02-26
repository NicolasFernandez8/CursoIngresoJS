function mostrar()
{
	var contador;
	var contadorNegativos;
	var contadorPositivos;
	var contadorPares;
	
	var respuesta;
	var numero;
	var diferencia; 
	
	var negativos;
	var positivos;
	
	var cantidadCeros;
	
	var promedioPositivos;
	var promedioNegativos;
	


	contador = 0;
	contadorPositivos = 0;
	contadorNegativos = 0;
	contadorPares = 0;
	respuesta = true;
	

	while(respuesta == true)
	{
		numero = prompt("ingresar numero " +contador+ ": ");

		numero = parseInt(numero);

		contador++;

		respuesta = confirm("Quiere ingresar otro numero");
	
		
		if (numero < 0)
		{
			negativos = (numero + contadorNegativos);
		}
		
		else
		{
			if (numero > 0)
			{
				positivos = numero + contadorPositivos;	
			}
			else
			{
				if (contadorPositivos == numero)
				{
					contadorPositivos = (numero + contadorPositivos);

					contadorPositivos++;
				}
				else
				{
					if (contadorNegativos == numero)
					{
						contadorNegativos = (numero + contadorNegativos);

						contadorNegativos++;
					}
					else
					{
						if (cantidadCeros == numero)
						{
							cantidadCeros = (numero + cantidadCeros);
						}
						else
						{
							if (numero % 2 == 0)
							{
								contadorPares = (numero + contadorPares);

								contadorPares++;
							}
							else
							{
								if (promedioPositivos == numero)
								{
									promedioPositivos = ((positivos + promedioPositivos) / contadorPositivos);
								}

								if (promedioNegativos == numero)
								{
									promedioNegativos = ((negativos + promedioNegativos) / contadorNegativos);
								}
							}
						}
					}
				}
			}
		}
	}
	
	diferencia = (positivos + negativos);

document.write("<br> La suma de los negativos son: " +negativos);
document.write("<br> La suma de los positivos son: " +positivos);
document.write("<br> La cantidad de numeros positivos son: " +contadorPositivos);
document.write("<br> La cantidad de numeros negativos son: " +contadorNegativos);
document.write("<br> La cantidad de ceros son: " +cantidadCeros);
document.write("<br> La cantidad de numeros pares son: " +contadorPares);
document.write("<br> El promedio de los positivos es: " +promedioPositivos);
document.write("<br> El promedio de los negativos es: " +promedioNegativos);
document.write("<br> La diferencia entre positivos y negativos es: " +diferencia);	
}

/*
Al presionar el botón pedir números hasta que el usuario quiera, mostrar:
1-Suma de los negativos. 
2-Suma de los positivos. 
3-Cantidad de positivos. 
4-Cantidad de negativos. 
5-Cantidad de ceros. 
6-Cantidad de números pares. 
7-Promedio de positivos. 
8-Promedios de negativos. 
9-Diferencia entre positivos y negativos, (positvos-negativos).
*/