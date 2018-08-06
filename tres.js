function mostrar()
{
	var precio;
	var valorDescuento;
	var precioFinal;


	precioFinal = document.getElementById('elPrecioFinal').value;
	elPrecioFinal = parseInt(elPrecioFinal);
	
	precio = prompt("Ingrese un precio");
	precio = parseInt(precio);
	

	descuento = prompt("Ingrese un descuento");
	descuento = parseInt(descuento); 

	valorDescuento = precio*descuento/100;

	precioFinal = precio - valorDescuento;

	alert("El Precio Final con descuento es: " + precioFinal);
}
