function goToMenu()
{
    window.location.href = "../html/menu.html";
}

function getUsername()
{
    var username = sessionStorage.getItem('username');
    document.getElementById('username').textContent = username;
}

function joinParty(button) {
    var roomName = button.getAttribute("nameCell");
    var roomCapacity = button.getAttribute("capacityCell");
    window.location.href = "play.html?roomName=" + roomName + "&roomCapacity=" + roomCapacity;
  }

// function generateMenu() {
//     var roomMapJSON = localStorage.getItem("roomMap");
//     var roomMap = new Map(JSON.parse(roomMapJSON));
//     var menu = document.getElementById("menu");
  
//     console.log(roomMap);
//     // Dynamically generate the menu options
//     roomMap.forEach((value, key) => {
//       const optgroup = document.createElement("optgroup");
//       optgroup.label = key;
  
//       menu.appendChild(optgroup);
//     });
//     console.log(menu);
//     return menu;
//   }

