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
  var canvas = document.getElementById('my-canvas');
  var context = canvas.getContext('2d');
  var image = new Image();
  image.src = "img/croissant.jpg"; // Replace with the path to your image

  // Wait for the image to load
  image.onload = function() {
    canvas.width = image.width;
    canvas.height = image.height;

    // Draw the fully blurred image
    context.filter = 'blur(10px)';
    context.drawImage(image, 0, 0);

    // Gradually reduce the blur effect over time
    let blurAmount = 50;
    const animationDuration = 4000; // Adjust this value to control the duration of the animation
    const blurStep = blurAmount / (animationDuration / 16); // Adjust 16 for a smoother animation (60 fps)

    const animate = () => {
      blurAmount -= blurStep;
      context.clearRect(0, 0, canvas.width, canvas.height);
      context.filter = `blur(${blurAmount}px)`;
      context.drawImage(image, 0, 0);

      if (blurAmount > 0) {
        requestAnimationFrame(animate);
      }
    };

    // Start the animation
    animate();
  };
}


