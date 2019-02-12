function mostrar()
{
//tomo la edad  
	
	var edad;
	var estadoCivil;

	edad = document.getElementById('edad').value;

	edad = parseInt(edad);

	estadoCivil = document.getElementById('estadoCivil').value;

	if(edad < 18 && estadoCivil != "Soltero")
	{
		alert("Usted es muy pequeño para No ser soltero");
	}


}//FIN DE LA FUNCIÓN