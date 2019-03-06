function mostrar()
{
	var precio;
	var descuento;
	var precioDescuento;

	precio = prompt("Ingrese un precio");

	precio = parseInt(precio);

	descuento = prompt("Ingrese un descuento");

	descuento = parseInt(descuento);

	descuento = (precio * descuento / 100);

	precioDescuento = (precio - descuento);

	document.getElementById('elPrecioFinal').value = precioDescuento; 


}
