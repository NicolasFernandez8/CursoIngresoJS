function mostrar()
{

	var contador=0;
	var positivo=0;
	var negativo=1;
	var numero;
	
	var respuesta='si';

	contador=0;
	positivo=0;
	respuesta ="si";
	
	while(respuesta != "n")
	
	{
		
		numero = prompt("Ingrese numero #" +contador);

		numero = parseInt(numero);
	}
	
	if  (numero >0)
	
	{

		positivo = positivo + numero;

	}
	
	else if (numero >0)
	{
	
		negativo = negativo * numero;

	
	}
	
	respuesta = prompt("Desea seguir ingresado numero");

document.getElementById('suma').value="Este valor es positivo" +positivo;
document.getElementById('producto').value="Este valor es negativo" +negativo;

}//FIN DE LA FUNCIÓN