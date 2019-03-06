function mostrar()
{
	//Varibles
	var marcaProducto;
	var peso;
	var temperatura;
	var marcaMasPesada;
	var promedioTotal;
	var pesoMaximo = 0;
	var pesoMinimo = 0;

	//Variedad
	var acumuladorPeso = 0;
	var bandera = false;
	var respuesta = true;

	//Contador
	var contador = 0;
	var contadorTempPares = 0;
	var contadorProduc0grados = 0;

	while (respuesta == true)
	{
		contador++;

		marcaProducto = prompt("Ingresar marca del producto");

		peso = prompt("Ingresa un peso (entre 1 y 100) " +contador+ ": ");

		peso = parseInt(peso);

		while (isNaN(peso) == true || peso < 1 || peso > 100)
		{
			peso = prompt("El peso ingresado es incorrecto, ingrese un peso nuevamente entre 1 y 100");

			peso = parseInt(peso);
		}

		temperatura = prompt("Ingrese una temperatura (entre -30 y 30)");

		temperatura = parseInt(temperatura);

		while (isNaN(temperatura) == true || temperatura < -30 || temperatura > 30)
		{
			temperatura = prompt("La temperatura ingresada es incorreta, ingrese una temperatura nuevamente entre -30 y 30");

			temperatura = parseInt(temperatura);
		}
		
		if (temperatura % 2 == 0) 
		{
			contadorTempPares++;
		}

		if (temperatura < 0)
		{
			contadorProduc0grados++;
		}

		if (bandera == false)
		{
			marcaMasPesada = marcaProducto;

			pesoMaximo = peso;

			pesoMinimo = peso;

			bandera = true;
		}

		if (peso > pesoMaximo)
		{
			pesoMaximo = peso;

			marcaMasPesada = marcaProducto;
		}
		
		else 
		{
			pesoMinimo = peso;
		}
	
		acumuladorPeso = (acumuladorPeso + peso);

		promedioTotal = (acumuladorPeso / contador);

		respuesta = confirm("¿Quieres ingresar otro peso?");
	}
	
	document.write("<br> La cantidad de temperatura pares es: " +contadorTempPares);
	document.write("<br> La marca del producto mas pesado es: " +marcaMasPesada);
	document.write("<br> La cantidad de productos que se conservan a menos de 0 grados son: " +contadorProduc0grados);
	document.write("<br> El promedio de peso de todos los productos es: " +promedioTotal);
	document.write("<br> El peso maximo es: " +pesoMaximo+ " y el peso minimo es: " +pesoMinimo);
}

/*
Bienvenidos. 
Realizar el algoritmo que permita ingresar la marca del producto, 
el peso el cual debe ser entre 1 y 100 (validar), 
la temperatura de almacenamiento(entre -30 y 30) 
hasta que el usuario quiera e informar al terminar el ingreso 
por document.write:
a) La cantidad de temperaturas pares. 
b) La marca del producto más pesado 
c) La cantidad de productos que se conservan a menos de 0 grados. 
d) El promedio del peso de todos los productos.
f) El peso máximo y el mínimo.
*/