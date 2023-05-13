function welcome() {
	var nombre = document.getElementById("username-input").value;
	var mensaje = "Welcome, " + nombre + "!";
	document.getElementById("mensajeBienvenida").innerHTML = mensaje;
}

function goToMenu()
{
	window.location.href = "menu.html";
}