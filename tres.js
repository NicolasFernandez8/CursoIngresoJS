function mostrar()
{
	var precio;
	var descuento;
	var precioFinal;


	precio = prompt("Ingrese un precio porfavor");

	precio = parseInt(precio);

	descuento = prompt("Ingrese un descuento porfavor");

	descuento = parseInt(descuento);

	descuento = (precio * descuento / 100);

	precioFinal = (precio - descuento);

	document.getElementById('elPrecioFinal').value = precioFinal; 
}
