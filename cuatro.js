function mostrar()
{
	var numeroUno;
	var numeroDos;
	var numeroTres;
	var mayor;
	var menor;


	numeroUno=prompt("Ingrese el primer numero:");
	numeroUno=parseInt(numeroUno);

	numeroDos=prompt("Ingrese el segundo numero:");
	numeroDos=parseInt(numeroDos);

	numeroTres=promt("Ingrese el tercer numero:");
	numeroTres=parseInt(numeroTres);

	if(numeroUno>numeroDos && numeroUno>numeroTres)
	{
		mayor=numeroUno;
	}else
	{
		if(numeroDos>numeroUno && numeroDos>numeroTres)
		{
			mayor=numeroDos;
		}
	
		else
		{	
			mayor=numeroTres;
		}
	}				

	//FIN DE ELSE
	
	if(numeroUno<numeroDos && numeroUno<numeroTres)
	{
		menor=numeroUno;
	}
else
	{
		if(numeroDos<numeroUno && numeroDos<numeroTres)
		{
			menor=numeroDos;
		}
	
	else
		{
			menor=numeroTres;
		}
	}	
	alert("El numero  mayor es: ");
	alert("El numero menor es: ");
}
