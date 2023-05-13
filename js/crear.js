function goToMenu()
{
    window.location.href = "../html/menu.html";
}

function getUsername()
{
    var username = sessionStorage.getItem('username');
    document.getElementById('username').textContent = username;
}

function createNewRoom()
{
    var username = sessionStorage.getItem('username');
    localStorage.getItem()
}

function getRoomCapacity()
{
    var room_capacity = 1;
    document.getElementById('room_capacity').textContent = room_capacity;
}