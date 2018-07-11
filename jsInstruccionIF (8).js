function mostrar()
{
	var edad;
	
	var estadoCivil
	
	edad = document.getElementById('edad').value;
	
	edad = parseInt(edad);
	
	estadoCivil = document.getElementById('estadoCivl').value;
	
	if (edad >= 18 && estadoCivl == "Soltero")
	{
		alert("Es soltero y no es menor");
	}


	


}