function mostrar()
{
	//Variables
	var animal;
	var peso;
	var temperatura;
	var animalMasPesado;
	var tempaAnimalPesado;
	var pesoMaximoBajoCero = 0;
	var pesoMinimoBajoCero = 0;

	//Variedad
	var bandera = false;
	var respuesta = true;
	var acumuladorPeso = 0;

	//Contador
	var contador = 0;
	var contadorAnima0grados = 0;
	var contadorPares = 0;


	while (respuesta == true)
	{
		contador++;

		animal = prompt("Ingrese un animal");

		while (isNaN(animal) == false)
		{
			animal = prompt("El animal ingresado es incorrecto, ingreselo nuevamente");
		}

		peso = prompt("Ingrese un peso (entre 1 y 1000) " +contador+ ": ");

		peso = parseInt(peso);

		while (isNaN(peso) == true || peso < 1 || peso > 1000)
		{
			peso = prompt("El peso ingresado es incorrecto, ingrese otro nuevamente entre 1 y 1000");

			peso = parseInt(peso);
		}

		temperatura = prompt("Ingrese un temperatura (entre 30 y -30) " +contador+ ": ");

		temperatura = parseInt(temperatura);

		while (isNaN(temperatura) == true || temperatura < -30 || temperatura > 30)
		{
			temperatura = prompt("El temperatura ingresado es incorrecto, ingrese otro nuevamente entre -30 y 30");

			temperatura = parseInt(temperatura);
		}

		if (bandera == false)
		{
			animalMasPesado = animal;

			tempaAnimalPesado = temperatura;

			pesoMaximoBajoCero = peso;

			pesoMinimoBajoCero = peso;

			bandera == true;
		}

		if (peso > animalMasPesado)
		{
			animalMasPesado = animal;

			tempaAnimalPesado = temperatura;	
		}

	 	else if (temperatura < 0)
		{
			if(peso > pesoMaximoBajoCero)
			{
				pesoMaximoBajoCero = peso;
			}
			else
			{
				pesoMinimoBajoCero = peso;
			}
		}
		
		if (temperatura < 0)
		{
			contadorAnima0grados++;
		}

		if (temperatura % 2 == 0)
		{
			contadorPares++;
		}

		acumuladorPeso = (acumuladorPeso + peso)

		promedioTotal = (acumuladorPeso / contador);

		respuesta = confirm("¿Quieres ingresar otro peso?");
	}

	document.write("<br> La cantidad de temperaturas pares es: " +contadorPares);
	document.write("<br> La cantidad de animales que viven a menos de 0 grados son: " +contadorAnima0grados);
	document.write("<br> El promedio del peso de todos los animales es: " +promedioTotal);
	document.write("<br> El peso máximo de todos los animales cuyas temperaturas sean bajo cero es: " +pesoMaximoBajoCero);
	document.write("<br> El peso minimo de todos los animales cuyas temperaturas sean bajo cero es: " +pesoMinimoBajoCero);
}
/*
Bienvenidos. 
Realizar el algoritmo que permita ingresar el nombre de un animal del zoológico, el peso el cual debe ser entre 1 y 1000 y 
la temperatura del hábitat (entre -30 y 30) hasta que el usuario quiera e informar al terminar el ingreso por document.write:
a) La cantidad de temperaturas pares. 
b) El nombre y temperatura del animal más pesado 
c) La cantidad de animales que viven a menos de 0 grados. 
d) El promedio del peso de todos los animales.	
f) El peso máximo y el mínimo de todos los animales cuyas temperaturas sean bajo cero.
*/