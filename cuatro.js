/*
- Ingresar 4 importes de estos mostrar el mayor
- Despues decir el total
- Si supera los $100 decuento del 10%
- Si supera los $50 decuento del 5%
- En el caso de ser menos de $50 hay que sumarle un 15%
*/

function mostrar()
{
	//Importes
	var importeUno;
	var importeDos;
	var importeTres;
	var importeCuatro;
	var importeTotal;
	var importeMayor;
	
	//Variedad
	var descuento;
	var aumento;
	var suma;

	//Prompt
	importeUno = prompt("Ingrese el primer numero");
	importeDos = prompt("Ingrese el segundo numero");
	importeTres = prompt("Ingrese el tercero numero");
	importeCuatro = prompt("Ingrese el cuarto numero");

	//ParseInt
	importeUno = parseInt(importeUno);
	importeDos = parseInt(importeDos);
	importeTres = parseInt(importeTres);
	importeCuatro = parseInt(importeCuatro);

	if (importeUno > importeDos &&  importeUno > importeTres && importeUno > importeCuatro)
	{
		importeMayor = importeUno;
	}
	else
	{
		if (importeDos > importeUno &&  importeDos > importeTres && importeDos > importeCuatro)
		{
			importeMayor = importeDos;
		}
		else
		{
			if (importeTres > importeUno &&  importeTres > importeDos && importeTres > importeCuatro)
			{
				importeMayor = importeTres;
			}
			else
			{
				if (importeCuatro > importeUno &&  importeCuatro > importeDos && importeCuatro > importeTres) 
				{
					importeMayor = importeCuatro;
				}
			
			}//if (importeTres > importeUno &&  importeTres > importeDos && importeTres > importeCuatro)	
		 
		}//if (importeDos > importeUno &&  importeDos > importeTres && importeDos > importeCuatro)

	}//if (importeUno > importeDos &&  importeUno > importeTres && importeUno > importeCuatro)

	suma = (importeUno + importeDos + importeTres + importeCuatro);

	if (suma > 99)
	{
		descuento = 10;
	}
	else
	{
		if(suma > 49)
		{
			decuento = 5;
		}
		else
		{
			aumento = (suma * 15 / 100);

			suma = (suma + aumento);

			decuento = 0;
		
		}//if(suma > 49)

	}//if (suma > 99)

	importeTotal = (suma * decuento / 100);

	importeTotal = (suma - decuento);

	alert("El importe de mayor valor es: $" +importeMayor+ " y el precio final es de: $" +importeTotal);
}