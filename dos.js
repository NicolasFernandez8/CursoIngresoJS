function mostrar()
{
	var precioEfectivo;
	var precioTarjeta;
	var recargo;
	var precioFinal;

	precioEfectivo = prompt("Ingrese el precio con efectivo porfavor");

	precioEfectivo = parseInt(precioEfectivo);


	precioTarjeta = prompt("Ingrese el precio con tarjeta porfavor");
 
	precioTarjeta = parseInt(precioTarjeta);

	recargo = (precioTarjeta * 10 / 100);

	precioFinal = (precioEfectivo + recargo);

	alert("El precio del producto en efectivo es: $" +precioEfectivo+ " , con tarjeta tiene un recargo del 10% que seria $" +recargo+ " de recargo , contadole final " +precioFinal);
}
