function mostrar()
{
	var diaDeSemana;
	var mensaje;

	diaDeSemana = prompt("Ingrese un dia de la semana");

	switch (diaDeSemana)
	{
		case "sabado":
		case "domingo":

			mensaje = "Buen finde.";

			break;

		case "lunes":
		case "martes":
		case "miercoles":
		case "jueves":
		case "viernes":

			mensaje = "A trabajar.";

			break;

		default:

			mensaje = "No es un dia valido.";

			break;
	}

	alert(mensaje);
}

/*
Bienvenidos. 
(SWITCH)pedir el ingreso de un día de la semana, 
si es fin de semana mostrar " buen finde", 
si es día hábil “ a trabajar”, 
si no es un día valido, también informarlo, 
usar una sola ventana alert.
*/
