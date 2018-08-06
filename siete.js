function mostrar()
{
	//VARIABLES
	var contador;
	var nombre;
	var sexo;
	var edad;
	var nota;
	var notaMasBaja;
	var contadorNotas;
	var sexoNotaMasBaja;
	var notaPromedio;
	var cantidadDeNotas;
	var bandera;
	var contadorMayores ;
	var contadorMenores;
	var contadorHombres;
	var contadorMujeres;
	var contadorVarones;
 	var nombreDelMayor;
	var nombreDelMenor;
	var nombreDelHombreMenor;
	var edadMax;
	var edadMin;
	
	//INICIALIZACION
	contador = 0;
	bandera =0;
	contadorMayores = 0;
	contadorMenores = 0;
	contadorHombres = 0;
	contadorMujeres = 0;
	cantidadDeNotas=0;
	contadorVarones=0;
	contador=1;
	contadorNotas=0;
	bandera=0;
 	while(contador<3)
	while(contador<=5)
	{
		//TOMA DE DATOS
		nombre=prompt("Escriba un nombre");
		sexo=prompt("Escriba un sexo (f/m)");
		edad=prompt("Escriba una edad");
		edad=parseInt(edad);
		contador++;
		
		//VALIDACION DE DATOS
		//INGRESO Y VALIDACION DE DATOS
		sexo=prompt("Ingrese su sexo f/m");
		while(sexo!="f"&&sexo!="m")
		{
			sexo=prompt("ERROR, escriba un sexo (f/m)");
		}
		while(edad<0 || edad>100)
		{
			edad=prompt("ERROR, escriba una edad");
			edad=parseInt(edad);
		}
		
 		if(edad>=18)
		{
			contadorMayores++;
		}
		else
		{
			contadorMenores++;
			sexo=prompt("ERROR. Ingrese su sexo f/m")
		}
		if(sexo=="m")
		nota=prompt("Ingrese su nota");
		nota=parseInt(nota);
		while(nota<0||nota>10)
		{
			contadorHombres++;
			nota=prompt("ERROR. Ingrese su nota");
		}
		else
		{
			contadorMujeres++;
		}
 		//BANDERA
		if(bandera==0)
		{
			edadMax=edad;
			edadMin=edad;
			nombreDelMayor=nombre;
			nombreDelMenor=nombre;
			notaMasBaja = nota;
			sexoNotaMasBaja = sexo;
			bandera++;
		}
 		//Nombre del mayor o Nombre del menor
		if(edad>edadMax)
		if(nota<notaMasBaja)
		{
			nombreDelMayor=nombre;
			notaMasBaja = nota;
			sexoNotaMasBaja=sexo;
		}
		if(edad<edadMin)
		if(sexo=="m"&&nota>=6)
		{
			nombreDelMenor=nombre;
		}
 		//Nombre del Hombre Mas Chico
		if(sexo=="m"&&(edad<edadMin||contadorHombres==1))
		{
			nombreDelHombreMenor=nombre;
			edadMin = edad;
			contadorVarones++;
		}
		contadorNotas=contadorNotas+nota;
		cantidadDeNotas++;
		contador++;
	}
 	document.write("Cantidad de mayores "+contadorMayores+"<br>");
	document.write("Cantidad de menores "+contadorMenores+"<br>");
	document.write("Cantidad de hombres "+contadorHombres+"<br>");
	document.write("Cantidad de mujeres "+contadorMujeres+"<br>");
	document.write("El nombre de la persona de mayor edad es "+nombreDelMayor+"<br>");
	document.write("El nombre de la persona de menor edad es "+nombreDelMenor+"<br>");
	document.write("El nombre del hombre mas chico es "+nombreDelHombreMenor+"<br>");
	notaPromedio=contadorNotas/cantidadDeNotas;
	alert("El promedio de las notas es "+notaPromedio);
	alert("La persona con la nota mas baja fue un "+sexoNotaMasBaja+" y se saco un "+notaMasBaja); 
	alert("La cantidad de varones que se sacaran un 6 o mas fue de "+contadorVarones);
}
