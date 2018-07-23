function mostrar()
{
	var mesDelAño = document.getElementById('mes').value;

	console.log(mesDelAño);
	
	switch (mesDelAño)
	{
	 
	 case"Enero":
	    
	     alert("Que comiencen bien el año!!!.");
	    
	     break;
	 
	 case"Marzo":

	     alert("A clases!!!.");

	     break;

	 case"Julio":

	     alert("Se las vacaciones");

	     break;

	 case"Diciembre":  

	     alert("Felices fiestas!!!.");

	     break;       
	}
}