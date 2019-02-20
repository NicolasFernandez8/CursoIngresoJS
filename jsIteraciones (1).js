// Toda interracion tiene un comienzo, un recorrido y una accion que marca su final.
// 1 Paso: ontador = 0;
// 2 Paso: while(contador < 10){}
// 3A Paso: Dentro del While ::::: contador = contador+1; (o contador++;)
// 3B Paso: Dentro del While ::::: contador = contador-1; (o contador--;)

function mostrar()
{
	var contador = 0;

	while(contador < 10)// el 10 es la cantidad de veces que se va a repetir.
	{
		console.log(contador);

		contador = contador+1; 
	}

	alert('iteración while');

}//FIN DE LA FUNCIÓN