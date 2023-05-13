function goToMenu()
{
    window.location.href = "../html/menu.html";
}

function getUsername()
{
    var username = sessionStorage.getItem('username');
    document.getElementById('username').textContent = username;
} 

function getRoomCapacity()
{
    var username = sessionStorage.getItem('username');
    var roomMapJSON = localStorage.getItem("roomMap");
    var roomMap = new Map(JSON.parse(roomMapJSON));

    const valueArray = roomMap.get(username);
    rc = 0;
    if (valueArray)
    {
        rc = valueArray.length;
    }
    var room_capacity = rc;
    document.getElementById('room_capacity').textContent = room_capacity;
}