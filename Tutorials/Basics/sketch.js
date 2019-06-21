// Daniel Shiffman 
// https://github.com/CodingTrain/website/tree/master/Tutorials/P5JS/p5.js_video/11.3_p5.js_pixels

// function myFunction() {
//   var iframe = document.getElementById("myFrame");
//   var elmnt = iframe.contentWindow.document.getElementsByTagName("H1")[0];
//   elmnt.style.display = "none";
// }

function setup() {
  createCanvas(320, 240);
  pixelDensity(1);
}

function draw() {
  background(51);

  loadPixels();
  for (var y = 0; y < height; y++) {
    for (var x = 0; x < width; x++) {
      var index = (x + y * width)*4;
      pixels[index+0] = x;
      pixels[index+1] = random(255);
      pixels[index+2] = y;
      pixels[index+3] = 255;      
    }
  }
  updatePixels();
 
}
