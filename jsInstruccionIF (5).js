function mostrar()
{
//tomo la edad  
	
	//Primera manera de hacerlo.

	var edad;
	
	edad = document.getElementById('edad').value;

	edad = parseInt(edad);

	if(edad > 12 && edad < 18)
	{
		alert("Usted es un/a adolecente");
	}

	else
	{
		alert("Usted no es un/a adolecente");
	}

	//Segunda manera de hacerlo.

	/*

	if(años < 13 || años >17)
	{
		alert("Usted no es un/a adolecente");
	}

	*/

	//Tercera manera de hacerlo.

	/*

	if(años < 18 || años >12)
	{
		alert("Usted no es un/a adolecente");
	}
	else
	{
		alert("Usted no es un/a adolecente");
	}

	*/

	//Cuarta manera de hacerlo.

	/*

	if(!(años < 18 || años >12))
	{
		alert("Usted no es un/a adolecente");
	}

	*/


}//FIN DE LA FUNCIÓN