var canvas = document.getElementById("canvas-sobel");
var context = canvas.getContext("2d");
var video = document.getElementById("video");

let width = canvas.width;
let height = canvas.height;



document.addEventListener(
  "DOMContentLoaded",
  function () {
    video.addEventListener(
      "play",
      function () {
        draw(this, context, width, height);
      },
      false
    );
  },
  false
);

function draw(v, c, w, h) {
  if (v.paused || v.ended) return false;
  c.drawImage(v, 0, 0, w, h);
  var imageData = c.getImageData(0, 0, w, h);
  var sobelData = Sobel(imageData);

  var sobelImageData = sobelData.toImageData();
  c.putImageData(sobelImageData, 0, 0);
  setTimeout(draw, 1, v, c, w, h);
}
