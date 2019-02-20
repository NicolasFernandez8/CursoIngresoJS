/*
En cinco.js solo switch

cada habitacion de un hotel tiene un precio , 
hay promociones segun el tipo de pago, si es con tarjeta visa un 10 % ,
si es por paypal un 15%, 
por mercadoPago un 10%, 
efectivo 20%, 
cualquier otro medio solo un 5%.
---------------------------------------------------------------------------------------
si compraste el paquete "todoincluido" y pagas con paypal se te suma un 10% al decuento.
----------------------------------------------------------------------------------------
si pagas en efectivo, tenes varias opciones, el paquete "soloDesayunos" te suma un 10% al descuento, 
si el paquete es "todo incluido te suma 15% 
y para el resto de los paquetes no tiene descuento adicional."
*/

function mostrar()
{
	//Variables

	var precioHabitacion;
	var metodoPago;
	var decuento;
	var paquete;

	console.log(metodoPago);

	//Prompt
	metodoPago = prompt("¿Con cual metodo de pago quiere abonar? " , " visa / paypal / mercadoPago / efectivo / otro");
	precioHabitacion = prompt("¿Que precio de habitacion andabas buscando?");
	paquete = prompt("¿Que tipo de paquete quiere? por ej: soloDesayuno");
	
	//ParseInt
	metodoPago = parseInt(metodoPago);
	precioHabitacion = parseInt(precioHabitacion);

	switch(metodoPago)
	{
		case"visa":

		case"mercadoPago":
			
			descuento = 10;
			
			break;

		case"paypal":

			descuento = 15;

			break;

		case"efectivo":

			decuento = 20;

			break;

			default:

				decuento = 5;

				break;
	}

	switch(paquete)
	{
		case"todoincluido":

			descuento = 25;

			metodoPago = "paypal";

			break;
	}

	switch(paquete)
	{

		case"soloDesayunos":

			descuento = 30;

			metodoPago = "efectivo";

			break;

		case:"todoincluido"

			decuento = 35;

			metodoPago = "efectivo"

			break;

			default:

				descuento = 0;

				break;
	}

	precioHabitacion = (precioHabitacion * descuento / 100);

	precioHabitacion = (precioHabitacion - descuento);


	alert("Su precio va a hacer de: " +precioHabitacion);
}
/*
En cinco.js solo switch

cada habitacion de un hotel tiene un precio , 
hay promociones segun el tipo de pago, si es con tarjeta visa un 10 % ,
si es por paypal un 15%, 
por mercadoPago un 10%, 
efectivo 20%, 
cualquier otro medio solo un 5%.
---------------------------------------------------------------------------------------
si compraste el paquete "todoincluido" y pagas con paypal se te suma un 10% al decuento.
----------------------------------------------------------------------------------------
si pagas en efectivo, tenes varias opciones, el paquete "soloDesayunos" te suma un 10% al descuento, 
si el paquete es "todo incluido te suma 15% 
y para el resto de los paquetes no tiene descuento adicional."
*/
