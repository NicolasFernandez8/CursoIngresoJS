function mostrar()
{
//tomo la edad  
	
	var edad;

	edad = document.getElementById('edad').value;

	edad = parseInt(edad);

	if(edad > 17)
	{
		alert("Usted es un/a mayor de edad");
	}
	else if (edad > 12 && edad < 18)
	{
		alert("Usted es un/a adolecente");
	}

	if(edad < 13)
	{
		alert("Usted es un/a niño");
	}

}//FIN DE LA FUNCIÓN