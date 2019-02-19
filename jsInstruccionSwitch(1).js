function mostrar()
{  
	var mesDelAño; 

	var mensaje;

	mesDelAño = document.getElementById('mes').value;

	console.log(mesDelAño);

	switch(mesDelAño)
	{
		case"Enero":

			mensaje = "que comiences bien el año!!!.";

			break;
		
		case"Marzo":

			mensaje = "a clases!!!";

			break;

		case"Julio":

			mensaje = "se vienen las vacaciones!!!.";

			break;

		case"Diciembre":

			mensaje = "Felices fiesta!!!.";

			break;
	}

	alert(mensaje);

}