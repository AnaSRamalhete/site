// Event Listener to refresh numbers of simulation

document.getElementById("btnRefresh").addEventListener("click", function() {
    pPopulation1 = document.getElementById("pPopulation1").value;   
    pEmpty = document.getElementById("emptySpace").value;   
    minNeighbours = document.getElementById("minSameNeighbours").value;   
    maxNeighbours = document.getElementById("maxSameNeighbours").value; 

    console.log(pPopulation1)
    console.log(pEmpty)
    console.log(minNeighbours)
    console.log(maxNeighbours)
  }); 


// Variables to use on Schellings model 

const cols=20;
const rows=20;

var pPopulation1 = document.getElementById("pPopulation1").value;   
var pEmpty = document.getElementById("emptySpace").value;   
var minNeighbours = document.getElementById("minSameNeighbours").value;   
var maxNeighbours = document.getElementById("maxSameNeighbours").value; 

console.log(pPopulation1)
console.log(pEmpty)
console.log(minNeighbours)
console.log(maxNeighbours)

var sketchWidth = document.getElementById("p5Container").offsetWidth * 0.9;
var sketchHeight = document.getElementById("p5Container").offsetHeight * 0.9;


let sketch = function(p) {

    p.setup = function(){
      p.createCanvas(Math.min(sketchWidth, sketchHeight) + 1,Math.min(sketchWidth, sketchHeight)  + 1);
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
        var w = Math.min(widthSquare, heigthSquare);

        for (var i=0; i<cols; i++){
            for(var j=0; j<rows; j++){
                var x= i*w;
                var y=j*w;

                p.stroke(0);
                p.fill(255);
                p.rect(x, y, w, w);
            }
        }
    }
  };

  new p5(sketch, 'p5Container');

