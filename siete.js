function mostrar()
{
	//Variales
	var nota;
	var sexo;
	var promedioTotal;
	var notaMasBaja;
	var sexoNotaBaja;
	var mensajeUno;
	var mensajeDos;
	var mensajeTres;

	//Variedad
	var acumuladorNota = 0;
	var bandera = false;
	var respuesta = true;

	//Contador
	contador = 0;
	contadorVaroNotaMayor = 0; 


	while (contador < 5)
	{
		contador++;

		nota = prompt("Ingrese la nota (entre 0 y 10) " +contador+ ": ");

		nota = parseInt(nota);

		while (isNaN(nota) == true || nota < 0 || nota > 10)
		{
			nota = prompt("La nota ingresada es incorrecta, ingrese otra nota nuevamente entre 0 y 10");

			nota = parseInt(nota);	
		}

		sexo = prompt("Ingrese el sexo f/m");

		while (isNaN(sexo) == false || sexo != "f" && sexo != "m")
		{
			sexo = prompt("El sexo ingresado es incorrecto, ingrese otra nuevamente f/m");
		}

		if (bandera == false)
		{
			notaMasBaja = nota;

			sexoNotaBaja = sexo;

			bandera = true;
		}

		if (nota < notaMasBaja)
		{
			notaMasBaja = nota;

			sexoNotaBaja = sexo;

			mensajeUno = "La nota mas baja es: " +notaMasBaja+ " y el sexo de esa persona es: " +sexoNotaBaja;
		}

		if (sexo == "m" && nota > 5)
		{
			contadorVaroNotaMayor++;

			mensajeDos = "La cantidad de varones que su no haya sido mayor o igual a seis es: " +contadorVaroNotaMayor;
		}

		acumuladorNota = (acumuladorNota + nota);

		promedioTotal = (acumuladorNota / contador);

		mensajeTres = "El promedioTotal es de: " +promedioTotal;

		respuesta = confirm("¿Quiere ingresar otra nota?");
	}

	alert(mensajeUno);
	alert(mensajeDos);
	alert(mensajeTres);
}

/*
Bienvenidos. 
Realizar el algoritmo que permita el ingreso por prompt de las notas (validar entre 0 y 10) , 
el sexo (validar el sexo “f” o “m”) de 5 alumnos, informar por alert: 
a) El promedio de las notas totales. 
b) La nota más baja y el sexo de esa persona. 
c) La cantidad de varones que su nota haya sido mayor o igual a 6.
*/
