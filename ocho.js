function mostrar()
{
	var nombre;
	var sexo;
	var estadoCivil
	var cantidad;
	var importeTotal;
	var repuesta;
	var mayorCantidad;
	var mayorCantidadNombre;
	var banderaYaPaso;
	var banderaSoltero;
	var masGasto;
	var menosGasto;
	var masGastoSexo;
	var menosGastoSexo;
	var primerMujerImporte;
	var primerMujerNombre;
	var primerMujerBandera;
	var cantidadViudos;
	var acumuladorViudos;
	var promedioTotal;

	respuesta= "n";
	banderaYaPaso = "no";
	banderaSoltero = "no";
	primerMujerBandera = 0;
	acumuladorViudos = 0;
	cantidadViudos = 0;
	
	while(respuesta != "n")
	{
	nombre = prompt("Ingrese nombre");
	sexo = prompt("Ingrese sexo");
	while(sexo != "f" && sexo != "m")
	{
		sexo = prompt("Ingrese sexo");
	}
	estadoCivil= prompt("Ingrese estadoCivil");
	while(estadoCivil != "s" && estadoCivil != "c" && estadoCivil != "casado" && estadoCivil != "viuda")
	{
		estadoCivil= prompt("Ingrese estadoCivil");
	}
	cantidad= prompt("Ingrese cantidad");
	while(cantidad < "0" && cantidad isNaN(cantidad))
	{
		cantidad= prompt("Ingrese cantidad");
		cantidad=parseInt(cantidad);
	}
	importeTotal= prompt("Ingrese importeTotal");
	while(importeTotal < "0" && importeTotal isNaN(importeTotal))
	{
		importeTotal= prompt("Ingrese importeTotal");
		importeTotal=parseInt(importeTotal);
	}
	//ANALISIS

	if(banderaYaPaso == "no")
	{
		banderaYaPaso = "si";
		mayorCantidad = cantidad;
		mayorCantidadNombre = nombre;
	} else
	{
		if(cantidad > mayorCantidad)
		{
			mayorCantidad = cantidad;
			mayorCantidadNombre = nombre;
		}
	}

	if(estadoCivil=="soltero")
	{
		if(banderaSoltero == "no")
		{
			banderaSoltero == "si";
			masGasto = importeTotal;
			menosGasto = importeTotal;
			masGastoSexo = sexo;
			menosGastoSexo = sexo;

		} else
		{
			if(importeTotal > masGasto)
			{
				masGasto = importeTotal;
				masGastoSexo = sexo;
			}
			if(importeTotal < menosGasto)
			{
				menosGasto = importeTotal;
				menosGastoSexo = sexo;
			}
		}
	}
	if(sexo == "f" && primerMujerBandera == 0)
	{
		primerMujerBandera = 1;
		primerMujerNombre = nombre;
		primerMujerImporte = importeTotal;
	}
	if(estadoCivil == "viudo")
	{
		cantidadViudos++;
		acumuladorViudos = acumuladorViudos + importeTotal;
	}

	respuesta = prompt("Ingrese (n) para salir");
	}
	promedioTotal = cantidadViudos / acumuladorViudos;
}
