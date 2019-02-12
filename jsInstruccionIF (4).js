function mostrar()
{
//tomo la edad  
	
	//Primera manera de hacerlo.

	var edad;
	
	edad = document.getElementById('edad').value;

	edad = parseInt(edad);

	if(edad > 12)
	{
		if (edad < 18) 
		{
			alert("Usted es un/a adolecente");
		}
	}

	//Segunda manera de hacerlo.

	/*
	
	var edad;

	edad = document.getElementById('edad').value;

	edad = parseInt(edad);

	if(edad > 12 && edad < 18)
	{
		alert("Usted es un/a adolecente");	
	}

	*/

}//FIN DE LA FUNCIÓN