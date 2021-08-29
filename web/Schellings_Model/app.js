// Variables to use on Schellings model 

const cols=50;
const rows=50;

var pPopulation1 = document.getElementById("pPopulation1").value/100;   
var pEmpty = document.getElementById("emptySpace").value/100;   
var minNeighbours = document.getElementById("minSameNeighbours").value;   
var maxNeighbours = document.getElementById("maxSameNeighbours").value; 

var sketchWidth = document.getElementById("p5Container").offsetWidth * 0.9;
var sketchHeight = document.getElementById("p5Container").offsetHeight * 0.9;

var widthSquare = sketchWidth/cols;
var heigthSquare = sketchHeight/rows;
var w = Math.min(widthSquare, heigthSquare);

let grid;


let sketch = function(p) {

    p.setup = function(){
      p.createCanvas(Math.min(sketchWidth, sketchHeight) + 1,Math.min(sketchWidth, sketchHeight)  + 1);
      grid = new Grid(rows, cols, w, minNeighbours, maxNeighbours, 0, pEmpty, pPopulation1, p);
    //   p.noLoop();
    }

    p.windowResized = function(){
        p.clear();
        sketchWidth = document.getElementById("p5Container").offsetWidth * 0.9;
        sketchHeight = document.getElementById("p5Container").offsetHeight * 0.9;
        p.resizeCanvas(sketchWidth + 1, sketchHeight + 1);
        
        widthSquare = sketchWidth/cols;
        heigthSquare = sketchHeight/rows;
        w = Math.min(widthSquare, heigthSquare);

        for (var i=0; i<cols; i++){
            for(var j=0; j<rows; j++){
                grid.population[i][j].resize(w);
            }
        }
    }

    p.draw = function(){
        p.clear()
        widthSquare = sketchWidth/cols;
        heigthSquare = sketchHeight/rows;
        w = Math.min(widthSquare, heigthSquare);

        grid.show();
        
        if(grid.PercetageunHappy()>0.2){
            grid.simStep();
        }
    }
};

new p5(sketch, 'p5Container');

// Event Listener to refresh numbers of simulation

document.getElementById("btnRefresh").addEventListener("click", function() {
    pPopulation1 = document.getElementById("pPopulation1").value/100;   
    pEmpty = document.getElementById("emptySpace").value/100;   
    minNeighbours = document.getElementById("minSameNeighbours").value;   
    maxNeighbours = document.getElementById("maxSameNeighbours").value; 

    console.log(pPopulation1)
    console.log(pEmpty)
    console.log(minNeighbours)
    console.log(maxNeighbours)

    grid.refresh(rows, cols, w, minNeighbours, maxNeighbours, 0, pEmpty, pPopulation1);
}); 