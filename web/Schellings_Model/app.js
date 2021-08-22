var sketchWidth;
var sketchHeight;

const cols=20;
const rows=20;

sketchWidth = document.getElementById("p5Container").offsetWidth * 0.9;
sketchHeight = document.getElementById("p5Container").offsetHeight * 0.9;


let sketch = function(p) {

    p.setup = function(){
      p.createCanvas(sketchWidth + 1, sketchHeight + 1);
      p.background(51);
    }

    p.windowResized = function(){
        sketchWidth = document.getElementById("p5Container").offsetWidth * 0.9;
        sketchHeight = document.getElementById("p5Container").offsetHeight * 0.9;
        p.resizeCanvas(sketchWidth + 1, sketchHeight + 1);
    }

    p.draw = function(){
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

