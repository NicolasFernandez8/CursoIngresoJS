function mostrar()
{
	var nombreUno;
	var nombreDos;
	var edadUno;
	var edadDos;
	var suma;

	nombreUno = prompt("Ingrese el primer nombre Porfavor");

	nombreDos = prompt("Ingrese el segundo nombre Porfavor");

	edadUno = prompt("Ingrese la primera edad Porfavor");

	edadUno = parseInt(edadUno);

	edadDos = prompt("Ingrese la segunda edad Porfavor");

	edadDos = parseInt(edadDos);

	suma = (edadUno + edadDos);

	alert("Ustedes son " +nombreUno+ " y " +nombreDos+  " , sus edades son " +edadUno+ " y " +edadDos+ " ,y la suma de sus edades es " +suma);

}
