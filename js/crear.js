function goToMenu()
{
    window.location.href = "../html/menu.html";
}


function getHostname()
{
    var hostname = sessionStorage.getItem('hostname');
    document.getElementById('hostname').textContent = hostname;
    console.log(hostname);
} 

function getRoomCapacity()
{
    var hostname = sessionStorage.getItem('hostname');
    var roomMapJSON = localStorage.getItem("roomMap");
    var roomMap = new Map(JSON.parse(roomMapJSON));

    const valueArray = roomMap.get(hostname);
    rc = 0;
    if (valueArray)
    {
        rc = valueArray.length;
    }
    var room_capacity = rc;
    document.getElementById('room_capacity').textContent = room_capacity;
    console.log(room_capacity);
    console.log(roomMap.get(hostname));
}