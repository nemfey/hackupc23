function welcome() {
	var nombre = document.getElementById("username-input").value;
	var mensaje = "Welcome, " + nombre + "!";
	document.getElementById("mensajeBienvenida").innerHTML = mensaje;
}

function goToMenu()
{
	window.location.href = "menu.html";
}

<<<<<<< Updated upstream
function createRoom()
{
	var username = document.getElementById('username-input').value;
	sessionStorage.setItem('username',username);

	var roomMap = localStorage.getItem("roomMap");
	if (roomMap)
	{
		roomMap = new Map(JSON.parse(roomMap));
	}
	else
	{
		roomMap = new Map();
	}
	roomMap.set(username,[username]);
	localStorage.setItem('roomMap',JSON.stringify(Array.from(roomMap)));

	roomMap.forEach((value, key) => {
        console.log(value);
     });
}

//function joinRoom()
//{
//	var username = document.getElementById('username-input').value;
//	sessionStorage.setItem('username',username);
//}

=======
>>>>>>> Stashed changes
function create_alert(element, s){
    if (element) return;
    const al = document.createElement('div'); 
    al.id = "form-alert"
    al.innerHTML = s;
    al.className = "alert alert-danger";
    al.style.textAlign = "center";
    document.getElementById('wrapper').appendChild(al);
    return;
}

// var roomMap = localStorage.getItem("roomMap");

<<<<<<< Updated upstream
// Create room
=======
>>>>>>> Stashed changes
$(window).on("load",  async () => {

    $('#formulario').on("click", () => {

		const element = document.getElementById('form-alert');
        const nombre = document.getElementById('username-input').value;

        if (nombre === "" || nombre === null) {
            const s = "Incomplete field";
            if (element) document.getElementById('wrapper').removeChild(element);
            create_alert(null, s);
            return;
        }
		else {
<<<<<<< Updated upstream
			createRoom();
=======
			var username = document.getElementById('username-input').value;
			sessionStorage.setItem('username',username);
>>>>>>> Stashed changes
			window.location.href = "crear.html";
		}
        return;
    });

})

<<<<<<< Updated upstream
// Join room
=======
>>>>>>> Stashed changes
$(window).on("load",  async () => {

    $('#join').on("click", () => {

		const element = document.getElementById('form-alert');
        const nombre = document.getElementById('username-input').value;

        if (nombre === "" || nombre === null) {
            const s = "Incomplete field";
            if (element) document.getElementById('wrapper').removeChild(element);
            create_alert(null, s);
            return;
        }
		else {
			var username = document.getElementById('username-input').value;
			sessionStorage.setItem('username',username);
			window.location.href = "unir.html";
		}
        return;
    });

})