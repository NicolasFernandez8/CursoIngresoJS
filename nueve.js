function mostrar()
{
	//Variables
	var nombrePais;
	var habitantes;
	var temperatura;
	var nombrePaisMenosH;
	var menosHambitantes;
	var paisTemperaturaMinima;
	var temperaturaMinima;

	//Variedad
	var repuesta = true;
	var bandera = false;
	var acumuladorHabitantes = 0;
	
	//Contadores
	var contador = 0;
	var contadorTempPares = 0;
	var contadorPaisesMas40 = 0;

	while (repuesta == true)
	{
		contador++;

		nombrePais = prompt("Ingrese el nombre del pais");

		while (isNaN(nombrePais) == false)
		{
			nombrePais = prompt("El nombre del pais ingresado es incorrecto, ingreselo nuevamente");
		}

		habitantes = prompt("Ingrese la cantidad de habitantes que tiene (entre 1 y 7000) " +contador+ ": ");

		habitantes = parseInt(habitantes);

		while (isNaN(habitantes) == true || habitantes < 1 || habitantes > 7000)
		{
			habitantes = prompt("La cantidad de habitantes ingresada es incorrecta, ingresela nuevamente entre 1 y 7000");
		
			habitantes = parseInt(habitantes);
		}

		temperatura = prompt("Ingresela temperatura (entre 50 y -50)");

		temperatura = parseInt(temperatura);

		while (isNaN(temperatura) == true || temperatura < -50 || temperatura > 50)
		{
			temperatura = prompt("La temperatura ingresada es incorrecta, ingreselo nuevamente (entre 50 y -50)");
		
			temperatura = parseInt(temperatura);
		}

		if (bandera == false)
		{
			nombrePaisMenosH = nombrePais;

			menosHambitantes = habitantes;

			temperaturaMinima = temperatura;

			paisTemperaturaMinima = nombrePais;

			bandera = true;
		}

		if (habitantes < menosHambitantes)
		{
			menosHambitantes = habitantes;

			nombrePaisMenosH = nombrePais;	
		}
		
		if (temperatura < temperaturaMinima) 
		{
			temperaturaMinima = temperatura;

			paisTemperaturaMinima = nombrePais;
		}

		else if (temperatura > 40)
		{
			contadorPaisesMas40++;
		}

		if (temperatura % 2 == 0)
		{
			contadorTempPares++;
		}

		acumuladorHabitantes = (acumuladorHabitantes + habitantes);

		promedioHabitantes = (acumuladorHabitantes / contador);

		repuesta = confirm("¿Quiere ingresar otra cantidad de habitantes?");
	}

	document.write("<br> La cantidad de temperaturas pares es: " +contadorTempPares);
	document.write("<br> El nombre del pais con menos habitantes es: " +nombrePaisMenosH);
	document.write("<br> la cantidad de paises que superan los 40 grados es: " +contadorPaisesMas40);
	document.write("<br> el promedio de habitantes entre los paises ingresados es: " +promedioHabitantes);
	document.write("<br> la temperatura minima ingresada es: " +temperaturaMinima+ " y nombre del pais que registro esa temperatura es: " +paisTemperaturaMinima);
}

/*
Bienvenidos. 
Realizar el algoritmo que permita ingresar el nombre de un pais, cantidad de habitantes en millones entre 1 y 7000 
(validar), 
la temperaruta minima que se registra en su territorio(entre -50 y 50) 
hasta que el usuario quiera e informar al terminar el ingreso por document.write: 
a) La cantidad de temperaturas pares. 
b) El nombre del pais con menos habitantes 
c) la cantidad de paises que superan los 40 grados. 
d) el promedio de habitantes entre los paises ingresados	
f) la temperatura minima ingresada, y nombre del pais que registro esa temperatura.
*/