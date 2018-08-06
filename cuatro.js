function mostrar()
{
	var numeroUno;
	var numeroDos;
	var resta;
	var suma;
	
	numeroUno = prompt("Ingrese el primer numero");
	numeroUno = parseInt(numeroUno);
	numeroDos = prompt("Ingrese el segundo numero");
	numeroDos = parseInt(numeroDos);

	resta = numeroUno - numeroDos;
	suma = numeroUno + numeroDos;

	if(numeroUno==numeroDos)
	{
		alert("Son iguales " +numeroUno+ " y " +numeroDos);
	}
	else if(numeroUno>numeroDos)
	{
		alert("El primero es mayor que el segundo " +resta);
	}
		else
		{
			if(numeroUno<numeroDos)
			{	
				alert("El primero es menor que el segundo " +suma);
			}
		}
			if(suma>10)
			{
				alert("la suma es " +suma+ " y supera el 10");
			}
}