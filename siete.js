/*
Ingreso:
maria f 15
jose m 33
pepe m 81

mostrar:
	cantidad
	1- de mayores de edad = 2
	2-menores de edad = 1
	3-cantidad mujeres = 1
	4-cantidad hombres = 2
	nombre
	5-del mayor edad = pepe
	6-del menor edad = maria
	7-del hombre de menor edad = jose
*/
function mostrar()
{
		var nombre;
		var sexo;
		var edad;
		var cantidad;
		var contador;
		var contadordeMayoredad = 2;
		var contadordeMenoredad = 1;
		var promedioTotal;
		var promedio;
		contador = 0
		
		while(contador <3)
		{

			contador++;
			nombre = prompt("ingrese su nombre");
			sexo = prompt("ingrese su sexo");
			while(sexo !="f" && sexo !="m")
			{
				sexo = prompt("error ingrese el sexo nuevamente");
			}
			
			edad = prompt("ingrese edad ");
			while(edad >0 || <100)
			{
				prompt("error ingrese la edad nuevamente");
			}

			if(edad >18)
			{
				contadordeMayoredad++;
			}	
			else
			{
				if(edad <18)
				{
					contadordeMenoredad++
				}
			}

			promedioTotal = contadordeMayoredad + contadordeMenoredad;
			
			contadordeMayoredad = contadordeMayoredad/promedio;
			
			contadordeMenoredad = contadordeMenoredad/promedio;
			
			cantidad = 


			document.getElementById('nombre').value;
			document.getElementById('sexo').value;
			document.getElementById('edad').value;
			edad = parseInt(edad);
			document.write("<br> La cantidad de mayores es:" +contadordeMayoredad);
			document.write("<br> La cantidad de menores es" +contadordeMenoredad);

		
		}

}