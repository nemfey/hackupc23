const randomNumber = Math.floor(Math.random() * 10) + 1;
const optionsMap = new Map();
optionsMap.set(1,['Croissant','Baguette', 'Macaron', 'Éclair']);
optionsMap.set(2,['Eiffel Tower','La Grande Arche', 'La Tour First', 'The Louvre']);
optionsMap.set(3,['Canal Saint Martin','Canal du Midi', 'The iron bridge', 'Canal du oiseau']);
optionsMap.set(4,['Remy','The grand rat', 'Ratatouille', 'Chatte']);
optionsMap.set(5,['Fondue','Louvre', 'Champagne', 'Le chateau du soleil']);
optionsMap.set(6,['Buttes-Chaumont','Parque de Bercy', 'Parque Montsouris', 'Éclair']);
optionsMap.set(7,['The Louvre','Château de Versailles', 'Parque Montsouris', 'La Tour First']);
optionsMap.set(8,['Château de Versailles','Croissant', 'Canal du oiseau', 'Oiseau bleu']);
optionsMap.set(9,['Voltaire','Rosseau', 'Macron', 'Mime']);
optionsMap.set(10,['Macaron','Feta', 'Éclair', 'Emmental']);

function goToMenu()
{
    window.location.href = "../html/menu.html";
}

function getUsername()
{
    var username = sessionStorage.getItem('username');
    document.getElementById('username').textContent = username;
}

function loadOptions()
{
    var options = optionsMap.get(randomNumber);
    document.getElementById('option1').textContent = options[0];
    document.getElementById('option2').textContent = options[1]; 
    document.getElementById('option3').textContent = options[2]; 
    document.getElementById('option4').textContent = options[3];


}

function loadImage()
{
    var image = new Image();
    image.src = "../img/"+randomNumber+".jpg"; // Replace with the path to your image
    var canvas = document.getElementById('my-canvas');
    var context = canvas.getContext('2d');

    var randomNum = Math.random();
    if (randomNum < 0.5)
    {
        blurred_procedure(image,canvas,context);
    }
    else
    {
        pixelated_procedure(image,canvas,context)
    }
}

function blurred_procedure(image,canvas,context)
{
  // Wait for the image to load
  image.onload = function() {
    canvas.width = image.width;
    canvas.height = image.height;

    //resizeImage(image,canvas);

    // Draw the fully blurred image
    context.filter = 'blur(10px)';
    context.drawImage(image, 0, 0);

    // Gradually reduce the blur effect over time
    let blurAmount = 50;
    const animationDuration = 4500; // Adjust this value to control the duration of the animation
    const blurStep = blurAmount / (animationDuration / 16); // Adjust 16 for a smoother animation (60 fps)

    const animate = () => {
      blurAmount -= blurStep;
      context.clearRect(0, 0, canvas.width, canvas.height);
      context.filter = `blur(${blurAmount}px)`;
      context.drawImage(image, 0, 0, canvas.width, canvas.height);

      if (blurAmount > 0) {
        requestAnimationFrame(animate);
      }
    };

    // Start the animation
    animate();
  };
}

function pixelated_procedure(image,canvas,context)
{
    var iterations = 1000; // Number of despixelation steps
    let currentIteration = 0;

    //resizeImage(image,canvas);

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

function resizeImage(images,canvas)
{
    var aspectRatio = image.width / image.height;

    // Calculate the maximum width and height based on the canvas dimensions
    var maxWidth = canvas.width;
    var maxHeight = canvas.height;

    // Calculate the actual width and height of the image to fit within the maximum size
    var width = image.width;
    var height = image.height;

    if (width > maxWidth) {
        width = maxWidth;
        height = width / aspectRatio;
    }

    if (height > maxHeight) {
        height = maxHeight;
        width = height * aspectRatio;
    }

    // Clear the canvas and draw the resized image
    context.clearRect(0, 0, canvas.width, canvas.height);
    context.drawImage(image, 0, 0, canvas.width, canvas.height);
}