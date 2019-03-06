function mostrar()
{
	var planetas;
	var mensaje;

	planetas = prompt("Ingrese un planeta del sistema solar");

	switch (planetas)
	{
		case "mercurio":
		case "venus":

			mensaje = "acá hace más calor.";

			break;

		case "tierra":

			mensaje = "Acá vivimos.";

			break;

		case "marte":
		case "jupiter":
		case "saturno":
		case "urano":
		case "neptuno":
		
		case "pluton":

			mensaje = "Acá hace más frio.";

			break;

			default:

				mensaje = "No es un planeta valido.";

				break;
	}

	alert(mensaje);
}
/*
Bienvenidos (SWITCH). 
pedir el ingreso de un planeta del sistema solar 
Si es la tierra mostrar "acá vivimos". 
Si está más cerca del sol, "acá hace más calor". 
Si está más lejos del sol, "acá hace más frio". 
Si no es un planeta valido informarlo. 
Aclaración: los planetas se ingresan en minúscula 
(Mercurio y Venus están antes que la tierra).

*/
