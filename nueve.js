function mostrar()
{
	var nombre;
	var marca;
	var peso;
	var respuesta;
	var temperatura;
	var respuesta;
	var bandera;
	var temperaturaPar;
	var nombreMasPesado;
	var temperaturaMasPesado;
 	var marcaMax;
	var pesoMax;
	var bandera;
	var pesoMin;
 	var contadorCongelados;
	var contadorProductos;
	var acumuladorPeso;
	var promedioDePeso;
 	temperaturaPar=0;
	bandera=0;
	temperaturaPar=0;
	contadorCongelados=0;
	contadorProductos=0;
	acumuladorPeso=0;
 	respueta=prompt("¿Desea ingresar un animal (si/no)?.");
	respuesta=prompt("Desea ingresar un nuevo producto si/no.");
	if(respuesta!="si"&&respuesta!="no")
	{
		respuesta=prompt("ERROR. Desea ingresar un nuevo producto si/no.");
	}
 	while(respueta!="no")
	while(respuesta!="no")
	{
		//TOMA DE DATOS
		nombre=prompt("Ingrese un nombre.");
		marca=prompt("Ingrese una marca.");
		peso=prompt("Ingrese un peso.");
		peso=parseInt(peso);
		temperatura=prompt("Ingrese una temperatura.");
		temperatura=parseInt(temperatura);
		
		//VALIDACION DE DATOS
		if (peso<1||peso>1000)
		if(peso<1||peso>100)
		{
			peso=prompt("ERROR. Ingrese un peso.");
			peso=parseInt(peso);
			temperatura=prompt("ERROR. Ingrese una temperatura.");
			temperatura=parseInt(temperatura);
		}
		//CONTADORES
		if(temperatura%2==0)
		{
			temperaturaPar++;
		}
		
 		//BANDERA
		if(bandera==0)
		{
			nombreMasPesado=nombre;
			temperaturaMasPesado=temperatura;
			marcaMax=marca;
			pesoMax=peso;
			pesoMin=peso;
			bandera++;
		}
		//TEMPERATURAS PARES
		if(temperatura%2==0)
		{
			temperaturaPar++;
		}
 		//PESO MAXIMO
		if(peso>pesoMax)
		{
			nombreMasPesado=nombre;
			temperaturaMasPesado=temperatura;
			pesoMax=peso;	
			pesoMax=peso;
			marcaMax=marca;
		}
 		//PESO MINIMO
		if(peso<pesoMin)
		{
			pesoMin=peso;
		}
 		//TEMPERATURAS BAJO 0
		if(temperatura<0)
		{
			contadorCongelados++;
		}
 		//ACUMULADOR DE PESO
		acumuladorPeso=acumuladorPeso+peso;
		contadorProductos++;
 		respueta=prompt("¿Desea ingresar un animal (si/no)?.");
		//SE VUELVE A PREGUNTAR SI QUIERE INGRESAR OTRO PORDUCTO
		respuesta=prompt("Desea ingresar un nuevo producto si/no.");
		if(respuesta!="si"&&respuesta!="no")
		{
			respuesta=prompt("ERROR. Desea ingresar un nuevo producto si/no.");
		}
	}
	document.write("<br> La cantidad de temperaturas par es de : "+temperaturaPar);
	document.write("<br> El nombre del animal mas pesado es "+nombreMasPesado+" y la temperatura es "+temperaturaMasPesado);
 	promedioDePeso=acumuladorPeso/contadorProductos;
	document.write("<br> La cantidad de temperaturas pares es de: "+temperaturaPar);
	document.write("<br> La marca de l producto mas pesado es: "+marcaMax+" y pesa: "+pesoMax);
	document.write("<br> La cantidad de productos que se conservan a menos de 0 grados son: "+contadorCongelados);
	document.write("<br> El promedio de peso de todos los productos es de: "+promedioDePeso);
	document.write("<br> El peso mas bajo es de: "+pesoMin+" y el peso mas alto es de: "+pesoMax);
}
