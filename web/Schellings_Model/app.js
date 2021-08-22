var sketchWidth;
var sketchHeight;

const cols=50;
const rows=50;

sketchWidth = document.getElementById("p5Container").offsetWidth * 0.9;
sketchHeight = document.getElementById("p5Container").offsetHeight * 0.9;

// console.log(sketchHeight)
// console.log(sketchWidth)

let sketch = function(p) {
    p.setup = function(){
      p.createCanvas(sketchWidth + 2, sketchHeight + 2);
      p.background(51);

      var widthSquare = sketchWidth/cols;
      var heigthSquare = sketchHeight/rows;

      for (var i=0; i<cols; i++){
          for(var j=0; j<rows; j++){
              var x= i*widthSquare;
              var y=j*heigthSquare;

              p.stroke(0);
              p.fill(255);
              p.rect(x, y, widthSquare, heigthSquare);
            }
        }
    }
  };
  new p5(sketch, 'p5Container');

// function setup() {
//   sketchWidth = document.getElementById("p5Container").offsetWidth;
//   sketchHeight = document.getElementById("p5Container").offsetHeight;
//   let renderer = createCanvas(sketchWidth, sketchHeight);
//   renderer.parent("grid-section");  
// }

// function draw() {
//   background(51);
// }

// function windowResized() {
//   sketchWidth = document.getElementById("p5Container").offsetWidth;
//   sketchHeight = document.getElementById("p5Container").offsetHeight;
//   resizeCanvas(sketchWidth, sketchHeight);
// }