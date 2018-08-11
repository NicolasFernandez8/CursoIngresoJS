function mostrar()
{
	/*
	Pedir por prompt el importe del producto, la cantidad y el nombre, 
	mostrar un solo mensaje con el siguiente texto : “compró la cantidad xx del producto xx 
	, a un precio de xx, pagando el precio de xx con iva incluido”.
	*/

	var importe;
	var cantidad;
	var nombre;
	var iva;
	var precioConIva;
	
	importe = prompt("Ingrese importe");
	importe = parseInt(importe);
	cantidad = prompt("Ingrese cantidad");
	cantidad = parseInt(cantidad);
	nombre = prompt("Ingrese su nombre");
	iva = importe*21/100;
	precioConIva= cantidad *(importe+iva);

	alert("compro la cantidad " + cantidad + " del producto " + nombre + " , a un precio de " + importe + " , pagando el precio de " + precioConIva + " con iva incluido");
}
