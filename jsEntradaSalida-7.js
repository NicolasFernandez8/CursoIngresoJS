/*Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resulto por medio de "ALERT"
ej.: "la Resta es 750"*/ 
function sumar()
{	
	var suma;
	var resultado;
	var numeroUno;
	var numeroDos;

	numeroUno = document.getElementById('numeroUno').value; 

	numeroDos = document.getElementById('numeroDos').value;

	numeroUno = parseInt(numeroUno);

	numeroDos = parseInt(numeroDos);

	resultado = (numeroUno + numeroDos);

	alert("El resultado es: " +resultado);	
	
}

function restar()
{
	var resta;
	var resultado;
	var numeroUno;
	var numeroDos;

	numeroUno = document.getElementById('numeroUno').value; 

	numeroDos = document.getElementById('numeroDos').value;

	numeroUno = parseInt(numeroUno);

	numeroDos = parseInt(numeroDos);

	resultado = (numeroUno - numeroDos);

	alert("El resultado es: " +resultado);	
	
}

function multiplicar()
{ 
	var multiplicar;
	var resultado;
	var numeroUno;
	var numeroDos;

	numeroUno = document.getElementById('numeroUno').value; 

	numeroDos = document.getElementById('numeroDos').value;

	numeroUno = parseInt(numeroUno);

	numeroDos = parseInt(numeroDos);

	resultado = (numeroUno * numeroDos);

	alert("El resultado es: " +resultado);	
}

function dividir()
{
	var dividir;
	var resultado;
	var numeroUno;
	var numeroDos;

	numeroUno = document.getElementById('numeroUno').value; 

	numeroDos = document.getElementById('numeroDos').value;

	numeroUno = parseInt(numeroUno);

	numeroDos = parseInt(numeroDos);

	resultado = (numeroUno / numeroDos);

	alert("El resultado es: " +resultado);	
	
}

