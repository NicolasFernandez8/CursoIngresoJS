function mostrar()
{
	//Variable
	var altura;
	var sexo;
	var alturaMasBaja;
	var sexoMasBajo;
	var promedioTotal;
	var mensajeUno;
	var mensajeDos
	var mensajeTres;

	//Variedad
	var bandera = false;
	var respuesta = true;
	var acumuladorAlturas = 0;

	//Contadores
	var contador = 0;
	var contadorMujeresMayor = 0;

	while (respuesta == true)
	{
		contador++;

		altura = prompt("Ingrese una alutra en centimetros (entre 0 y 250) " +contador+ ": ");

		altura = parseInt(altura);

		while(isNaN(altura) == true || altura < 0 || altura > 250)
		{
			altura = prompt("La altura ingresada es incorrecta, ingresela nuevamente entre 0 y 250");

			altura = parseInt(altura);
		}

		sexo = prompt("Ingrese un sexo f/m")

		while (isNaN(sexo) == false || sexo != "f" && sexo != "m")
		{
			sexo = prompt("El sexo ingresado es incorrecto, ingreselo nuevamente entre estas 2 opciones f o m");
		}

		if (sexo == "f" && altura > 190)
		{
			contadorMujeresMayor++;

			mensajeDos = "La cantidad de mujeres que su altura supere los 190 centimetros es: " +contadorMujeresMayor;
		}

		if (bandera == false)
		{
			alturaMasBaja = altura;

			sexoMasBajo = sexo;

			bandera = true;
		}

		if (altura < alturaMasBaja)
		{
			alturaMasBaja = altura;

			sexoMasBajo = sexo;

			mensajeUno = "La altura más baja es: " +alturaMasBaja+ " y el sexo de esa persona es: " +sexoMasBajo; 
		}

		acumuladorAlturas = (acumuladorAlturas + altura);

		promedioTotal = (acumuladorAlturas / contador);

		mensajeTres = "El promedio de las alturas totales es: " +promedioTotal;

		respuesta = confirm("¿Quiere ingresar otra altura?");
	}

	alert(mensajeUno);
	alert(mensajeDos);
	alert(mensajeTres);
}

/*
Bienvenidos. 
Realizar el algoritmo que permita el ingreso por prompt de las alturas en centimetros(validar entre 0 y 250) , el sexo. (validar el sexo “f” o “m”) de 5 jugadores de basquet, informar por alert: 
a) El promedio de las alturas totales. 
b) La altura más baja y el sexo de esa persona. 
c) La cantidad de mujeres que su altura supere los 190 centimetros.
*/