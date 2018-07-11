function mostrar()
{
	var edad;
	
	var estadoCivl;
	
	edad = document.getElementById('edad').value;
	
	edad = parseInt(edad);
	
	estadoCivil = document.getElementById('estadoCivil').value;

	if (edad < 18 && estadoCivil != "Soltero")
	{
		alert("Es muy pequeño para NO ser Soltero");
	}
	


 

	


}