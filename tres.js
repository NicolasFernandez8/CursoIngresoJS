function mostrar()
{
	var precio;
	var descuento;
	var ValorDeDescuento;
	var ValorConElDescuento;
	var ValorConElIva;
	precio = prompt("Ingrese el precio porfavor");
	precio = parseInt(precio);
	descuento = prompt("Ingrese el descuento porfavor");
	descuento = parseInt(descuento);
	ValorDeDescuento = precio*descuento/100;
	ValorConElDescuento = precio+descuento;
	ValorConElIva = precio*0.21;
	alert("El ValorDeDescuento es :" +ValorDeDescuento+ "y el ValorConElDescuento es:" +ValorConElDescuento);

	

	

}
	



