function mostrar()
{
	var numeroIngresado;
	var numeroAnteriores;
	var numeroRecorrido;
	var esPrimo;



	numeroIngresado = prompt("Ingrese numero");
	numeroIngresado = parseInt(numeroIngresado);

	
	esPrimo = 0;
	for(numeroIngresado = -1 ; numeroAnteriores < 1 ; numeroAnteriores --){

		if(numeroIngresado % numeroAnteriores == 0){

		 	console.log(numeroAnteriores);
			esPrimo = 1;
			break;
		}
		if(esPrimo == 0){

			console.log(numeroIngresado + "es un numero Primo");
		}

		else{

			console.log(numeroIngresado + "no es un numero primo");
		}
		
		}
		//FIN DE LA FUNCIÓN;	
		

		/*
		for(numeroRecorrido = numeroIngresado ; numeroRecorrido >1 ; numeroRecorrido--){
			
			esPrimo = 0;
		
		for(numeroAnteriores = 2 ;numeroAnteriores < numeroRecorrido ; numeroAnteriores --){
			if(numeroIngresado % numeroAnteriores == 0){

		 	esPrimo = 1;
			break;
		}
		if(esPrimo == 0){

			console.log(numeroIngresado + "es un numero Primo");
			}
		} 
	}
	*/

