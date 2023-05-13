function goToMenu()
{
    window.location.href = "menu.html";
}

function getUsername()
{
    var username = sessionStorage.getItem('username');
    document.getElementById('username').textContent = username;
}

function loadImage()
{
    const pixelatedImage = new Image();
    pixelatedImage.src = "img/EIFFEL.jpg";

    const canvas = document.getElementById('my-canvas');
    const ctx = canvas.getContext('2d');

    const iterations = 1000; // Number of despixelation steps
    let currentIteration = 0;

    // Function to update the image data on the canvas
    function despixelate() {
      if (currentIteration >= iterations) {
        return; // Stop once the desired level of despixelation is reached
      }

      const targetWidth = Math.floor(pixelatedImage.width * (currentIteration + 1) / iterations);
      const targetHeight = Math.floor(pixelatedImage.height * (currentIteration + 1) / iterations);

      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.drawImage(pixelatedImage, 0, 0, targetWidth, targetHeight, 0, 0, canvas.width, canvas.height);

      currentIteration++;

      // Call the function again in the next animation frame
      requestAnimationFrame(despixelate);
    }

    // Start the despixelation process
    pixelatedImage.onload = () => {
      despixelate();
    };
}