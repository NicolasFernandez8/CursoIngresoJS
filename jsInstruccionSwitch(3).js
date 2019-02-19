function mostrar()
{
  
	var mesDelAño;

	var mensaje; 

	mesDelAño = document.getElementById('mes').value;

	console.log(mesDelAño);

	switch(mesDelAño)
	{
		
		case"Febrero":
			
			mensaje = "Este mes no tiene más de 29 días.";

			break;


		case"Enero":

		case"Marzo":
		
		case"Abril":
		
		case"Mayo":
		
		case"Junio":
		
		case"Julio":
		
		case"Agosto":
		
		case"Septiembre":
		
		case"Octubre":
		
		case"Noviembre":
		
		case"Diciembre":

			mensaje = "Este mes tiene 30 o más días";

			break;
		
	}

	alert(mensaje);


}//FIN DE LA FUNCIÓN