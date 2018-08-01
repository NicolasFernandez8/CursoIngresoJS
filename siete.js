function mostrar()
{ 
	var nombre;
	var edad;
	var sexo;

	var contMayorEdad = 0;
	var contMenorEdad = 0;
	var contH = 0;
	var contM = 0;
	var nombreMayor;
	var nombreMenor;
	var nombreHombreMenor;
	var mayorDeEdad;
	var menorDeEdad;
	
	var flag = 0;
	
	var contador = 0;
	
	while ( contador < 3 )
	{
		nombre = prompt("Ingrese su nombre: ");
		edad = parseInt(prompt("Ingrese su edad: "));
		sexo = prompt("ingrese su sexo: ");


		if ( sexo =='h')
		{
		
			contH++;
		
		}

		else
		{
		
			contM++;
		
		}

		if (edad > mayorDeEdad || flag == 0)
		{
		
			mayorDeEdad = edad;
			nombreMayor = nombre;
		
		}

		if ( edad < menordeEdad || flag == 0)
		{
		
			menorDeEdad = edad;
			nombreMenor = nombre;
		
			flag = 1;
		
		}

		if ( sexo == 'm' && (contM == 1 || edad < nombreHombreMenor))
		{
		
			nombreHombreMenor = nombre;
		
			edadHombreMenor = edad;
		
		}

		contador++;
	}

	document.write("Contador de personas mayores de edad: " + contMayorEdad + "<br>");
	document.write("Contador de personas menores de edad: " + contMenorEdad + "<br>");
	document.write("Cantidad de mujeres: " + contM + "<br>");
	document.write("Cantidad de hombres: " + contH + "<br>");
	document.write("Nombre del mayor: " + nombreMayor + "<br>");
	document.write("Nombre del menor: " + nombreMenor + "<br>");
	document.write("Nombre del hombre mas chico: " + nombreHombreMenor + "<br>");
}
	