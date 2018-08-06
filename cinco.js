function mostrar()
{
	var planeta;

	planeta = prompt("Ingrese un planeta del sistema solar");

	switch(planeta)
	{
		case "mercurio":
		alert("aca hace mas calor");
		break;

		case "tierra":
		alert("aca vivimos")
		break;

		case "neptuno":
		alert("aca hace mas frio");
		break;

		default:
				alert("No es un planeta valido ");
				break;
	}
}
