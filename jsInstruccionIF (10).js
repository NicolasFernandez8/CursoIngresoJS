function mostrar()
{
	//Genero el número RANDOM entre 1 y 10 
	
	var numeroRandom;
	var mensaje;
	
	numeroRandom = Math.floor((Math.random() * 10) + 1);

	if(numeroRandom  >=9)
	{
		mensaje=" EXELENTE";
	}
	else
	{
		if(numeroRandom >= 4)
		{
			mensaje=" APROBO";
		}
	}

	if(numeroRandom <= 4)
	{
		mensaje= " Vamos, la proxima se puede";
	}

	alert(numeroRandom + mensaje);

}//FIN DE LA FUNCIÓN