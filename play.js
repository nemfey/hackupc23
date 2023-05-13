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
    pixelatedImage.src = "img/croissant.jpg";

    const canvas = document.getElementById('my-canvas');
    const ctx = canvas.getContext('2d');

    const iterations = 2000; // Number of despixelation steps
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

// img.onload = function() {
//     var canvas = document.createElement('canvas'),
//         ctx = canvas.getContext("2d"),
//         oc = document.createElement('canvas'),
//         octx = oc.getContext('2d');
 
//     canvas.width = width; 
//     canvas.height = canvas.width * img.height / img.width;
 
//     var cur = {
//       width: Math.floor(img.width * 0.5),
//       height: Math.floor(img.height * 0.5)
//     }
 
//     oc.width = cur.width;
//     oc.height = cur.height;
 
//     octx.drawImage(img, 0, 0, cur.width, cur.height);
 
//     while (cur.width * 0.5 > width) {
//       cur = {
//         width: Math.floor(cur.width * 0.5),
//         height: Math.floor(cur.height * 0.5)
//       };
//       octx.drawImage(oc, 0, 0, cur.width * 2, cur.height * 2, 0, 0, cur.width, cur.height);
//     }
 
//     ctx.drawImage(oc, 0, 0, cur.width, cur.height, 0, 0, canvas.width, canvas.height);
//  }


