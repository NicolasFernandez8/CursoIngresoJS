function mostrar()
{

	var contador=0;
	var acumulador=0;
	var respuesta ="si";
	var numero;
	
	contador=0;
	acumulador=0;
	respuesta ="si";
	
	while(respuesta != "n")
	
	{
		contador = contador +1;

		numero = prompt("Ingrese numero #" +contador);

		numero = parseInt(numero);

		acumulador = acumulador + numero;

		respuesta = prompt("Desea seguir ingresado numero");

	}

	promedio = acumulador/contador;



document.getElementById('suma').value= "la suma es" +acumulador;
document.getElementById('promedio').value= "el promedio es" +promedio;

}//FIN DE LA FUNCIÓN