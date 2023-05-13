function goToMenu()
{
    window.location.href = "menu.html";
}

function getUsername()
{
    var username = sessionStorage.getItem('username');
    document.getElementById('username').textContent = username;
}