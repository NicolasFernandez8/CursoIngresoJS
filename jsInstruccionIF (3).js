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


	if(edad < 18)
	{
		alert("Usted es un/a menor de edad");
	}


}//FIN DE LA FUNCIÓN