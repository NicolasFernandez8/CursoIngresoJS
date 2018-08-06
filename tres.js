function mostrar()
{
	var precio;
	var descuento;
	var precioConDescuento;
	var precionConIva;
	var precioFinal;

	precio = prompt("Ingrese el precio");
	precio = parseInt(precio);

	descuento = prompt("Ingrese el descuento");
	descuento = parseInt(descuento);

	precioFinal = document.getElementById('elPrecioFinal').value;
	precioFinal = parseInt(precioFinal);
	

	descuento = precio * 0.10 / 100;

	precioConDescuento = precio - descuento;

	precionConIva = precio * 0.21 / 100;

	precioFinal = precioConDescuento + precionConIva;

	alert("El precio final es de " +precioFinal);







}
