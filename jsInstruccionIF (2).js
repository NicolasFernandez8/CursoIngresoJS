function mostrar()
{
//tomo la edad  
var edad

edad = document.getElementById('edad').value;

edad = parseInt(edad);

if (edad >= 18)
{
	alert("Es mayor de edad");

}

}