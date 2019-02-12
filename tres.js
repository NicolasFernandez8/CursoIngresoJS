function mostrar()
{
	var precio;
	var precioConDescuento;
	var precioFinal;

	precio = prompt("Ingrese un precio porfavor");

	precioConDescuento = prompt("Ingrese un descuento porfavor");

	precioConDescuento = (precio * precioConDescuento / 100)
	
	precioFinal = (precio - precioConDescuento);

	document.getElementById('elPrecioFinal').value = precioFinal
}
