function mostrar()
{
	var numeroUno;
	var numeroDos;
	var suma;
	var division;
	
	numeroUno = prompt("Ingrese el numeroUno");
	numeroUno = parseInt(numeroUno);
	numeroDos = prompt("Ingrese el numeroDos");
	numeroDos = parseInt(numeroDos);
	
	suma=numeroUno+numeroDos;
	division=numeroUno/numeroDos;

	if(numeroUno==numeroDos)
	{
		alert("Si son iguales "+numeroUno+" y "+numeroDos);
	}
	
	else if(numeroUno>numeroDos)
	{
	alert("El primero es mayor, se divide y queda: "+division);
	}

	else
	{
		if(suma<50)
		{

			alert("La suma es " +suma+ " y es menor a 50");
		}
		else
		{
			alert("Si el segundo es mayor "+suma);
		}
	}
}
