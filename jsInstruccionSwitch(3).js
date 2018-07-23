function mostrar()
{
	var mesDelAño = document.getElementById('mes').value;
    
    alert(mesDelAño);

    switch(mesDelAño)
    {
    
     case"Julio":
          alert("Este mes tiene 30 o mas dias.");
          break;
     
     case"Agosto":
          alert("Este mes tiene 30 o mas dias.");
    	  break;
    	
     case"Febrero":
    	  alert("Este mes no tiene mas de 29 dias.");
    	  break;
    	
     case"Marzo":
    	  alert("Este mes tiene 30 o mas dias.");
    	  break;
    	
     case"Abril":
          alert("Este mes tiene 30 o mas dias.");
          break;

     case"Mayo":
          alert("Este mes tiene 30 o mas dias.");
          break;
    	
     case"Junio":

    	  alert("Este mes no tiene mas de 29 dias.");
    	  break;
    }
} 