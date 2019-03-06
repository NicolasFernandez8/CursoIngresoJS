function mostrar()
{
	//Variables
	var nota;
	var sexo;
	var mensaje;
	var respuesta = true;
	var notaMinima;
	var promedioTotal;
	var acumulador = 0;
	var bandera = false;
	var sexoNotaMinima;
	var mensajeUno;
	var mensajeDos;
	var mensajeTres;

	//Contadores
	var contador = 0;
	var contadorVaronesNotaAlta = 0;

	while (contador < 5)
	{
		contador++;

		nota = prompt("Ingrese una nota (entre 0 y 10) " +contador+ ": ");

		nota = parseInt(nota);

		while (isNaN(nota) == true || nota < 0 || nota > 10)
		{
			nota = prompt("La nota ingresada es incorrecta, ingrese nuevamente una nota entre 0 y 10.")
			
			nota = parseInt(nota);
		}

		sexo = prompt("Ingrese un sexo f/m.");

		while (isNaN(sexo) == false || sexo != "f" && sexo != "m")
		{
			sexo = prompt("El sexo es incorrecto ingrese nuevamente un sexo f o m.");
		}
		
		if (sexo == "m" && nota > 5) 
		{
			contadorVaronesNotaAlta++;

			mensajeUno = "La cantidad de varones que su nota haya sido mayor o igual a seis es: " +contadorVaronesNotaAlta;	
		}	
	
		if (bandera == false)
		{
			notaMinima = nota;

			sexoNotaMinima = sexo;

			bandera = true;
		}
					
		if (nota < notaMinima)
		{
			notaMinima = nota;
		
			sexoNotaMinima = sexo;
			
			mensajeDos = "La nota mas baja es: " +notaMinima+ " y el sexo es: " +sexoNotaMinima;	
		}

		acumulador = (acumulador + nota);

		promedioTotal = (acumulador / 5);

		mensajeTres = "El promedio total es de: " +promedioTotal;

		respuesta = confirm("¿Quieres ingresar otra nota?");
	}

	alert(mensajeUno);
	alert(mensajeDos);
	alert(mensajeTres);	
}

/*
Bienvenidos. 
Realizar el algoritmo que permita el ingreso por prompt de las notas 
(validar entre 0 y 10) , el sexo (validar el sexo “f” o “m”) de 5 alumnos,
informar por alert: 
a) El promedio de las notas totales. 
b) La nota más baja y el sexo de esa persona. 
c) La cantidad de varones que su nota haya sido mayor o igual a 6.
*/
