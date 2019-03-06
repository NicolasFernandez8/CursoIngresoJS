function mostrar()
{
	var precio;
	var descuento;
	var precioDescuento;

	precio = prompt("Ingrese un precio porfavor");

	precio = parseInt(precio);

	descuento = prompt("Ingresar descuento");

	descuento = parseInt(descuento);

	descuento = (precio * descuento / 100);

	precioDescuento = (precio - descuento);

	document.getElementById('elPrecioFinal').value = precioDescuento;
}

/*
Bienvenidos. 
Pedir por prompt el precio y el porcentaje de descuento, mostrar el precio final con descuento por id.
*/
