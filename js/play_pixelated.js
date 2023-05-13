function goToMenu()
{
    window.location.href = "../html/menu.html";
}

function getUsername()
{
    var username = sessionStorage.getItem('username');
    document.getElementById('username').textContent = username;
}

function loadImage()
{
    var image = new Image();
    image.src = "../img/EIFFEL.jpg";

    var canvas = document.getElementById('my-canvas');
    var context = canvas.getContext('2d');

    var iterations = 1000; // Number of despixelation steps
    let currentIteration = 0;

    // Function to update the image data on the canvas
    function despixelate() {
      if (currentIteration >= iterations) {
        return; // Stop once the desired level of despixelation is reached
      }

      var targetWidth = Math.floor(image.width * (currentIteration + 1) / iterations);
      var targetHeight = Math.floor(image.height * (currentIteration + 1) / iterations);

      context.clearRect(0, 0, canvas.width, canvas.height);
      context.drawImage(image, 0, 0, targetWidth, targetHeight, 0, 0, canvas.width, canvas.height);

      currentIteration++;

      // Call the function again in the next animation frame
      requestAnimationFrame(despixelate);
    }

    // Start the despixelation process
    image.onload = () => {
      despixelate();
    };
}