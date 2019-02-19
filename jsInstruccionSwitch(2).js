function mostrar()
{ 
	var mesDelAño;

	var mensaje;

	mesDelAño = document.getElementById('mes').value;

	console.log(mesDelAño);

	switch(mesDelAño)
	{
		case"Diciembre":

		case"Enero":

		case"Febrero":

			mensaje = "Abrigate que hace frio.";

			break;
		
		case"Marzo":

		case"Abril":
		
		case"Mayo":
		
		case"Junio":
		
		case"Julio":
		
		case"Agosto":

			mensaje = "Ya pasamos el frio, ahora calor!!!.";

			break;
		
		case"Septiembre":
		
		case"Octubre":
		
		case"Noviembre":

			mensaje = "Falta para el invierno."; 

			break;

	}	

	alert(mensaje);

}//FIN DE LA FUNCIÓN