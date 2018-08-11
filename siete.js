/*
Realizar un algoritmo que permita el ingreso del nombre, el ancho, el alto y el peso de 5 productos .Validar todos los datos, sabiendo que no puede tener más de 10 de ancho y 10 de alto, y su peso no puede superar los 1000 kilos. Informar: 
a- el peso más pesado
b- la altura más alta
c- el menor ancho.
d- la cantidad que tiene un peso entre 300 y 600 kilos.  
*/
function mostrar()
{
	var nombre;
	var ancho;
	var largo;
	var peso;
	var contador;
	var masPesado;
	var masAlto;
	var menorAncho;
	var contador300e600;


	contador=0

	while(contador<5)
	{
	nombre = prompt("ingrese un nombre");
	ancho = prompt("ingrese un ancho");
	ancho = parseInt(ancho);
	
	//VALIDACION
	while(ancho<0 || ancho>10)
	{
		ancho = prompt("ingrese el ancho");
		ancho = parseInt(ancho);
	}
	//VALIDACION
	while(largo<0 || largo>10)
	{
		largo = prompt("ingrese el largo");
		largo = parseInt(largo);
	}
	//VALIDACION
	while(peso<0 || peso >1000)
	{
		peso = prompt("ingrese el peso")
		peso = parseInt(peso);
	}
	contador++;

	//ANALISIS
	if(contador==1)
	{
		masAlto=largo;
		masPesado=peso;
		masAncho=ancho;
	}else
	{
		if(largo>masAlto)
		{
			masAlto=alto
		}
		if(peso>masPesado)
		{
			masPesado=peso;
		}
		if(ancho<menorAncho)
		{
			menorAncho=ancho;
		}
	}//fin else


	}//fin while

}//fin de funcion
