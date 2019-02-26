function mostrar()
{
	var contador;
	var positivo;
	var negativo;
	var numero;
	var respuesta;

	contador = 0;
	positivo = 0;
	negativo = 1;
	respuesta = "si";

	while(respuesta == "si")
	{
		numero = prompt("ingresar numero " +contador+ ": ");

		numero = parseInt(numero);
		
		if (numero > 0)
		{
			positivo = numero + positivo;
		}
		
		else
		{
			negativo = numero * negativo;
		}

		contador++;

		respuesta = prompt("Quiere ingresar otro numero si/no");
	}

document.getElementById('suma').value = positivo;
document.getElementById('producto').value = negativo;
}